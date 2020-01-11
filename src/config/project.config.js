/**
 * 系统默认配置项
 * primaryColor - 默认主题色
 * navTheme - sidebar theme ['dark', 'light'] 两种主题
 * colorWeak - 色盲模式
 * layout - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * fixedHeader - 固定 Header : boolean
 * fixSiderbar - 固定左侧菜单栏 ： boolean
 * autoHideHeader - 向下滚动时，隐藏 Header : boolean
 * contentWidth - 内容区布局： 流式 |  固定
 *
 * storageOptions: {} - Vue-ls 插件配置项 (localStorage/sessionStorage)
 *
 */

const setting = {
  primaryColor: '#1890FF', // primary color of ant design
  navTheme: 'light', // theme for nav menu
  layout: 'sidemenu', // nav menu position: sidemenu or topmenu
  contentWidth: 'Fixed', // layout of content: Fluid or Fixed, only works when layout is topmenu
  fixedHeader: false, // sticky header
  fixSiderbar: false, // sticky siderbar
  autoHideHeader: false, //  auto hide header
  colorWeak: false,
  multipage: true, //默认多页签模式
  // vue-ls options
  storageOptions: {
    namespace: 'pro__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local' // storage name session, local, memory
  },
  
}

export const projectConfig = {
  isMock: true,
  baseURL: '/jeecg-boot',
  baseURLByMock: '/mock',
  brand: 'YOD INFO',
  title: 'YOD INFO',
  brandSolo: 'YOD 企业级 快速开发平台',
  brandWebSite: '#',
  copyrightLink: '',
  copyrightTitle: 'YOD.INFO',
  defaultSettings: setting,
  setting,
  serverPermission: false,// 是否需要服务端权限控制
}

export const settingGlobalConfig = () => {
  // @ts-ignore
  window._CONFIG = {}
  // @ts-ignore
  window._CONFIG['domianURL'] = 'http://127.0.0.1:8080/jeecg-boot'
  // @ts-ignore
  window._CONFIG['casPrefixUrl'] = 'http://cas.example.org:8443/cas'
  // @ts-ignore
  window._CONFIG['imgDomainURL'] = window._CONFIG['domianURL'] + '/sys/common/view'
  // @ts-ignore
  window._CONFIG['downloadUrl'] = window._CONFIG['domianURL'] + '/sys/common/download'
  // @ts-ignore
  window._CONFIG['pdfDomainURL'] = window._CONFIG['domianURL'] + '/sys/common/pdf/pdfPreviewIframe'
}
