<template>
  <a-layout-sider
    :class="['sider', isDesktop() ? null : 'shadow', theme, fixSiderbar ? 'ant-fixed-sidemenu' : null]"
    width="200px"
    :collapsible="collapsible"
    v-model="collapsed"
    :trigger="null"
  >
    <logo />
    <s-menu :collapsed="collapsed" :menu="menus" :theme="theme" @select="onSelect" :mode="mode" :style="smenuStyle">
    </s-menu>
    <div style="background-color:#eee;height:80px;">
      <a-popover>
        <template slot="content">
          <div class="ptb5">
            <a-icon type="user" />
            <span class="pl10">个人信息</span>
          </div>
          <div class="ptb5 pointer" @click="handleLogout">
            <a-icon type="logout" />
            <span class="pl10">退出登录</span>
          </div>
        </template>
        <div class="fbox-hvc pt10 pointer tx-pc">
          <img style="width:22px;height:22px;" src="~@/assets/logo.svg" alt="light" />
          <span class="fs14 pl5 ">张三非</span>
          <a-icon type="caret-down" />
        </div>
      </a-popover>
    </div>
  </a-layout-sider>
</template>

<script>
import { Layout } from 'ant-design-vue'

import Logo from '../tools/Logo'
import SMenu from './index'
import { mixin, mixinDevice } from '@/mixins'
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: 'SideMenu',
  components: { ALayoutSider: Layout.Sider, Logo, SMenu },
  mixins: [mixin, mixinDevice],
  props: {
    mode: {
      type: String,
      required: false,
      default: 'inline'
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    },
    collapsible: {
      type: Boolean,
      required: false,
      default: false
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    menus: {
      type: Array,
      required: true
    }
  },
  computed: {
    smenuStyle() {
      let style = { padding: '0' }
      if (this.fixSiderbar) {
        style['height'] = 'calc(100% - 59px - 80px)'
        style['overflow'] = 'auto'
        style['overflow-x'] = 'hidden'
      }
      return style
    }
  },
  methods: {
    ...mapActions(['Logout']),
    onSelect(obj) {
      this.$emit('menuSelect', obj)
    },
    handleLogout() {
      const that = this

      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk() {
          return that
            .Logout({})
            .then(() => {
              window.location.href = '/'
              //window.location.reload()
            })
            .catch(err => {
              that.$message.error({
                title: '错误',
                description: err.message
              })
            })
        },
        onCancel() {}
      })
    }
  }
}
</script>
<style lang="scss" scoped>
/* update_begin author:sunjianlei date:20190509 for: 修改侧边导航栏滚动条的样式 */
.sider {
  $scrollBarSize: 10px;
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
  ul.ant-menu {
    flex: 1;
    /* 定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    &::-webkit-scrollbar {
      width: $scrollBarSize;
      height: $scrollBarSize;
      background-color: transparent;
      display: none;
    }

    & .-o-scrollbar {
      display: none;
    }

    /* 兼容IE */
    -ms-overflow-style: none;
    -ms-scroll-chaining: chained;
    -ms-content-zooming: zoom;
    -ms-scroll-rails: none;
    -ms-content-zoom-limit-min: 100%;
    -ms-content-zoom-limit-max: 500%;
    -ms-scroll-snap-type: proximity;
    -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);

    /* 定义滚动条轨道 */
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    /* 定义滑块 */
    &::-webkit-scrollbar-thumb {
      border-radius: $scrollBarSize;
      background-color: #eee;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: #dddddd;
      }

      &:active {
        background-color: #bbbbbb;
      }
    }
  }

  /** 暗色系滚动条样式 */
  &.dark ul.ant-menu {
    &::-webkit-scrollbar-thumb {
      background-color: #666666;

      &:hover {
        background-color: #808080;
      }

      &:active {
        background-color: #999999;
      }
    }
  }
}

/* update_end author:sunjianlei date:20190509 for: 修改侧边导航栏滚动条的样式 */
</style>

<!-- update_begin author:sunjianlei date:20190530 for: 选中首页的时候不显示背景颜色 -->
<style lang="less">
ul.ant-menu {
  background: #eee;
  .ant-menu-submenu > .ant-menu {
    background: #eee;
  }
}
.ant-menu:not(.ant-menu-horizontal) li.ant-menu-item-selected {
  background-color: #f9f9f9;
  // & > a,
  // & > a:hover {
  //   color: #000000;
  // }
}
.ant-menu.ant-menu-root {
  & > .ant-menu-item.ant-menu-item-selecte {
    background-color: #f9f9f9;

    & > a,
    & > a:hover {
      color: rgba(0, 0, 0, 0.65);
    }

    &.ant-menu-item-selected {
      & > a,
      & > a:hover {
        color: @primary-color;
      }
    }
  }

  &.ant-menu-dark > .ant-menu-item:first-child {
    & > a,
    & > a:hover {
      color: rgba(255, 255, 255, 0.65);
    }

    &.ant-menu-item-selected {
      & > a,
      & > a:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
<!-- update_end author:sunjianlei date:20190530 for: 选中首页的时候不显示背景颜色 -->
