import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "融禹使用手册",
  description: "融禹智慧综合能源管理系统使用手册",
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '融禹使用手册',
        link: '/product/basic-blocks',
      }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    sidebar: {
      '/product/': [
        {
          text: '了解基础板块',
          link: '/product/basic-blocks',
        },
        {
          text: '用水管理基础',
          collapsed: false,
          link: '/product/water-management-basics',
        },
        {
          text: '用水管理进阶',
          collapsed: false,
          items: [
            { text: '划分用水区域', link: '/product/water-zone-division' },
            { text: '设置用水定额', link: '/product/water-quota-settings' },
          ]
        },
        {
          text: '用电管理基础',
          collapsed: false,
          link: '/product/electricity-management-basics',
        }
      ]
    },
    outline: {
      level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
  ],
})