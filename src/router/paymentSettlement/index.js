export default [
    { //单笔转账
        path: '/paymentSettlement/oneStopTransfer',
        name:'oneStopTransfer',
        component: () => import('views/paymentSettlement/oneStopTransfer/oneStopTransfer.vue'),
        meta: {
          title: '单笔转账',
        }
    },
    { //批量转账
        path: '/paymentSettlement/batchTransfer',
        name:'batchTransfer',
        component: () => import('views/paymentSettlement/batchTransfer/batchTransfer.vue'),
        meta: {
          title: '批量转账',
        }
    },
    { //转账交易查询
        path: '/paymentSettlement/transferQuery',
        name:'transferQuery',
        component: () => import('views/paymentSettlement/transferQuery/index.vue'),
        meta: {
          title: '转账交易查询',
        }
    },
    { //联行号查询
        path: '/paymentSettlement/associatedNumberQuery',
        name:'associatedNumberQuery',
        component: () => import('views/paymentSettlement/associatedNumberQuery/associatedNumberQueryList.vue'),
        meta: {
          title: '联行号查询',
        }
    },
    { //常用收款人
        path: '/paymentSettlement/payee',
        name:'payee',
        component: () => import('views/paymentSettlement/payee/index.vue'),
        meta: {
          title: '常用收款人',

        }
    },
    { //跨行收款-跨行收款
        path: '/paymentSettlement/anInterBankCredit/collection',
        name:'collection',
        component: () => import('views/paymentSettlement/anInterBankCredit/collection.vue'),
        meta: {
          title: '跨行收款',
        }
    },
    { //跨行收款-跨行收款交易查询
        path: '/paymentSettlement/anInterBankCredit/dealQuery',
        name:'dealQuery',
        component: () => import('views/paymentSettlement/anInterBankCredit/dealQuery.vue'),
        meta: {
          title: '跨行收款交易查询',
        }
    },
]


// const recom = {
//     template: `<router-view></router-view>`
//   }
//   import Layout from '../../views/layout/layout'
  
//   // 转账汇款
//   const oneStopTransfer = resolve => require(['@src/views/paymentSettlement/oneStopTransfer/oneStopTransfer.vue'], resolve)//单笔转账
//   const batchTransfer = resolve => require(['@src/views/paymentSettlement/batchTransfer/batchTransfer.vue'], resolve)//批量转账
//   const transferQuery = resolve => require(['@src/views/paymentSettlement/transferQuery/index.vue'], resolve)
//   const batcherList = resolve => require(['@src/views/paymentSettlement/transferQuery/batcherList.vue'], resolve)
//   const oneStopList = resolve => require(['@src/views/paymentSettlement/transferQuery/oneStopList.vue'], resolve)
//   const oneStopDetail = resolve => require(['@src/views/paymentSettlement/transferQuery/oneStopDetail.vue'], resolve)
//   const batcherDetail = resolve => require(['@src/views/paymentSettlement/transferQuery/batcherDetail.vue'], resolve)
  
//   //单笔转账查询列表
  
//   const anInterBankCredit = resolve => require(['@src/views/paymentSettlement/anInterBankCredit/anInterBankCredit.vue'], resolve)//跨行交易
//   const collection = resolve => require(['@src/views/paymentSettlement/anInterBankCredit/collection.vue'], resolve)//跨行交易 -收款
//   const dealQuery = resolve => require(['@src/views/paymentSettlement/anInterBankCredit/dealQuery.vue'], resolve)//跨行收款交易查询
//   const dealQueryInfo = resolve => require(['@src/views/paymentSettlement/anInterBankCredit/dealQueryInfo.vue'], resolve)//跨行收款交易查询
  
//   const associatedNumberQuery = resolve => require(['@src/views/paymentSettlement/associatedNumberQuery/associatedNumberQueryList.vue'], resolve);//联行号查询
//   //收款人
  
//   const payee = resolve => require(['@src/views/paymentSettlement/payee/index.vue'], resolve)//收款人
//   const payeeCreate = resolve => require(['@src/views/paymentSettlement/payee/payeeCreate.vue'], resolve)//收款人新建
//   const payeeInfo = resolve => require(['@src/views/paymentSettlement/payee/payeeInfo.vue'], resolve)//收款人详情
//   const payeeUpdate = resolve => require(['@src/views/paymentSettlement/payee/payeeUpdate.vue'], resolve)//收款人修改
//   const payeeGroup = resolve => require(['@src/views/paymentSettlement/payee/payeeGroup.vue'], resolve)//分组
  
  
//   const paymentSettlement = [
//     {
//       path: '/paymentSettlement/oneStopTransfer',
//       name: 'paymentSettlement',
//       component: Layout,
//       meta: { title: '转账汇款', },
//       children: [
//         {
//           path: '/paymentSettlement/oneStopTransfer',
//           name: 'oneStopTransfer',
//           component: oneStopTransfer,
//           meta: { title: '单笔转账', },
  
