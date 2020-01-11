# 权限介绍

```js
const permission = {
  allAuth: [
    // 按钮/权限
    {
      action: 'online:goGenerateCode', // 授权标识
      describe: '代码生成按钮',
      type: '1', // 授权策略， 可见/可访问(授权后可见/可访问) | 可编辑(未授权时禁用
      status: '1' // 状态（有效|无效）
    }
  ],
  auth: [
    // 按钮/权限
    { action: 'online:ceshi_ruzhi:gwei', describe: '岗位字段控制', type: '1' },
  ],
  menu: [
    {
      // 一级菜单
      redirect: null, // 是否直接跳转
      path: '/dashboard/analysis',
      component: 'dashboard/Analysis', // 前端组件
      route: '1',
      meta: {
        keepAlive: false, // 是否缓存路由
        internalOrExternal: false, // 打开方式
        icon: 'home', // 图表
        title: '首页'
      },
      name: 'dashboard-analysis',
      id: '9502685863ab87f0ad1134142788a385'
    },

    {
      // 一级菜单
      redirect: null,
      path: '/online',
      component: 'layouts/RouteView', // layout
      route: '1',
      children: [
        {
          // 子菜单
          path: '/online/cgform',
          component: 'modules/online/cgform/OnlCgformHeadList',
          route: '1',
          meta: {
            keepAlive: true, // 是否缓存路由
            internalOrExternal: false, // 打开方式
            title: 'Online表单开发'
            // hidden: false, // 隐藏路由
            // alwaysShow: false // 聚合路由
          },
          name: 'online-cgform',
          id: '8d4683aacaa997ab86b966b464360338'
        },
        {
          path: '10b80437abc6eee8c3e3daabb5e9f59e',
          component: 'layouts/IframePageView',
          route: '1',
          meta: {
            keepAlive: false,
            internalOrExternal: true,
            title: '在线文档',
            url: "{{ window._CONFIG['domianURL'] }}/doc.html"
          },
          name: "{{ window._CONFIG['domianURL'] }}-doc.html",
          id: '2dbbafa22cda07fa5d169d741b81fe12'
        },
        {
          path: 'bfa89e563d9509fbc5c6503dd50faf2e',
          component: 'layouts/IframePageView',
          route: '1',
          meta: {
            keepAlive: false,
            internalOrExternal: false,
            title: '百度',
            url: 'http://www.baidu.com'
          },
          name: 'http@--www.baidu.com',
          id: 'a400e4f4d54f79bf5ce160ae432231af'
        }
      ]
    }
  ]
}
```
