// @ts-nocheck
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
      meta: { keepAlive: false, internalOrExternal: false, icon: 'home', title: '首页' },
      name: 'dashboard-analysis',
      id: '9502685863ab87f0ad1134142788a385'
    },

    {
      redirect: null,
      path: '/online',
      component: 'layouts/RouteView',

      children: [
        {
          path: '/online/cgform',
          component: 'modules/online/cgform/OnlCgformHeadList',

          meta: { keepAlive: true, internalOrExternal: false, title: 'Online表单开发' },
          name: 'online-cgform',
          id: '8d4683aacaa997ab86b966b464360338'
        },
        {
          path: '/online/cgreport',
          component: 'modules/online/cgreport/OnlCgreportHeadList',

          meta: { keepAlive: false, internalOrExternal: false, title: 'Online报表配置' },
          name: 'online-cgreport',
          id: '109c78a583d4693ce2f16551b7786786'
        },
        {
          path: '/online/graphreport',
          component: 'modules/online/graphreport/OnlGraphreportHeadList',

          meta: { keepAlive: false, internalOrExternal: false, title: 'Online图表配置' },
          name: 'online-graphreport',
          id: '7d08d3885671cf0ff1c4fe5d82fcd0e2'
        },
        {
          path: '/online/graphreport/templet',
          component: 'modules/online/graphreport/OnlGraphreportTempletList',

          meta: { keepAlive: false, internalOrExternal: false, title: 'Online组合报表' },
          name: 'online-graphreport-templet',
          id: '6242fb02030e9778973390766a5791a7'
        },
        {
          path: '/isystem/fillRule',
          component: 'system/SysFillRuleList',

          meta: { keepAlive: false, internalOrExternal: false, title: '系统编码规则' },
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
    },

    // {
    //   redirect: null,
    //   path: '/message',
    //   component: 'layouts/RouteView',
    //   children: [
    //     {
    //       path: '/modules/message/sysMessageList',
    //       component: 'modules/message/SysMessageList',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '消息管理' },
    //       name: 'modules-message-sysMessageList',
    //       id: '944abf0a8fc22fe1f1154a389a574154'
    //     }
    //   ],
    //   meta: { keepAlive: false, internalOrExternal: false, icon: 'message', title: '消息中心' },
    //   name: 'message',
    //   id: '5c8042bd6c601270b2bbd9b20bccc68b'
    // },
    // {
    //   redirect: null,
    //   path: '/jeecg',
    //   component: 'layouts/RouteView',

    //   children: [
    //     {
    //       path: '/jeecg/SelectDemo',
    //       component: 'jeecg/SelectDemo',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '自定义组件' },
    //       name: 'jeecg-SelectDemo',
    //       id: '9a90363f216a6a08f32eecb3f0bf12a3'
    //     },
    //     {
    //       path: '/oss/file',
    //       component: 'modules/oss/OSSFileList',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '对象存储' },
    //       name: 'oss-file',
    //       id: '1166535831146504193'
    //     },
    //     {
    //       path: '/jeecg/jeecgDemoList',
    //       component: 'jeecg/JeecgDemoList',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '单表模型示例' },
    //       name: 'DemoList',
    //       id: '4148ec82b6acd69f470bea75fe41c357'
    //     },
    //     {
    //       path: '/jeecg/tablist/JeecgOrderDMainList',
    //       component: 'jeecg/tablist/JeecgOrderDMainList',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '一对多Tab示例' },
    //       name: 'jeecg-tablist-JeecgOrderDMainList',
    //       id: '6ad53fd1b220989a8b71ff482d683a5a'
    //     },
    //     {
    //       path: '/jeecg/JeecgOrderMainListForJEditableTable',
    //       component: 'jeecg/JeecgOrderMainListForJEditableTable',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '一对多JEditable' },
    //       name: 'jeecg-JeecgOrderMainListForJEditableTable',
    //       id: 'c431130c0bc0ec71b0a5be37747bb36a'
    //     },
    //     {
    //       path: '/jeecg/JeecgOrderMainList',
    //       component: 'jeecg/JeecgOrderMainList',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '一对多示例' },
    //       name: 'jeecg-JeecgOrderMainList',
    //       id: 'fb367426764077dcf94640c843733985'
    //     },
    //     {
    //       path: '/jeecg/tableTotal',
    //       component: 'jeecg/TableTotal',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '表格合计' },
    //       name: 'jeecg-tableTotal',
    //       id: '043780fa095ff1b2bec4dc406d76f023'
    //     },
    //     {
    //       path: '/jeecg/JeecgTreeTable',
    //       component: 'jeecg/JeecgTreeTable',
    //       meta: { keepAlive: false, internalOrExternal: false, title: '异步树列表Demo' },
    //       name: 'jeecg-JeecgTreeTable',
    //       id: '0620e402857b8c5b605e1ad9f4b89350'
    //     },
    //     {
    //       path: '/jeecg/PrintDemo',
    //       component: 'jeecg/PrintDemo',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '打印测试' },
    //       name: 'jeecg-PrintDemo',
    //       id: 'e6bfd1fcabfd7942fdd05f076d1dad38'
    //     },
    //     {
    //       path: '/jeecg/helloworld',
    //       component: 'jeecg/helloworld',

    //       meta: { keepAlive: false, internalOrExternal: false, title: 'helloworld' },
    //       name: 'jeecg-helloworld',
    //       id: '339329ed54cf255e1f9392e84f136901'
    //     },
    //     {
    //       path: '/jeecg/TableExpandeSub',
    //       component: 'jeecg/TableExpandeSub',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '内嵌Table' },
    //       name: 'jeecg-TableExpandeSub',
    //       id: '4356a1a67b564f0988a484f5531fd4d9'
    //     },
    //     {
    //       path: 'bfa89e563d9509fbc5c6503dd50faf2e',
    //       component: 'layouts/IframePageView',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '百度', url: 'http://www.baidu.com' },
    //       name: 'http@--www.baidu.com',
    //       id: 'a400e4f4d54f79bf5ce160ae432231af'
    //     },
    //     {
    //       path: '/jeecg/InterfaceTest',
    //       component: 'jeecg/InterfaceTest',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '数据回执模拟' },
    //       name: 'jeecg-InterfaceTest',
    //       id: 'c6cf95444d80435eb37b2f9db3971ae6'
    //     },
    //     {
    //       path: '/jeecg/JEditableTable',
    //       component: 'jeecg/JeecgEditableTableExample',

    //       meta: { keepAlive: false, internalOrExternal: false, title: 'JEditableTable示例' },
    //       name: 'jeecg-JEditableTable',
    //       id: '7960961b0063228937da5fa8dd73d371'
    //     },
    //     {
    //       path: '/jeecg/imgDragSort',
    //       component: 'jeecg/ImgDragSort',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '图片拖拽排序' },
    //       name: 'jeecg-imgDragSort',
    //       id: '265de841c58907954b8877fb85212622'
    //     },
    //     {
    //       path: '/jeecg/imgTurnPage',
    //       component: 'jeecg/ImgTurnPage',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '图片翻页' },
    //       name: 'jeecg-imgTurnPage',
    //       id: '58b9204feaf07e47284ddb36cd2d8468'
    //     },
    //     {
    //       path: '/jeecg/ImagPreview',
    //       component: 'jeecg/ImagPreview',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '图片预览' },
    //       name: 'jeecg-ImagPreview',
    //       id: '655563cd64b75dcf52ef7bcdd4836953'
    //     },
    //     {
    //       path: '/jeecg/jeecgPdfView',
    //       component: 'jeecg/JeecgPdfView',

    //       meta: { keepAlive: false, internalOrExternal: false, title: 'PDF预览' },
    //       name: 'jeecg-jeecgPdfView',
    //       id: 'e1979bb53e9ea51cecc74d86fd9d2f64'
    //     },
    //     {
    //       path: '/jeecg/splitPanel',
    //       component: 'jeecg/SplitPanel',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '分屏' },
    //       name: 'jeecg-splitPanel',
    //       id: '3fac0d3c9cd40fa53ab70d4c583821f8'
    //     }
    //   ],
    //   meta: { keepAlive: false, internalOrExternal: false, icon: 'qrcode', title: '常见案例' },
    //   name: 'jeecg',
    //   id: '2a470fc0c3954d9dbb61de6d80846549'
    // },
    // {
    //   redirect: null,
    //   path: '/result',
    //   component: 'layouts/PageView',

    //   children: [
    //     {
    //       path: '/result/success',
    //       component: 'result/Success',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '成功' },
    //       name: 'result-success',
    //       id: '00a2a0ae65cdca5e93209cdbde97cbe6'
    //     },
    //     {
    //       path: '/result/fail',
    //       component: 'result/Error',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '失败' },
    //       name: 'result-fail',
    //       id: '13212d3416eb690c2e1d5033166ff47a'
    //     }
    //   ],
    //   meta: { keepAlive: false, internalOrExternal: false, icon: 'check-circle-o', title: '结果页' },
    //   name: 'result',
    //   id: '2e42e3835c2b44ec9f7bc26c146ee531'
    // },
    // {
    //   redirect: null,
    //   path: '/profile',
    //   component: 'layouts/RouteView',

    //   children: [
    //     {
    //       path: '/profile/basic',
    //       component: 'profile/basic/Index',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '基础详情页' },
    //       name: 'profile-basic',
    //       id: 'cc50656cf9ca528e6f2150eba4714ad2'
    //     },
    //     {
    //       path: '/profile/advanced',
    //       component: 'profile/advanced/Advanced',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '高级详情页' },
    //       name: 'profile-advanced',
    //       id: 'b3c824fc22bd953e2eb16ae6914ac8f9'
    //     }
    //   ],
    //   meta: { keepAlive: false, internalOrExternal: false, icon: 'profile', title: '详情页' },
    //   name: 'profile',
    //   id: '4875ebe289344e14844d8e3ea1edd73f'
    // },
    // {
    //   redirect: null,
    //   path: '/exception',
    //   component: 'layouts/RouteView',

    //   children: [
    //     {
    //       path: '/exception/403',
    //       component: 'exception/403',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '403' },
    //       name: 'exception-403',
    //       id: '65a8f489f25a345836b7f44b1181197a'
    //     },
    //     {
    //       path: '/exception/404',
    //       component: 'exception/404',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '404' },
    //       name: 'exception-404',
    //       id: 'd2bbf9ebca5a8fa2e227af97d2da7548'
    //     },
    //     {
    //       path: '/exception/500',
    //       component: 'exception/500',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '500' },
    //       name: 'exception-500',
    //       id: 'b4dfc7d5dd9e8d5b6dd6d4579b1aa559'
    //     }
    //   ],
    //   meta: { keepAlive: false, internalOrExternal: false, icon: 'warning', title: '异常页' },
    //   name: 'exception',
    //   id: 'c65321e57b7949b7a975313220de0422'
    // },
    // {
    //   redirect: '/list/query-list',
    //   path: '/list',
    //   component: 'layouts/PageView',

    //   children: [
    //     {
    //       path: '/list/query-list',
    //       component: 'list/TableList',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '查询表格' },
    //       name: 'list-query-list',
    //       id: '418964ba087b90a84897b62474496b93'
    //     },
    //     {
    //       path: '/list/edit-table',
    //       component: 'list/TableInnerEditList',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '内联编辑表格' },
    //       name: 'list-edit-table',
    //       id: 'ae4fed059f67086fd52a73d913cf473d'
    //     },
    //     {
    //       path: '/list/user-list',
    //       component: 'list/UserList',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '用户列表' },
    //       name: 'list-user-list',
    //       id: '05b3c82ddb2536a4a5ee1a4c46b5abef'
    //     },
    //     {
    //       path: '/list/role-list',
    //       component: 'list/RoleList',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '角色列表' },
    //       name: 'list-role-list',
    //       id: '4f84f9400e5e92c95f05b554724c2b58'
    //     },
    //     {
    //       path: '/list/permission-list',
    //       component: 'list/PermissionList',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '权限列表' },
    //       name: 'list-permission-list',
    //       id: '73678f9daa45ed17a3674131b03432fb'
    //     },
    //     {
    //       path: '/list/basic-list',
    //       component: 'list/StandardList',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '标准列表' },
    //       name: 'list-basic-list',
    //       id: 'f23d9bfff4d9aa6b68569ba2cff38415'
    //     },
    //     {
    //       path: '/list/card',
    //       component: 'list/CardList',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '卡片列表' },
    //       name: 'list-card',
    //       id: '7ac9eb9ccbde2f7a033cd4944272bf1e'
    //     },
    //     {
    //       path: '/list/search',
    //       component: 'list/search/SearchLayout',

    //       children: [
    //         {
    //           path: '/list/search/article',
    //           component: 'list/TableList',

    //           meta: { keepAlive: false, internalOrExternal: false, title: '搜索列表（文章）' },
    //           name: 'list-search-article',
    //           id: '078f9558cdeab239aecb2bda1a8ed0d1'
    //         },
    //         {
    //           path: '/list/search/application',
    //           component: 'list/TableList',

    //           meta: { keepAlive: false, internalOrExternal: false, title: '搜索列表（应用）' },
    //           name: 'list-search-application',
    //           id: '200006f0edf145a2b50eacca07585451'
    //         },
    //         {
    //           path: '/list/search/project',
    //           component: 'list/TableList',

    //           meta: { keepAlive: false, internalOrExternal: false, title: '搜索列表（项目）' },
    //           name: 'list-search-project',
    //           id: 'de13e0f6328c069748de7399fcc1dbbd'
    //         }
    //       ],
    //       meta: { keepAlive: false, internalOrExternal: false, title: '搜索列表' },
    //       name: 'list-search',
    //       id: 'fb07ca05a3e13674dbf6d3245956da2e'
    //     }
    //   ],
    //   meta: { keepAlive: false, internalOrExternal: false, icon: 'table', title: '列表页' },
    //   name: 'list',
    //   id: '540a2936940846cb98114ffb0d145cb8'
    // },
    // {
    //   redirect: null,
    //   path: '/account',
    //   component: 'layouts/RouteView',

    //   children: [
    //     {
    //       path: '/account/center',
    //       component: 'account/center/Index',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '个人中心' },
    //       name: 'account-center',
    //       id: 'd86f58e7ab516d3bc6bfb1fe10585f97'
    //     },
    //     {
    //       path: '/account/settings/base',
    //       component: 'account/settings/Index',

    //       children: [
    //         {
    //           path: '/account/settings/base',
    //           component: 'account/settings/BaseSetting',

    //           hidden: true,
    //           meta: { keepAlive: false, internalOrExternal: false, title: '基本设置' },
    //           name: 'account-settings-base',
    //           id: '1367a93f2c410b169faa7abcbad2f77c'
    //         },
    //         {
    //           path: '/account/settings/binding',
    //           component: 'account/settings/Binding',

    //           meta: { keepAlive: false, internalOrExternal: false, title: '账户绑定' },
    //           name: 'account-settings-binding',
    //           id: '4f66409ef3bbd69c1d80469d6e2a885e'
    //         },
    //         {
    //           path: '/account/settings/custom',
    //           component: 'account/settings/Custom',

    //           meta: { keepAlive: false, internalOrExternal: false, title: '个性化设置' },
    //           name: 'account-settings-custom',
    //           id: '882a73768cfd7f78f3a37584f7299656'
    //         },
    //         {
    //           path: '/account/settings/security',
    //           component: 'account/settings/Security',

    //           meta: { keepAlive: false, internalOrExternal: false, title: '安全设置' },
    //           name: 'account-settings-security',
    //           id: 'ec8d607d0156e198b11853760319c646'
    //         },
    //         {
    //           path: '/account/settings/notification',
    //           component: 'account/settings/Notification',

    //           meta: { keepAlive: false, internalOrExternal: false, title: '新消息通知' },
    //           name: 'account-settings-notification',
    //           id: 'fedfbf4420536cacc0218557d263dfea'
    //         }
    //       ],
    //       meta: { keepAlive: false, internalOrExternal: false, title: '个人设置' },
    //       name: 'account-settings-base',
    //       id: '6e73eb3c26099c191bf03852ee1310a1',
    //       alwaysShow: true
    //     },
    //     {
    //       path: '/dashboard/workplace',
    //       component: 'dashboard/Workplace',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '工作台' },
    //       name: 'dashboard-workplace',
    //       id: '8fb8172747a78756c11916216b8b8066'
    //     }
    //   ],
    //   meta: { keepAlive: false, internalOrExternal: false, icon: 'user', title: '个人页' },
    //   name: 'account',
    //   id: '717f6bee46f44a3897eca9abd6e2ec44'
    // },
    // {
    //   redirect: null,
    //   path: '/form',
    //   component: 'layouts/PageView',

    //   children: [
    //     {
    //       path: '/form/base-form',
    //       component: 'form/BasicForm',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '基础表单' },
    //       name: 'form-base-form',
    //       id: '277bfabef7d76e89b33062b16a9a5020'
    //     },
    //     {
    //       path: '/form/step-form',
    //       component: 'form/stepForm/StepForm',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '分步表单' },
    //       name: 'form-step-form',
    //       id: '6531cf3421b1265aeeeabaab5e176e6d'
    //     },
    //     {
    //       path: '/form/advanced-form',
    //       component: 'form/advancedForm/AdvancedForm',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '高级表单' },
    //       name: 'form-advanced-form',
    //       id: 'e5973686ed495c379d829ea8b2881fc6'
    //     }
    //   ],
    //   meta: { keepAlive: false, internalOrExternal: false, icon: 'form', title: '表单页' },
    //   name: 'form',
    //   id: 'e3c13679c73a4f829bcff2aba8fd68b1'
    // },
    // {
    //   redirect: null,
    //   path: '/onlineceshi',
    //   component: 'layouts/RouteView',
    //   children: [
    //     {
    //       path: '/online/cgformList/81fcf7d8922d45069b0d5ba983612d3a',
    //       component: 'modules/online/cgform/auto/OnlCgformAutoList',
    //       route: '0',
    //       meta: { keepAlive: false, internalOrExternal: false, title: 'online入职' },
    //       name: 'online-cgformList-81fcf7d8922d45069b0d5ba983612d3a',
    //       id: '1210037853075124225'
    //     },
    //     {
    //       path: '/hr/CeshiRuzhiList',
    //       component: 'erp/hr/CeshiRuzhiList',

    //       meta: { keepAlive: false, internalOrExternal: false, title: '编码入职单' },
    //       name: 'hr-CeshiRuzhiList',
    //       id: '1210089114260590594'
    //     }
    //   ],
    //   meta: { keepAlive: false, internalOrExternal: false, icon: 'hourglass', title: '测试online' },
    //   name: 'onlineceshi',
    //   id: '1210037401705099266'
    // }
  ]
}
