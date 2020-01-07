<template>
  <div class="footer">
    <!-- <div class="links">
      <a :href="projectConfig.brandWebSite" target="_blank">首页</a>
      <a :href="projectConfig.brandWebSite" target="_blank">
        <a-icon type="github" />
      </a>
      <a href="https://ant.design/">Ant Design</a>
      <a href="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/">Vue Antd</a>
    </div>-->
    <div class="copyright">
      Copyright
      <a-icon type="copyright" />2019
      <span>{{projectConfig.copyrightTitle}} 出品</span>
    </div>
  </div>
</template>

<script>
import { ProjectConfigMixin } from '../../mixins'
export default {
  name: 'LayoutFooter',
  mixins: [ProjectConfigMixin]
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;

  .links {
    margin-bottom: 8px;

    a {
      color: rgba(0, 0, 0, 0.45);

      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
</style>