//         },
//         {
//           path: '/paymentSettlement/batchTransfer',
//           name: 'batchTransfer',
//           component: batchTransfer,
//           meta: { title: '批量转账', },
//         },
//         {
//           path: '/paymentSettlement/transferQuery',
//           redirect: "/paymentSettlement/transferQuery/oneStopList",
//           name: 'transferQuery',
//           component: recom,
//           meta: { title: '转账交易查询', },
//           children: [
//             {
//               path: '/paymentSettlement/transferQuery',
//               redirect: "/paymentSettlement/transferQuery/oneStopList",
//               name: 'transferQuery',
//               component: transferQuery,
//               meta: { title: '转账交易查询', menu: false },
//               children: [
//                 {
//                   path: '/paymentSettlement/transferQuery',
//                   redirect: "/paymentSettlement/transferQuery/oneStopList",
//                   name: 'oneStopList',
//                   component: recom,
//                   meta: { title: '单笔转账', menu: false },
//                   children: [
//                     {
//                       path: '/paymentSettlement/transferQuery/oneStopList',
//                       name: 'oneStopList',
//                       component: oneStopList,
//                       meta: { title: '单笔转账', menu: false },
//                     }, {
//                       path: '/paymentSettlement/transferQuery/oneStopDetail',
//                       name: 'oneStopDetail',
//                       component: oneStopDetail,
//                       meta: { title: '交易详情', menu: false },
//                     }
//                   ]
//                 },
//                 {
//                   path: '/paymentSettlement/transferQuery',
//                   redirect: "/paymentSettlement/transferQuery/oneStopList",
//                   name: 'batcherList',
//                   component: recom,
//                   meta: { title: '批量转账', menu: false },
//                   children: [
//                     {
//                       path: '/paymentSettlement/transferQuery/batcherList',
//                       name: 'batcherList',
//                       component: batcherList,
//                       meta: { title: '批量转账', menu: false },
//                     },
//                     {
//                       path: '/paymentSettlement/transferQuery/batcherDetail',
//                       name: 'batcherDetail',
//                       component: batcherDetail,
//                       meta: { title: '交易详情', menu: false },
  
//                     }
//                   ]
//                 },
  
//               ]
//             },
  
//           ]
//         },
//         {
//           path: '/paymentSettlement/associatedNumberQuery',
//           name: 'associatedNumberQuery',
//           component: associatedNumberQuery,
//           meta: { title: '联行号查询', },
//         },
//         {
//           path: '/paymentSettlement/payee',
//           name: 'payee',
//           component: recom,
//           meta: { title: '常用收款人', },
//           children: [
//             {
//               path: '/paymentSettlement/payee',
//               name: 'payee',
//               component: payee,
//               meta: { title: '常用收款人', menu: false },
//             },
//             {
//               path: '/paymentSettlement/payee/payeeCreate',
//               name: 'payeeCreate',
//               component: payeeCreate,
//               meta: { title: '新增收款人', menu: false },
//             },
//             {
//               path: '/paymentSettlement/payee/payeeInfo',
//               name: 'payeeInfo',
//               component: recom,
//               meta: { title: '收款人详情', menu: false },
//               children: [
//                 {
//                   path: '/paymentSettlement/payee/payeeInfo',
//                   name: 'payeeInfo',
//                   component: payeeInfo,
//                   meta: { title: '收款人详情', menu: false },
//                 },
//                 {
//                   path: '/paymentSettlement/payee/payeeInfo/payeeUpdate',
//                   name: 'payeeUpdate',
//                   component: payeeUpdate,
//                   meta: { title: '修改收款人', menu: false },
//                 },
//               ]
//             },
//             {
//               path: '/paymentSettlement/payee/payeeGroup',
//               name: 'payeeGroup',
//               component: payeeGroup,
//               meta: { title: '分组详情', menu: false },
//             },
  
//           ]
//         },
//         {
//           path: '/paymentSettlement/anInterBankCredit',
//           name: 'anInterBankCredit',
//           component: recom,
//           meta: { title: '跨行收款', },
//           children: [
//             {
//               path: '/paymentSettlement/anInterBankCredit',
//               name: 'anInterBankCredit',
//               component: recom,
//               meta: { title: '跨行收款' },
//               children: [
//                 {
//                   path: '/paymentSettlement/anInterBankCredit',
//                   name: 'anInterBankCredit',
//                   component: anInterBankCredit,
//                   meta: { title: '跨行收款', menu: false },
//                 },
//                 {
//                   path: '/paymentSettlement/anInterBankCredit/collection',
//                   name: 'collection',
//                   component: collection,
//                   meta: { title: '收款', menu: false },
//                 },
//               ]
//             },
//             {
//               path: '/paymentSettlement/anInterBankCredit/dealQuery',
//               name: 'dealQuery',
//               component: recom,
//               meta: { title: '跨行收款交易查询', },
//               children: [
//                 {
//                   path: '/paymentSettlement/anInterBankCredit/dealQuery',
//                   name: 'anInterBankCredit',
//                   component: dealQuery,
//                   meta: { title: '跨行收款交易查询', menu: false },
//                 },
//                 {
//                   path: '/paymentSettlement/anInterBankCredit/dealQueryInfo',
//                   name: 'dealQueryInfo',
//                   component: dealQueryInfo,
//                   meta: { title: '交易详情', menu: false },
//                 },
//               ]
//             },
//           ]
//         },
//       ]
//     }
//   ]
  
//   export default paymentSettlement;