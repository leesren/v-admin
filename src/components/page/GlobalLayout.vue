<template>
  <a-layout class="layout" :class="[device]">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <side-menu
        mode="inline"
        :menus="menus"
        @menuSelect="menuSelect"
        :theme="navTheme"
        :collapsed="collapsed"
        :collapsible="true"
      ></side-menu>
    </a-layout-sider>
    <a-layout :class="[layoutMode, `content-width-${contentWidth}`]">
      <!-- layout header -->

      <a-layout-header
        class="yod-ant-layout-header"
        :style="{ paddingLeft: getSidebarWidth }"
        :class="[fixedHeader && 'ant-header-fixedHeader', navTheme]"
      >
        <global-header
          :mode="layoutMode"
          :menus="menus"
          :theme="navTheme"
          :collapsed="collapsed"
          :device="device"
          @toggle="toggle"
        />
      </a-layout-header>

      <!-- layout content -->
      <a-layout-content :style="{ height: '100%', paddingTop: fixedHeader ? '64px' : '0' }">
        <slot></slot>
      </a-layout-content>

      <!-- layout footer -->
      <a-layout-footer style="padding: 0px">
        <global-footer />
      </a-layout-footer>
    </a-layout>

    <!-- update-start---- author:os_chengtgen -- date:20190830 --  for:issues/463 -编译主题颜色已生效，但还一直转圈，显示主题 正在编译 ---- -->
    <!--<setting-drawer></setting-drawer>-->
    <!-- update-end---- author:os_chengtgen -- date:20190830 --  for:issues/463 -编译主题颜色已生效，但还一直转圈，显示主题 正在编译 ---- -->
  </a-layout>
</template>

<script>
import SideMenu from '@/components/menu/SideMenu'
import GlobalHeader from '@/components/page/GlobalHeader'
import GlobalFooter from '@/components/page/GlobalFooter'
// update-start---- author:os_chengtgen -- date:20190830 --  for:issues/463 -编译主题颜色已生效，但还一直转圈，显示主题 正在编译 ------
// import SettingDrawer from '@/components/setting/SettingDrawer'
// 注释这个因为在个人设置模块已经加载了SettingDrawer页面
// update-end ---- author:os_chengtgen -- date:20190830 --  for:issues/463 -编译主题颜色已生效，但还一直转圈，显示主题 正在编译 ------

import { triggerWindowResizeEvent } from '@/utils/util'
import { mapState, mapActions } from 'vuex'
import { mixin, mixinDevice } from '@/utils/mixin.js'

export default {
  name: 'GlobalLayout',
  components: {
    SideMenu,
    GlobalHeader,
    GlobalFooter
    // update-start---- author:os_chengtgen -- date:20190830 --  for:issues/463 -编译主题颜色已生效，但还一直转圈，显示主题 正在编译 ------
    // // SettingDrawer
    // 注释这个因为在个人设置模块已经加载了SettingDrawer页面
    // update-end ---- author:os_chengtgen -- date:20190830 --  for:issues/463 -编译主题颜色已生效，但还一直转圈，显示主题 正在编译 ------
  },
  mixins: [mixin, mixinDevice],
  data() {
    return {
      collapsed: false,
      activeMenu: {},
      menus: []
    }
  },
  computed: {
    ...mapState({
      // 主路由
      mainRouters: state => state.permission.addRouters,
      // 后台菜单
      permissionMenuList: state => state.user.permissionList
    }),
    getSidebarWidth() {
      const sidebar = this.$store.state.app.sidebar
      if (this.fixedHeader) {
        return (!this.collapsed ? sidebar.openWidth : sidebar.closeWidth) + 'px'
      }
      return 0
    }
  },
  watch: {
    sidebarOpened(val) {
      this.collapsed = !val
    }
  },
  created() {
    //--update-begin----author:scott---date:20190320------for:根据后台菜单配置，判断是否路由菜单字段，动态选择是否生成路由（为了支持参数URL菜单）------
    //this.menus = this.mainRouters.find((item) => item.path === '/').children;
    this.menus = this.permissionMenuList
    // 根据后台配置菜单，重新排序加载路由信息
    console.log('----加载菜单逻辑----')
    console.log(this.mainRouters)
    console.log(this.permissionMenuList)
    console.log('----navTheme------' + this.navTheme)
    //--update-end----author:scott---date:20190320------for:根据后台菜单配置，判断是否路由菜单字段，动态选择是否生成路由（为了支持参数URL菜单）------
    this.$emit('toggleCollapsed', this.collapsed)
  },
  methods: {
    ...mapActions(['setSidebar']),
    toggle() {
      this.collapsed = !this.collapsed
      this.setSidebar(!this.collapsed)
      this.$emit('toggleCollapsed', this.collapsed)
      triggerWindowResizeEvent()
    },
    menuSelect() {
      if (!this.isDesktop()) {
        this.collapsed = false
      }
    },
    //update-begin-author:taoyan date:20190430 for:动态路由title显示配置的菜单title而不是其对应路由的title
    myMenuSelect(value) {
      //此处触发动态路由被点击事件
      this.findMenuBykey(this.menus, value.key)
      this.$emit('dynamicRouterShow', value.key, this.activeMenu.meta.title)
    },
    findMenuBykey(menus, key) {
      for (let i of menus) {
        if (i.path == key) {
          this.activeMenu = { ...i }
        } else if (i.children && i.children.length > 0) {
          this.findMenuBykey(i.children, key)
        }
      }
    }
    //update-end-author:taoyan date:20190430 for:动态路由title显示配置的菜单title而不是其对应路由的title
  }
}
</script>

