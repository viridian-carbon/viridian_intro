---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "融禹智慧能碳管理系统"
  text: "简化能源管理，优化资源利用"
  tagline: 为企业打造智能、高效、可持续的能源管理解决方案
  image:
    src: /logo.svg
    alt: 融禹Logo
    width: 300
    height: 300

  actions:
    - theme: brand
      text: 融禹使用手册
      link: /product/basic-blocks
    - theme: alt
      text: 页面功能
      link: /pageFunction/SimpleDashboard

head:
  - - meta
    - name: theme-color
      content: '#3C8772'
  - - meta
    - name: apple-mobile-web-app-capable
      content: yes
  - - meta
    - name: apple-mobile-web-app-status-bar-style
      content: black

features:
  - icon: 
      src: /icons/user-friendly.svg
      width: 48
      height: 48
      light: /icons/user-friendly-light.svg
      dark: /icons/user-friendly-dark.svg
    title: 用户友好
    details: 直观简洁的界面设计，减少专业术语，使非专业人员也能轻松操作和管理能源数据
  
  - icon: 
      src: /icons/compatibility.svg
      width: 48
      height: 48
    title: 全面兼容
    details: 支持水、电、气全能源管理，兼容多种厂商的表计设备，适应各行业应用场景，满足企业多元化能源监测需求
  
  - icon: 
      src: /icons/reports.svg
      width: 48
      height: 48
    title: 提供定制化报表
    details: 提供灵活的定制化报表管理，根据企业需求个性化设计数据展示形式，直观呈现能源使用情况，辅助管理者做出明智决策
---


<style>
.industry-container {
  margin: 2rem 0;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}

.industry-title h3 {
  margin-top: 0;
  text-align: center;
  font-size: 1.5rem;
  color: var(--vp-c-brand);
}

.industry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.industry-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: var(--vp-c-bg);
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.industry-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.industry-card img {
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
}

.industry-card span {
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-align: center;
}

@media (max-width: 640px) {
  .industry-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
