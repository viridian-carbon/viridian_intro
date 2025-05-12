---
title: 系统登录
sidebar: false
---

<div style="display: flex; justify-content: center; align-items: center; min-height: calc(100vh - 300px); padding: 20px;">
  <div style="width: 100%; max-width: 400px; padding: 30px; border-radius: 8px; box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1); background-color: white;">
    <div style="text-align: center; margin-bottom: 30px;">
      <img src="/logo.svg" alt="融禹系统" style="width: 80px; height: 80px;">
      <h1 style="font-size: 1.5rem; color: #3c8772; margin-top: 10px;">融禹智慧能碳管理系统</h1>
    </div>
    <div style="margin-bottom: 20px;">
      <label for="username" style="display: block; margin-bottom: 8px; font-weight: 500;">用户名</label>
      <input 
        id="username" 
        type="text" 
        placeholder="请输入用户名" 
        style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px;"
      >
    </div>
    <div style="margin-bottom: 20px;">
      <label for="password" style="display: block; margin-bottom: 8px; font-weight: 500;">密码</label>
      <input 
        id="password" 
        type="password" 
        placeholder="请输入密码" 
        style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px;"
      >
    </div>
    <div id="errorMessage" style="color: #f56c6c; margin-bottom: 15px; text-align: center; display: none;"></div>
    <button 
      id="loginButton"
      style="width: 100%; padding: 12px; background-color: #3c8772; color: white; border: none; border-radius: 4px; font-size: 16px; cursor: pointer; transition: background-color 0.3s;"
    >
      登 录
    </button>
  </div>
</div>

<script>
// SHA-256 加密函数
async function sha256(message) {
  // 使用浏览器内置的crypto API进行SHA-256加密
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// 使用立即执行函数并加入延迟以确保DOM已加载
(function() {
  if (typeof window === 'undefined') return;
  
  function initLoginForm() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var loginButton = document.getElementById('loginButton');
    var errorMessage = document.getElementById('errorMessage');
    
    if (!usernameInput || !passwordInput || !loginButton) {
      // 如果元素还没准备好，再次尝试
      setTimeout(initLoginForm, 100);
      return;
    }
    
    loginButton.addEventListener('click', async function() {
      var username = usernameInput.value;
      var password = passwordInput.value;
      
      if (!username || !password) {
        errorMessage.textContent = '请输入用户名和密码';
        errorMessage.style.display = 'block';
        return;
      }
      
      try {
        // 更新按钮状态
        loginButton.textContent = '登录中...';
        loginButton.disabled = true;
        
        // 对密码进行SHA-256加密
        const hashedPassword = await sha256(password);
        
        // 准备请求数据
        const loginData = {
          username: username,
          password: hashedPassword
        };
        
        // 发送登录请求到后端API
        const response = await fetch('https://production.backend.viridian.com.cn/auth/web/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        });
        
        // 解析响应
        const result = await response.json();
        
        // 判断登录是否成功
        if (result.code === 200) {
          // 登录成功
          // 保存用户信息和token(如果响应中包含)
          const userData = {
            username: username,
            token: result.token || result.data?.token,
            timestamp: new Date().getTime()
          };
          
          localStorage.setItem('user', JSON.stringify(userData));
          
          // 跳转到首页
          window.location.href = '/';
        } else {
          // 登录失败
          errorMessage.textContent = result.message || '用户名或密码错误';
          errorMessage.style.display = 'block';
          loginButton.textContent = '登 录';
          loginButton.disabled = false;
        }
      } catch (error) {
        // 处理请求错误
        console.error('登录请求失败:', error);
        errorMessage.textContent = '登录失败，请稍后再试';
        errorMessage.style.display = 'block';
        loginButton.textContent = '登 录';
        loginButton.disabled = false;
      }
    });
    
    // 监听回车键提交表单
    passwordInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        loginButton.click();
      }
    });
  }
  
  // 确保不会过早执行
  setTimeout(initLoginForm, 100);
})();
</script>