<style lang="scss">
body {
  // 打开滚动条固定显示
  overflow-y: scroll;
  &.colorWeak {
    filter: invert(80%);
  }
}

.layout {
  min-height: 100vh !important;
  overflow-x: hidden;

  &.ant-layout-has-sider {
    flex-direction: row;
  }

  .trigger {
    font-size: 22px;
    line-height: 42px;
    padding: 0 18px;
    cursor: pointer;
    transition: color 300ms, background 300ms;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  .sidemenu {
    .ant-header-fixedHeader {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9;
      width: 100%;
      transition: width 0.2s;

      &.ant-header-side-opened {
        width: calc(100% - 200px);
      }

      &.ant-header-side-closed {
        width: calc(100% - 80px);
      }
    }
  }
  .ant-layout-header {
    &.light {
      background-color: #fff;
      color: #515a6e;
    }
  }
  .header {
    padding: 0 12px 0 0;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    position: relative;
    &.light {
      color: #515a6e;
    }
  }

  .header,
  .top-nav-header-index {
    .user-wrapper {
      float: right;
      height: 100%;

      .action {
        cursor: pointer;
        padding: 0 14px;
        display: inline-block;
        transition: all 0.3s;

        height: 70%;
        line-height: 46px;

        &.action-full {
          height: 100%;
        }

        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .avatar {
          margin: 20px 10px 20px 0;
          color: #1890ff;
          background: hsla(0, 0%, 100%, 0.85);
          vertical-align: middle;
        }

        .icon {
          font-size: 16px;
          padding: 4px;
        }
      }
    }
  }

  // 内容区
  .layout-content {
    margin: 24px 24px 0px;
    height: 64px;
    padding: 0 12px 0 0;
  }
}

// 菜单样式
.sider {
  box-shadow: 2px 116px 6px 0 rgba(0, 21, 41, 0.35);
  position: relative;
  z-index: 10;

  &.ant-fixed-sidemenu {
    position: fixed;
    height: 100%;
  }

  .logo {
    height: 64px;
    position: relative;
    line-height: 64px;
    padding-left: 24px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    overflow: hidden;
    border-bottom: 1px solid #f8f8f9;
    &.dark {
      border-bottom: 1px solid #101117;
    }
    img,
    h1 {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      height: 32px;
    }

    h1 {
      font-size: 15px;
      margin: 0 0 0 8px;
    }
  }

  &.light {
    background-color: #fff;
    box-shadow: 2px 116px 8px 0 rgba(29, 35, 41, 0.05);

    .logo {
      box-shadow: 1px 1px 0 0 #e8e8e8;

      h1 {
        color: unset;
      }
    }

    .ant-menu-light {
      border-right-color: transparent;
    }
  }
}

// 外置的样式控制
.user-dropdown-menu-wrapper.ant-dropdown-menu {
  padding: 4px 0;

  .ant-dropdown-menu-item > .anticon:first-child,
  .ant-dropdown-menu-item > a > .anticon:first-child,
  .ant-dropdown-menu-submenu-title > .anticon:first-child .ant-dropdown-menu-submenu-title > a > .anticon:first-child {
    min-width: 12px;
    margin-right: 8px;
  }
}

// 数据列表 样式
.table-alert {
  margin-bottom: 16px;
}

.table-page-search-wrapper {
  .ant-form-inline {
    .ant-form-item {
      display: flex;
      margin-bottom: 24px;
      margin-right: 0;

      .ant-form-item-control-wrapper {
        flex: 1 1;
        display: inline-block;
        vertical-align: middle;
      }

      > .ant-form-item-label {
        line-height: 32px;
        padding-right: 8px;
        width: auto;
      }
      .ant-form-item-control {
        height: 32px;
        line-height: 32px;
      }
    }
  }

  .table-page-search-submitButtons {
    display: block;
    margin-bottom: 24px;
    white-space: nowrap;
  }
}

.content {
  .table-operator {
    margin-bottom: 18px;

    button {
      margin-right: 8px;
    }
  }
}
</style>
<style>
.yod-ant-layout-header.ant-layout-header {
  padding: 0;
}
</style>
