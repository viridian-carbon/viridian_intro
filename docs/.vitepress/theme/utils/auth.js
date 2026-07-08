function isExportMode() {
    if (typeof window === 'undefined') {
        return false;
    }
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes('viridianexportpdf') ||
        userAgent.includes('puppeteer') ||
        userAgent.includes('headlesschrome') ||
        userAgent.includes('headless') ||
        userAgent.includes('chromeheadless');
}

/**
 * 检查用户是否有权限访问当前路径
 * @param {Object} options 选项对象
 * @param {string} options.path 当前访问路径
 * @returns {string} 最终跳转路径(如果需要重定向则返回新路径，否则返回原路径)
 */
export function requireAuth({ path }) {
    if (isExportMode()) {
        return path;
    }

    if (path === '/login') {
        return path;
    }

    const user = getUser();

    const publicPaths = ['/'];

    if (publicPaths.some(p => path === p)) {
        return path;
    }

    if (!user) {
        return '/login';
    }

    if (user.timestamp) {
        const now = new Date().getTime();
        const expirationTime = 12 * 60 * 60 * 1000;
        if (now - user.timestamp > expirationTime) {
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