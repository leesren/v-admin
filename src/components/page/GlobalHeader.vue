<template>
  <!-- , width: fixedHeader ? `calc(100% - ${sidebarOpened ? 256 : 80}px)` : '100%'  -->
  <div>
    <div class="header" :class="theme">
      <a-icon class="trigger" :type="collapsed ? 'menu-fold' : 'menu-unfold'" @click.native="toggle"></a-icon>
      <user-menu :theme="theme" />
    </div>
    <!-- 顶部导航栏模式 -->
  </div>
</template>

<script>
import UserMenu from '../tools/UserMenu'
import SMenu from '../menu/'
import Logo from '../tools/Logo'

import { mixin } from '@/utils/mixin.js'

export default {
  name: 'GlobalHeader',
  components: {
    UserMenu,
    SMenu,
    Logo
  },
  mixins: [mixin],
  props: {
    mode: {
      type: String,
      // sidemenu, topmenu
      default: 'sidemenu'
    },
    menus: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    device: {
      type: String,
      required: false,
      default: 'desktop'
    }
  },
  data() {
    return {
      headerBarFixed: false,
      //update-begin--author:sunjianlei---date:20190508------for: 顶部导航栏过长时显示更多按钮-----
      topMenuStyle: {
        headerIndexLeft: {},
        topNavHeader: {},
        headerIndexRight: {},
        topSmenuStyle: {}
      }
    }
  },
  watch: {
    /** 监听设备变化 */
    device() {
      if (this.mode === 'topmenu') {
        this.buildTopMenuStyle()
      }
    },
    /** 监听导航栏模式变化 */
    mode(newVal) {
      if (newVal === 'topmenu') {
        this.buildTopMenuStyle()
      }
    }
  },
  //update-end--author:sunjianlei---date:20190508------for: 顶部导航栏过长时显示更多按钮-----
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    //update-begin--author:sunjianlei---date:20190508------for: 顶部导航栏过长时显示更多按钮-----
    if (this.mode === 'topmenu') {
      this.buildTopMenuStyle()
    }
    //update-end--author:sunjianlei---date:20190508------for: 顶部导航栏过长时显示更多按钮-----
  },
  methods: {
    handleScroll() {
      if (this.autoHideHeader) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 100) {
          this.headerBarFixed = true
        } else {
          this.headerBarFixed = false
        }
      } else {
        this.headerBarFixed = false
      }
    },
    toggle() {
      this.$emit('toggle')
    },
    //update-begin--author:sunjianlei---date:20190508------for: 顶部导航栏过长时显示更多按钮-----
    buildTopMenuStyle() {
      if (this.mode === 'topmenu') {
        if (this.device === 'mobile') {
          // 手机端需要清空样式，否则显示会错乱
          this.topMenuStyle.topNavHeader = {}
          this.topMenuStyle.topSmenuStyle = {}
          this.topMenuStyle.headerIndexRight = {}
          this.topMenuStyle.headerIndexLeft = {}
        } else {
          let rightWidth = '360px'
          this.topMenuStyle.topNavHeader = { 'min-width': '165px' }
          this.topMenuStyle.topSmenuStyle = { width: 'calc(100% - 165px)' }
          this.topMenuStyle.headerIndexRight = { 'min-width': rightWidth }
          this.topMenuStyle.headerIndexLeft = { width: `calc(100% - ${rightWidth})` }
        }
      }
    }
    //update-begin--author:sunjianlei---date:20190508------for: 顶部导航栏过长时显示更多按钮-----
  }
}
</script>

<style lang="less" scoped>
/* update_begin author:scott date:20190220 for: 缩小首页布局顶部的高度*/

@height: 59px;

.layout {
  .top-nav-header-index {
    .header-index-wide {
      margin-left: 10px;

      .ant-menu.ant-menu-horizontal {
        height: @height;
        line-height: @height;
      }
    }
    .trigger {
      line-height: 64px;
      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }
    }
  }

  .header {
    z-index: 2;
    padding: 0;
    transition: background 300ms;

    /* dark 样式 */
    &.dark {
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
      color: white;
    }
  }

  .header,
  .top-nav-header-index {
    &.dark .trigger:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
}
</style>
<style>
/deep/.ant-layout-header {
  padding: 0;
}
</style>
