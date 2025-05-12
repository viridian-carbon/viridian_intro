import DefaultTheme from 'vitepress/theme';
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute, useRouter } from 'vitepress';
import { h, watch, defineComponent } from 'vue';
import { requireAuth, logout, getUser } from './utils/auth.js';
import './custom.css';

// 创建一个基于 setup 的布局组件
const VitePressLayout = defineComponent({
    name: 'VitePressLayout',
    setup() {
        const route = useRoute();
        const router = useRouter();

        // 启用图片查看器插件
        imageViewer(route);

        // 监听路由变化，检查是否需要身份验证
        watch(
            () => route.path,
            (newPath) => {
                const redirectPath = requireAuth({ path: newPath });
                if (redirectPath !== newPath) {
                    router.go(redirectPath);
                }
            },
            { immediate: true }
        );

        return () => {
            // 使用默认布局，添加登出按钮和用户信息
            return h(DefaultTheme.Layout, null, {
                'nav-bar-content-after': () => {
                    const user = getUser();
                    if (user) {
                        return h('div', { class: 'user-nav-container' }, [
                            h('span', { class: 'username' }, `${user.username}`),
                            h('button', {
                                class: 'logout-button',
                                onClick: () => {
                                    logout();
                                    router.go('/login');
                                }
                            }, '退出登录')
                        ]);
                    }
                    return null;
                }
            });
        };
    }
});

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // 注册全局组件
        ctx.app.component('vImageViewer', vImageViewer);
    },
    Layout: VitePressLayout
};