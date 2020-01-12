// @ts-nocheck
/** 
 * 路由配置详情，查看可以看 /router/README.md 介绍
*/
import { UserLayout, TabLayout, RouteView, BlankLayout, PageView } from '@/components/layouts'

/**
 * 走菜单，走权限控制
 * @type {[null,null]}
 */
export const asyncRouterMap = [
  {
    path: '/',
    name: 'dashboard',
    component: TabLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/workplace',
    children: []
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'alteration',
        name: 'alteration',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Alteration')
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/exception/404')
  }
]
// 不需要服务端控制
export const localRouterConfig = {
  allAuth: [
    // 按钮权限
  ],
  auth: [
    // 按钮权限
  ],
  menu: [
    {
      redirect: null,
      path: '/dashboard/analysis',
      component: 'dashboard/Analysis',
      meta: { keepAlive: false, internalOrExternal: false, icon: 'home', title: '营业部总览' },
      name: 'dashboard-analysis'
    },
    {
      path: '/dashboard/Bank2Stock',
      component: 'dashboard/details/Bank2Stock',
      // hidden: true,
      // alwaysShow:false,
      meta: { keepAlive: false, icon: 'dollar', internalOrExternal: false, title: '银行转证券top50' },
      name: 'Bank2Stock'
    },
    {
      path: '/customer/Analysis',
      component: 'customer/Analysis',
      // alwaysShow:false,
      meta: { keepAlive: false, icon: 'team', internalOrExternal: false, title: '客户分析' },
      name: 'customerAnalysis'
    },
    {
      redirect: null,
      path: '/online',
      component: 'layouts/RouteView',

      children: [
        {
          path: '/online/cgform',
          component: 'modules/online/cgform/OnlCgformHeadList',

          meta: { keepAlive: true, icon: 'team', internalOrExternal: false, title: '客户分析' },
          name: 'online-cgform',
          id: '8d4683aacaa997ab86b966b464360338'
        },
        {
          path: '/online/cgreport',
          component: 'modules/online/cgreport/OnlCgreportHeadList',

          meta: { keepAlive: false, icon: 'dollar', internalOrExternal: false, title: '资产分析' },
          name: 'online-cgreport',
          id: '109c78a583d4693ce2f16551b7786786'
        },
        {
          path: '/online/graphreport',
          component: 'modules/online/graphreport/OnlGraphreportHeadList',

          meta: { keepAlive: false, icon: 'money-collect', internalOrExternal: false, title: '收入分析' },
          name: 'online-graphreport',
          id: '7d08d3885671cf0ff1c4fe5d82fcd0e2'
        },

        {
          path: '/isystem/fillRule',
          component: 'system/SysFillRuleList',

          meta: { keepAlive: false, icon: 'interation', internalOrExternal: false, title: '交易分析' },
          name: 'isystem-fillRule',
          id: '1192318987661234177'
        },
        {
          path: '/online/df/:table/:id',
          component: 'modules/online/cgform/auto/OnlineDynamicForm',
          route: '0',
          hidden: true,
          meta: { keepAlive: false, internalOrExternal: false, title: 'AUTO动态表单' },
          name: 'online-df-@table-@id',
          id: '22d6a3d39a59dd7ea9a30acfa6bfb0a5'
        },
        {
          path: '/online/cgformList/:code',
          component: 'modules/online/cgform/auto/OnlCgformAutoList',

          hidden: true,
          meta: { keepAlive: false, internalOrExternal: false, title: 'AUTO在线表单' },
          name: 'online-cgformList-@code',
          id: '54097c6a3cf50fad0793a34beff1efdf'
        },
        {
          path: '/online/graphreport/templet/:code',
          component: 'modules/online/graphreport/auto/OnlGraphreportTempletAutoChart',

          hidden: true,
          meta: { keepAlive: false, internalOrExternal: false, title: 'AUTO多数据源图表' },
          name: 'online-graphreport-templet-@code',
          id: '6523422a6c69a62d48dacf90932e5302'
        },
        {
          path: '/online/dfview/:table/:id',
          component: 'modules/online/cgform/auto/OnlineDynamicViewForm',

          hidden: true,
          meta: { keepAlive: false, internalOrExternal: false, title: 'AUTO表单详情页' },
          name: 'online-dfview-@table-@id',
          id: '6c6a033650e64a14543a8a401d790093'
        },
        {
          path: '/online/cgreport/:code',
          component: 'modules/online/cgreport/auto/OnlCgreportAutoList',

          hidden: true,
          meta: { keepAlive: false, internalOrExternal: false, title: 'AUTO在线报表' },
          name: 'onlineAutoList',
          id: '9fe26464838de2ea5e90f2367e35efa0'
        },
        {
          path: '/online/graphreport/chart/:code',
          component: 'modules/online/graphreport/auto/OnlGraphreportAutoChart',

          hidden: true,
          meta: { keepAlive: false, internalOrExternal: false, title: 'AUTO在线图表' },
          name: 'online-graphreport-chart-@code',
          id: 'abb2641990431ea1d4b638e16933fbb5'
        },
        {
          path: '/online/cgformTreeList/:code',
          component: 'modules/online/cgform/auto/OnlCgformTreeList',

          hidden: true,
          meta: { keepAlive: false, internalOrExternal: false, title: 'AUTO树表单列表' },
          name: 'online-cgformTreeList-@code',
          id: 'fba41089766888023411a978d13c0aa4'
        },
        {
          path: '/online/copyform/:code',
          component: 'modules/online/cgform/OnlCgformCopyList',

          hidden: true,
          meta: { keepAlive: false, internalOrExternal: false, title: 'AUTO复制表单' },
          name: 'online-copyform-@code',
          id: 'f2849d3814fc97993bfc519ae6bbf049'
        },
        {
          path: '/online/desform/list/:code',
          component: 'modules/online/desform/auto/AutoDesignDataForm',

          hidden: true,
          meta: { keepAlive: false, internalOrExternal: false, title: 'AUTO设计表单列表' },
          name: 'online-desform-list-@code',
          id: 'a8ee330fb0cb867340101717e54998b5'
        },
        {
          path: '/online/desform/view/:desformId',
          component: 'modules/online/desform/PreviewDesform',

          hidden: true,
          meta: { keepAlive: false, internalOrExternal: false, title: 'AUTO设计表单浏览' },
          name: 'online-desform-view-@desformId',
          id: 'f842bc13739eccaba52e01105ce40055'
        }
      ],
      meta: { keepAlive: false, internalOrExternal: false, icon: 'cloud', title: '在线开发' },
      name: 'online',
      id: 'e41b69c57a941a3bbcce45032fe57605'
    },
    {
      redirect: null,
      path: '/isystem',
      component: 'layouts/RouteView',

      children: [
        {
          path: '/isystem/user',
          component: 'system/UserList',

          meta: { keepAlive: false, internalOrExternal: false, title: '用户管理' },
          name: 'isystem-user',
          id: '3f915b2769fc80648e92d04e84ca059d'
        },
        {
          path: '/isystem/newPermissionList',
          component: 'system/NewPermissionList',

          meta: { keepAlive: true, internalOrExternal: false, title: '菜单管理' },
          name: 'isystem-newPermissionList',
          id: '1170592628746878978'
        },
        {
          path: '/isystem/roleUserList',
          component: 'system/RoleUserList',

          meta: { keepAlive: true, internalOrExternal: false, title: '角色管理' },
          name: 'isystem-roleUserList',
          id: '190c2b43bec6a5f7a4194a85db67d96a'
        },
        {
          path: '/isystem/depart',
          component: 'system/DepartList',

          meta: { keepAlive: false, internalOrExternal: false, title: '部门管理' },
          name: 'isystem-depart',
          id: '45c966826eeff4c99b8f8ebfe74511fc'
        },
        {
          path: '/isystem/dict',
          component: 'system/DictList',

          meta: { keepAlive: false, internalOrExternal: false, title: '数据字典' },
          name: 'isystem-dict',
          id: 'f1cb187abf927c88b89470d08615f5ac'
        },
        {
          path: '/isystem/departUserList',
          component: 'system/DepartUserList',

          meta: { keepAlive: false, internalOrExternal: false, title: '我的部门' },
          name: 'isystem-departUserList',
          id: '5c2f42277948043026b7a14692456828'
        },
        {
          path: '/isystem/position',
          component: 'system/SysPositionList',

          meta: { keepAlive: false, internalOrExternal: false, title: '职务管理' },
          name: 'isystem-position',
          id: '1174506953255182338'
        },
        {
          path: '/isys/category',
          component: 'system/SysCategoryList',

          meta: { keepAlive: false, internalOrExternal: false, title: '分类字典' },
          name: 'isys-category',
          id: 'ebb9d82ea16ad864071158e0c449d186'
        },
        {
          path: '/isystem/annountCement',
          component: 'system/SysAnnouncementList',

          meta: { keepAlive: false, internalOrExternal: false, title: '系统通告' },
          name: 'isystem-annountCement',
          id: 'e08cb190ef230d5d4f03824198773950'
        }
      ],
      meta: { keepAlive: false, internalOrExternal: false, icon: 'setting', title: '系统管理' },
      name: 'isystem',
      id: 'd7d6e2e4e2934f2c9385a623fd98c6f3'
    }
  ]
}
