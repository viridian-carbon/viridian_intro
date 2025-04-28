import { defineConfig } from 'vitepress'  // https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "融禹使用手册",
  description: "融禹-智慧综合能源管理系统使用手册",
  lang: 'zh-CN', // 设置语言为中文

  // 设置基本路径，如果部署在子目录则需要修改
  // base: '/',

  // 启用最后更新时间
  lastUpdated: true,

  // 配置 Markdown 解析器选项
  markdown: {
    lineNumbers: true,
    // 支持代码块中的行高亮显示
    theme: 'github-dark',
  },


  themeConfig: {
    // 搜索配置
    search: {
      provider: 'local',
      options: {
        detailedView: true, // 启用详细视图
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                displayDetails: '显示详细信息',
                backButtonTitle: '返回',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    // Logo 配置
    logo: '/logo.svg',
    siteTitle: '融禹综合智慧能源管理系统',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '融禹使用手册',
        link: '/product/basic-blocks',
        activeMatch: '/product/'
      },
      {
        text: '页面功能',
        items: [
          { text: '首页', link: '/pageFunction/SimpleDashboard' },
          {
            text: '能源数据',
            items: [
              { text: '能碳监控', link: '/pageFunction/EnergyData/Carbon' },
              { text: '水资源图表数据', link: '/pageFunction/EnergyData/WaterData' },
              { text: '水资源报表数据', link: '/pageFunction/EnergyData/WaterIntelligentMeter' },
              { text: '水平衡', link: '/pageFunction/EnergyData/WaterBalance' },
              { text: '电能图表数据', link: '/pageFunction/EnergyData/ElectricityData' },
              { text: '电能报表数据', link: '/pageFunction/EnergyData/ElectricityIntelligentMeter' },
              { text: '用能计划', link: '/pageFunction/EnergyData/EnergyPlan' },
            ]
          }, {
            text: '设备中心',
            items: [
              { text: '设备信息', link: '/pageFunction/DeviceCenter/DeviceInfo' },
              { text: '设备架构', link: '/pageFunction/DeviceCenter/DeviceArchitecture' },
            ]
          }, {
            text: '异常设备中心',
            items: [
              { text: '异常处理', link: '/pageFunction/WarningCenter/ExceptionHandling.md' },
              { text: '智能漏损分析', link: '/pageFunction/WarningCenter/WaterLeakageAnalysis.md' },
            ]
          }, {
            text: '系统管理',
            items: [{
              text: '统计标签管理',
              link: '/pageFunction/SystemManagement/StatisticsLabelManagement'
            }]
          }
        ],
        activeMatch: '/pageFunction/'
      },
    ],

    // 页脚配置
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    footer: {
      message: '四川绿碳桓科技有限公司',
      copyright: `Copyright © 2025 四川绿碳桓科技有限公司`
    },

    // 侧边栏配置
    sidebar: {
      '/pageFunction/': [
        {
          text: '基础功能',
          items: [
            { text: '首页', link: '/pageFunction/SimpleDashboard' },
          ]
        },
        {
          text: '能源数据',
          collapsed: false,
          items: [
            { text: '能碳监控', link: '/pageFunction/EnergyData/Carbon' },
            { text: '水资源图表数据', link: '/pageFunction/EnergyData/WaterData' },
            { text: '水资源报表数据', link: '/pageFunction/EnergyData/WaterIntelligentMeter' },
            { text: '水平衡', link: '/pageFunction/EnergyData/WaterBalance' },
            { text: '电能图表数据', link: '/pageFunction/EnergyData/ElectricityData' },
            { text: '电能报表数据', link: '/pageFunction/EnergyData/ElectricityIntelligentMeter' },
            { text: '用能计划', link: '/pageFunction/EnergyData/EnergyPlan' },
          ]
        },
        {
          text: '设备中心',
          items: [
            { text: '设备信息', link: '/pageFunction/DeviceCenter/DeviceInfo' },
            { text: '设备架构', link: '/pageFunction/DeviceCenter/DeviceArchitecture' },
          ]
        }, {
          text: '异常设备中心',
          items: [
            { text: '异常处理', link: '/pageFunction/WarningCenter/ExceptionHandling.md' },
            { text: '智能漏损分析', link: '/pageFunction/WarningCenter/WaterLeakageAnalysis.md' },
          ]
        }, {
          text: '系统管理',
          items: [{
            text: '统计标签管理',
            link: '/pageFunction/SystemManagement/StatisticsLabelManagement'
          }]
        }
      ],
      '/product/': [
        {
          text: '产品概述',
          items: [
            {
              text: '了解基础板块',
              link: '/product/basic-blocks',
            }
          ]
        },
        {
          text: '用水管理',
          collapsed: false,
          items: [
            { text: '用水管理基础', link: '/product/water-management-basics' },
            { text: '划分用水区域', link: '/product/water-zone-division' },
            { text: '设置用水定额', link: '/product/water-quota-settings' },
          ]
        },
        {
          text: '用电管理',
          collapsed: false,
          items: [
            { text: '用电管理基础', link: '/product/electricity-management-basics' },
          ]
        }
      ]
    },

    // 大纲配置
    outline: {
      level: [2, 4], // 显示2-4级标题
      label: '当前页大纲' // 文字显示
    },

    // 最后更新时间配置
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // UI 文本本地化
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3c8772' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],
})