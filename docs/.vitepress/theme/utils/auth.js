/**
 * 检查用户是否有权限访问当前路径
 * @param {Object} options 选项对象
 * @param {string} options.path 当前访问路径
 * @returns {string} 最终跳转路径(如果需要重定向则返回新路径，否则返回原路径)
 */
export function requireAuth({ path }) {
    // 登录页面不需要身份验证
    if (path === '/login') {
        return path;
    }

    // 获取用户信息
    const user = getUser();

    // 定义公开路径列表（不需要登录就能访问的路径）
    const publicPaths = ['/']; // 例如首页可以公开访问

    // 如果路径是公开的，则直接返回
    if (publicPaths.some(p => path === p)) {
        return path;
    }

    // 如果没有用户会话，重定向到登录页面
    if (!user) {
        return '/login';
    }

    // 检查会话是否过期
    if (user.timestamp) {
        const now = new Date().getTime();
        const expirationTime = 12 * 60 * 60 * 1000; // 12小时
        if (now - user.timestamp > expirationTime) {
            // 清除过期会话
            logout();
            return '/login';
        }
    }

    return path;
}

/**
 * 获取当前登录用户
 * @returns {Object|null} 用户信息对象或null
 */
export function getUser() {
    // 从localStorage获取用户信息
    if (typeof window === 'undefined') {
        return null; // 服务器端渲染时返回null
    }

    const userStr = localStorage.getItem('user');
    if (!userStr) return null;

    try {
        return JSON.parse(userStr);
    } catch (e) {
        return null;
    }
}

/**
 * 用户登录
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns {boolean} 登录是否成功
 */
export function login(username, password) {
    // 实际项目中，这里应该调用API进行用户名和密码验证
    // 这里简化处理，只要提供了用户名和密码就认为登录成功
    if (username && password) {
        // 存储用户信息到localStorage
        const user = {
            username,
            timestamp: new Date().getTime()
        };
        localStorage.setItem('user', JSON.stringify(user));
        return true;
    }
    return false;
}

/**
 * 退出登录
 */
export function logout() {
    // 清除用户信息
    localStorage.removeItem('user');
}