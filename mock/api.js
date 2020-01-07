import { area } from './area'

export const api = {
  '/api/workplace/teams': {
    message: '',
    result: [
      {
        id: 1,
        name: '科学搬砖组',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
      },
      {
        id: 2,
        name: '程序员日常',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png'
      },
      {
        id: 1,
        name: '设计天团',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png'
      },
      {
        id: 1,
        name: '中二少女团',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png'
      },
      {
        id: 1,
        name: '骗你学计算机',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png'
      }
    ],
    status: 200,
    timestamp: 0
  },
  '/api/role': {
    message: '',
    result: {
      data: [
        {
          id: 'admin',
          name: '管理员',
          describe: '拥有所有权限',
          status: 1,
          creatorId: 'system',
          createTime: 1497160610259,
          deleted: 0,
          permissions: [
            {
              roleId: 'admin',
              permissionId: 'comment',
              permissionName: '评论管理',
              actions:
                '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
              actionEntitySet: [
                {
                  action: 'add',
                  describe: '新增',
                  defaultCheck: false
                },
                {
                  action: 'query',
                  describe: '查询',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                },
                {
                  action: 'update',
                  describe: '修改',
                  defaultCheck: false
                },
                {
                  action: 'delete',
                  describe: '删除',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'admin',
              permissionId: 'member',
              permissionName: '会员管理',
              actions:
                '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
              actionEntitySet: [
                {
                  action: 'add',
                  describe: '新增',
                  defaultCheck: false
                },
                {
                  action: 'query',
                  describe: '查询',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                },
                {
                  action: 'update',
                  describe: '修改',
                  defaultCheck: false
                },
                {
                  action: 'delete',
                  describe: '删除',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'admin',
              permissionId: 'menu',
              permissionName: '菜单管理',
              actions:
                '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
              actionEntitySet: [
                {
                  action: 'add',
                  describe: '新增',
                  defaultCheck: false
                },
                {
                  action: 'import',
                  describe: '导入',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                },
                {
                  action: 'update',
                  describe: '修改',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'admin',
              permissionId: 'order',
              permissionName: '订单管理',
              actions:
                '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
              actionEntitySet: [
                {
                  action: 'add',
                  describe: '新增',
                  defaultCheck: false
                },
                {
                  action: 'query',
                  describe: '查询',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                },
                {
                  action: 'update',
                  describe: '修改',
                  defaultCheck: false
                },
                {
                  action: 'delete',
                  describe: '删除',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'admin',
              permissionId: 'permission',
              permissionName: '权限管理',
              actions:
                '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
              actionEntitySet: [
                {
                  action: 'add',
                  describe: '新增',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                },
                {
                  action: 'update',
                  describe: '修改',
                  defaultCheck: false
                },
                {
                  action: 'delete',
                  describe: '删除',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'admin',
              permissionId: 'role',
              permissionName: '角色管理',
              actions:
                '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
              actionEntitySet: [
                {
                  action: 'add',
                  describe: '新增',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                },
                {
                  action: 'update',
                  describe: '修改',
                  defaultCheck: false
                },
                {
                  action: 'delete',
                  describe: '删除',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'admin',
              permissionId: 'test',
              permissionName: '测试权限',
              actions: '[]',
              actionEntitySet: [],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'admin',
              permissionId: 'user',
              permissionName: '用户管理',
              actions:
                '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
              actionEntitySet: [
                {
                  action: 'add',
                  describe: '新增',
                  defaultCheck: false
                },
                {
                  action: 'import',
                  describe: '导入',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                },
                {
                  action: 'update',
                  describe: '修改',
                  defaultCheck: false
                },
                {
                  action: 'delete',
                  describe: '删除',
                  defaultCheck: false
                },
                {
                  action: 'export',
                  describe: '导出',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            }
          ]
        },
        {
          id: 'svip',
          name: 'SVIP',
          describe: '超级会员',
          status: 1,
          creatorId: 'system',
          createTime: 1532417744846,
          deleted: 0,
          permissions: [
            {
              roleId: 'admin',
              permissionId: 'comment',
              permissionName: '评论管理',
              actions:
                '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
              actionEntitySet: [
                {
                  action: 'add',
                  describe: '新增',
                  defaultCheck: false
                },
                {
                  action: 'query',
                  describe: '查询',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                },
                {
                  action: 'update',
                  describe: '修改',
                  defaultCheck: false
                },
                {
                  action: 'delete',
                  describe: '删除',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'admin',
              permissionId: 'member',
              permissionName: '会员管理',
              actions:
                '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
              actionEntitySet: [
                {
                  action: 'add',
                  describe: '新增',
                  defaultCheck: false
                },
                {
                  action: 'query',
                  describe: '查询',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'admin',
              permissionId: 'menu',
              permissionName: '菜单管理',
              actions:
                '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
              actionEntitySet: [
                {
                  action: 'add',
                  describe: '新增',
                  defaultCheck: false
                },
                {
                  action: 'import',
                  describe: '导入',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'admin',
              permissionId: 'order',
              permissionName: '订单管理',
              actions:
                '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
              actionEntitySet: [
                {
                  action: 'add',
                  describe: '新增',
                  defaultCheck: false
                },
                {
                  action: 'query',
                  describe: '查询',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                },
                {
                  action: 'update',
                  describe: '修改',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'admin',
              permissionId: 'permission',
              permissionName: '权限管理',
              actions:
                '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
              actionEntitySet: [
                {
                  action: 'add',
                  describe: '新增',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                },
                {
                  action: 'update',
                  describe: '修改',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'admin',
              permissionId: 'role',
              permissionName: '角色管理',
              actions:
                '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
              actionEntitySet: [
                {
                  action: 'add',
                  describe: '新增',
                  defaultCheck: false
                },
                {
                  action: 'update',
                  describe: '修改',
                  defaultCheck: false
                },
                {
                  action: 'delete',
                  describe: '删除',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'admin',
              permissionId: 'test',
              permissionName: '测试权限',
              actions: '[]',
              actionEntitySet: [],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'admin',
              permissionId: 'user',
              permissionName: '用户管理',
              actions:
                '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
              actionEntitySet: [
                {
                  action: 'add',
                  describe: '新增',
                  defaultCheck: false
                },
                {
                  action: 'import',
                  describe: '导入',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                },
                {
                  action: 'update',
                  describe: '修改',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            }
          ]
        },
        {
          id: 'user',
          name: '普通会员',
          describe: '普通用户，只能查询',
          status: 1,
          creatorId: 'system',
          createTime: 1497160610259,
          deleted: 0,
          permissions: [
            {
              roleId: 'user',
              permissionId: 'comment',
              permissionName: '评论管理',
              actions:
                '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
              actionEntitySet: [
                {
                  action: 'query',
                  describe: '查询',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'user',
              permissionId: 'marketing',
              permissionName: '营销管理',
              actions: '[]',
              actionEntitySet: [],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'user',
              permissionId: 'member',
              permissionName: '会员管理',
              actions:
                '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
              actionEntitySet: [
                {
                  action: 'query',
                  describe: '查询',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'user',
              permissionId: 'menu',
              permissionName: '菜单管理',
              actions: '[]',
              actionEntitySet: [],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'user',
              permissionId: 'order',
              permissionName: '订单管理',
              actions:
                '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
              actionEntitySet: [
                {
                  action: 'query',
                  describe: '查询',
                  defaultCheck: false
                },
                {
                  action: 'get',
                  describe: '详情',
                  defaultCheck: false
                }
              ],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'user',
              permissionId: 'permission',
              permissionName: '权限管理',
              actions: '[]',
              actionEntitySet: [],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'user',
              permissionId: 'role',
              permissionName: '角色管理',
              actions: '[]',
              actionEntitySet: [],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'user',
              permissionId: 'test',
              permissionName: '测试权限',
              actions: '[]',
              actionEntitySet: [],
              actionList: null,
              dataAccess: null
            },
            {
              roleId: 'user',
              permissionId: 'user',
              permissionName: '用户管理',
              actions: '[]',
              actionEntitySet: [],
              actionList: null,
              dataAccess: null
            }
          ]
        }
      ],
      pageSize: 10,
      pageNo: 0,
      totalPage: 1,
      totalCount: 5
    },
    status: 200,
    timestamp: 1537079497645
  },
  '/api/service': {
    message: '',
    result: {
      pageSize: 10,
      pageNo: 0,
      totalCount: 57,
      totalPage: 6,
      data: [
        {
          key: 1,
          no: 'No 1',
          description: '这是一段描述',
          callNo: 127,
          status: 2,
          updatedAt: '1970-06-24 11:51:20',
          editable: false
        },
        {
          key: 2,
          no: 'No 2',
          description: '这是一段描述',
          callNo: 573,
          status: 2,
          updatedAt: '1994-12-11 00:37:35',
          editable: false
        },
        {
          key: 3,
          no: 'No 3',
          description: '这是一段描述',
          callNo: 869,
          status: 2,
          updatedAt: '2013-11-11 08:04:03',
          editable: false
        },
        {
          key: 4,
          no: 'No 4',
          description: '这是一段描述',
          callNo: 26,
          status: 2,
          updatedAt: '1990-11-04 15:41:42',
          editable: false
        },
        {
          key: 5,
          no: 'No 5',
          description: '这是一段描述',
          callNo: 20,
          status: 2,
          updatedAt: '1970-01-05 11:04:56',
          editable: false
        },
        {
          key: 6,
          no: 'No 6',
          description: '这是一段描述',
          callNo: 675,
          status: 2,
          updatedAt: '1983-06-06 04:09:04',
          editable: false
        },
        {
          key: 7,
          no: 'No 7',
          description: '这是一段描述',
          callNo: 512,
          status: 3,
          updatedAt: '1996-08-26 21:47:44',
          editable: false
        },
        {
          key: 8,
          no: 'No 8',
          description: '这是一段描述',
          callNo: 962,
          status: 2,
          updatedAt: '2004-08-15 23:15:22',
          editable: false
        },
        {
          key: 9,
          no: 'No 9',
          description: '这是一段描述',
          callNo: 318,
          status: 3,
          updatedAt: '1988-08-10 14:36:35',
          editable: false
        },
        {
          key: 10,
          no: 'No 10',
          description: '这是一段描述',
          callNo: 789,
          status: 0,
          updatedAt: '1988-12-27 23:39:41',
          editable: false
        }
      ]
    },
    status: 200,
    timestamp: 1534955098193
  },
  '/api/list/search/projects': {
    message: '',
    result: {
      data: [
        {
          id: 1,
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          title: 'Alipay',
          description: '那是一种内在的东西， 他们到达不了，也无法触及的',
          status: 1,
          updatedAt: '2018-07-26 00:00:00'
        },
        {
          id: 2,
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
          title: 'Angular',
          description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
          status: 1,
          updatedAt: '2018-07-26 00:00:00'
        },
        {
          id: 3,
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
          title: 'Ant Design',
          description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
          status: 1,
          updatedAt: '2018-07-26 00:00:00'
        },
        {
          id: 4,
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          title: 'Ant Design Pro',
          description: '那时候我只会想自己想要什么，从不想自己拥有什么',
          status: 1,
          updatedAt: '2018-07-26 00:00:00'
        },
        {
          id: 5,
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
          title: 'Bootstrap',
          description: '凛冬将至',
          status: 1,
          updatedAt: '2018-07-26 00:00:00'
        },
        {
          id: 6,
          cover: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
          title: 'Vue',
          description: '生命就像一盒巧克力，结果往往出人意料',
          status: 1,
          updatedAt: '2018-07-26 00:00:00'
        }
      ],
      pageSize: 10,
      pageNo: 1,
      totalPage: 6,
      totalCount: 57
    },
    status: 200,
    timestamp: 1534955098193
  },
  '/api/workplace/activity': {
    message: '',
    result: [
      {
        id: 1,
        user: {
          nickname: 'Barbara Lee',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
        },
        project: {
          name: '白鹭酱油开发组',
          action: '更新',
          event: '番组计划'
        },
        time: '2018-08-23 14:47:00'
      },
      {
        id: 1,
        user: {
          nickname: '蓝莓酱',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png'
        },
        project: {
          name: '白鹭酱油开发组',
          action: '更新',
          event: '番组计划'
        },
        time: '2018-08-23 09:35:37'
      },
      {
        id: 1,
        user: {
          nickname: 'Brian Young',
          avatar: 'http://dummyimage.com/64x64'
        },
        project: {
          name: '白鹭酱油开发组',
          action: '创建',
          event: '番组计划'
        },
        time: '2017-05-27 00:00:00'
      },
      {
        id: 1,
        user: {
          nickname: '曲丽丽',
          avatar: 'http://dummyimage.com/64x64'
        },
        project: {
          name: '高逼格设计天团',
          action: '更新',
          event: '六月迭代'
        },
        time: '2018-08-23 14:47:00'
      },
      {
        id: 1,
        user: {
          nickname: 'Dorothy Thompson',
          avatar: 'http://dummyimage.com/64x64'
        },
        project: {
          name: '高逼格设计天团',
          action: 'created',
          event: '六月迭代'
        },
        time: '2018-08-23 14:47:00'
      },
      {
        id: 1,
        user: {
          nickname: '曲丽丽',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
        },
        project: {
          name: '高逼格设计天团',
          action: 'created',
          event: '六月迭代'
        },
        time: '2018-08-23 14:47:00'
      }
    ],
    status: 200,
    timestamp: 0
  },
  '/api/workplace/radar': {
    message: '',
    result: [
      {
        item: '引用',
        个人: 70,
        团队: 30,
        部门: 40
      },
      {
        item: '口碑',
        个人: 60,
        团队: 70,
        部门: 40
      },
      {
        item: '产量',
        个人: 50,
        团队: 60,
        部门: 40
      },
      {
        item: '贡献',
        个人: 40,
        团队: 50,
        部门: 40
      },
      {
        item: '热度',
        个人: 60,
        团队: 70,
        部门: 40
      },
      {
        item: '引用',
        个人: 70,
        团队: 50,
        部门: 40
      }
    ],
    status: 200,
    timestamp: 1534955098193
  },
  '/api/permission/no-pager': {
    message: '',
    result: [
      {
        id: 'marketing',
        name: '营销管理',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        sptDaTypes: null,
        optionalFields: null,
        parents: null,
        type: null,
        deleted: 0,
        actions: ['add', 'query', 'get', 'update', 'delete']
      },
      {
        id: 'member',
        name: '会员管理',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        sptDaTypes: null,
        optionalFields: '[]',
        parents: null,
        type: 'default',
        deleted: 0,
        actions: ['add', 'query', 'get', 'update', 'delete']
      },
      {
        id: 'menu',
        name: '菜单管理',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
        sptDaTypes: null,
        optionalFields: '[]',
        parents: null,
        type: 'default',
        deleted: 0,
        actions: ['add', 'import', 'get', 'update']
      },
      {
        id: 'order',
        name: '订单管理',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        sptDaTypes: null,
        optionalFields: '[]',
        parents: null,
        type: 'default',
        deleted: 0,
        actions: ['add', 'query', 'get', 'update', 'delete']
      },
      {
        id: 'permission',
        name: '权限管理',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        sptDaTypes: null,
        optionalFields: '[]',
        parents: null,
        type: 'default',
        deleted: 0,
        actions: ['add', 'get', 'update', 'delete']
      },
      {
        id: 'role',
        name: '角色管理',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        sptDaTypes: null,
        optionalFields: '[]',
        parents: null,
        type: 'default',
        deleted: 0,
        actions: ['add', 'get', 'update', 'delete']
      },
      {
        id: 'test',
        name: '测试权限',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
        sptDaTypes: null,
        optionalFields: '[]',
        parents: null,
        type: 'default',
        deleted: 0,
        actions: ['add', 'get']
      },
      {
        id: 'user',
        name: '用户管理',
        describe: null,
        status: 1,
        actionData:
          '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
        sptDaTypes: null,
        optionalFields: '[]',
        parents: null,
        type: 'default',
        deleted: 0,
        actions: ['add', 'get']
      }
    ],
    status: 200,
    timestamp: 1537082021471
  },
  '/api/permission': {
    message: '',
    result: {
      data: [
        {
          id: 'marketing',
          name: '营销管理',
          describe: null,
          status: 1,
          actionData:
            '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          sptDaTypes: null,
          optionalFields: null,
          parents: null,
          type: null,
          deleted: 0,
          actions: ['add', 'query', 'get', 'update', 'delete']
        },
        {
          id: 'member',
          name: '会员管理',
          describe: null,
          status: 1,
          actionData:
            '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          sptDaTypes: null,
          optionalFields: '[]',
          parents: null,
          type: 'default',
          deleted: 0,
          actions: ['add', 'query', 'get', 'update', 'delete']
        },
        {
          id: 'menu',
          name: '菜单管理',
          describe: null,
          status: 1,
          actionData:
            '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
          sptDaTypes: null,
          optionalFields: '[]',
          parents: null,
          type: 'default',
          deleted: 0,
          actions: ['add', 'import', 'get', 'update']
        },
        {
          id: 'order',
          name: '订单管理',
          describe: null,
          status: 1,
          actionData:
            '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          sptDaTypes: null,
          optionalFields: '[]',
          parents: null,
          type: 'default',
          deleted: 0,
          actions: ['add', 'query', 'get', 'update', 'delete']
        },
        {
          id: 'permission',
          name: '权限管理',
          describe: null,
          status: 1,
          actionData:
            '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          sptDaTypes: null,
          optionalFields: '[]',
          parents: null,
          type: 'default',
          deleted: 0,
          actions: ['add', 'get', 'update', 'delete']
        },
        {
          id: 'role',
          name: '角色管理',
          describe: null,
          status: 1,
          actionData:
            '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          sptDaTypes: null,
          optionalFields: '[]',
          parents: null,
          type: 'default',
          deleted: 0,
          actions: ['add', 'get', 'update', 'delete']
        },
        {
          id: 'test',
          name: '测试权限',
          describe: null,
          status: 1,
          actionData:
            '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
          sptDaTypes: null,
          optionalFields: '[]',
          parents: null,
          type: 'default',
          deleted: 0,
          actions: ['add', 'get']
        },
        {
          id: 'user',
          name: '用户管理',
          describe: null,
          status: 1,
          actionData:
            '[{"action":"add","describe":"新增","defaultCheck":false},{"action":"get","describe":"查询","defaultCheck":false}]',
          sptDaTypes: null,
          optionalFields: '[]',
          parents: null,
          type: 'default',
          deleted: 0,
          actions: ['add', 'get']
        }
      ],
      pageSize: 10,
      pageNo: 0,
      totalPage: 1,
      totalCount: 5
    },
    status: 200,
    timestamp: 1537082021471
  },
  '/api/asynTreeList': {
    status: 200,
    success: true,
    message: 'ok',
    result: [
      {
        id: 1,
        name: '首页',
        component: 'dashboard/Analysis',
        orderNum: 1,
        hasChildren: false
      },
      {
        id: 2,
        name: '常见案例',
        component: 'layouts/RouteView',
        orderNum: 2,
        hasChildren: true
      },
      {
        id: 3,
        name: '系统监控',
        component: 'layouts/RouteView',
        orderNum: 3,
        hasChildren: true
      }
    ],
    timestamp: 1554950583837
  },
  '/api/area': area
}
