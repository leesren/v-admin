<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-locale-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import enquireScreen from '@/utils/device'

export default {
  data() {
    return {
      locale: zhCN
    }
  },
  created() {
    enquireScreen(deviceType => {
      // tablet
      if (deviceType === 0) {
        this.$store.commit('TOGGLE_DEVICE', 'mobile')
        this.$store.dispatch('setSidebar', false)
      }
      // mobile
      else if (deviceType === 1) {
        this.$store.commit('TOGGLE_DEVICE', 'mobile')
        this.$store.dispatch('setSidebar', false)
      } else {
        this.$store.commit('TOGGLE_DEVICE', 'desktop')
        this.$store.dispatch('setSidebar', true)
      }
    })
  }
}
</script>
<style>
#app {
  height: 100%;
}
</style>
