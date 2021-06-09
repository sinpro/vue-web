export default [
    { //代发业务-代发
        path: '/issueAndReceive/replaceIssueWork/replaceIssue',
        name:'replaceIssue',
        component: () => import('views/issueAndReceive/replaceIssueWork/replaceIssue.vue'),
        meta: {
          title: '代发',
        }
    },
    { //代发业务-代发交易查询
        path: '/issueAndReceive/replaceIssueWork/replaceIssueQuery',
        name:'replaceIssueQuery',
        component: () => import('views/issueAndReceive/replaceIssueWork/replaceIssueQuery.vue'),
        meta: {
          title: '代发交易查询',
        }
    },
    { //电子工资单-发布电子工资单
        path: '/issueAndReceive/electronicPayroll/replaceElectronicPayroll',
        name:'replaceElectronicPayroll',
        component: () => import('views/issueAndReceive/electronicPayroll/replaceElectronicPayroll.vue'),
        meta: {
          title: '发布电子工资单',
        }
    },
    { //电子工资单-发布记录查询
        path: '/issueAndReceive/electronicPayroll/replaceRecordQuery',
        name:'oneStopTransfer',
        component: () => import('views/issueAndReceive/electronicPayroll/replaceRecordQuery.vue'),
        meta: {
          title: '发布记录查询',
        }
    },
    // { //代收业务-代收
    //     path: '/issueAndReceive/replaceReceiveWork/replaceReceive',
    //     name:'replaceReceive',
    //     component: () => import('views/issueAndReceive/replaceReceiveWork/replaceReceive.vue'),
    //     meta: {
    //       title: '代收',
    //     }
    // },
    // { //代收业务-代收交易查询
    //     path: '/issueAndReceive/replaceReceiveWork/replaceReceiveQuery',
    //     name:'oneStopTransfer',
    //     component: () => import('views/issueAndReceive/replaceReceiveWork/replaceReceiveQuery.vue'),
    //     meta: {
    //       title: '代收交易查询',
    //     }
    // },
    // { //代收业务-收费
    //     path: '/issueAndReceive/replaceReceiveWork/toll',
    //     name:'toll',
    //     component: () => import('views/issueAndReceive/replaceReceiveWork/toll.vue'),
    //     meta: {
    //       title: '收费',
    //     }
    // },
]














// const recom = {
//     template: `<router-view></router-view>`
// }
// import Layout from '../../views/layout/layout'


// const replaceIssue = resolve => require(['@src/views/issueAndReceive/replaceIssueWork/replaceIssue.vue'], resolve)//单笔转账
// const replaceIssueQuery = resolve => require(['@src/views/issueAndReceive/replaceIssueWork/replaceIssueQuery.vue'], resolve)//单笔转账
// const replaceIssueQueryInfo = resolve => require(['@src/views/issueAndReceive/replaceIssueWork/replaceIssueQueryInfo.vue'], resolve)//单笔转账
// const replaceElectronicPayroll = resolve => require(['@src/views/issueAndReceive/electronicPayroll/replaceElectronicPayroll.vue'], resolve)//单笔转账
// const replaceRecordQuery = resolve => require(['@src/views/issueAndReceive/electronicPayroll/replaceRecordQuery.vue'], resolve)//单笔转账
// const replaceRecordQueryInfo = resolve => require(['@src/views/issueAndReceive/electronicPayroll/replaceRecordQueryInfo.vue'], resolve)//单笔转账

// const issueAndReceive = [
//     {
//         path: '/issueAndReceive',
//         name: 'issueAndReceive',
//         redirect: "/issueAndReceive/replaceIssueWork",
//         component: Layout,
//         meta: { title: '代发代收', },
//         children: [
//             {
//                 path: '/issueAndReceive/replaceIssueWork',
//                 redirect: "/issueAndReceive/replaceIssueWork/replaceIssue",
//                 name: 'replaceIssueWork',
//                 component: recom,
//                 meta: { title: '代发业务', },
//                 children: [
//                     {
//                         path: '/issueAndReceive/replaceIssueWork/replaceIssue',
//                         name: 'replaceIssue',
//                         component: replaceIssue,
//                         meta: { title: '代发', },
//                     },
//                     {
//                         path: '/issueAndReceive/replaceIssueWork/replaceIssueQuery',
//                         name: 'replaceIssueQuery',
//                         component: recom,
//                         meta: { title: '代发交易查询', },
//                         children: [
//                             {
//                                 path: '/issueAndReceive/replaceIssueWork/replaceIssueQuery',
//                                 name: 'replaceIssueQuery',
//                                 component: replaceIssueQuery,
//                                 meta: { title: '代发交易查询', menu: false },
//                             },
//                             {
//                                 path: '/issueAndReceive/replaceIssueWork/replaceIssueQuery/replaceIssueQueryInfo',
//                                 name: 'replaceIssueQueryInfo',
//                                 component: replaceIssueQueryInfo,
//                                 meta: { title: '代发交易查询详情', menu: false },
//                             },
//                         ]
//                     },
//                 ],
//             },
//             {
//                 path: '/issueAndReceive/electronicPayroll',
//                 name: 'electronicPayroll',
//                 component: recom,
//                 meta: { title: '电子工资单', },
//                 children: [
//                     {
//                         path: '/issueAndReceive/electronicPayroll/replaceElectronicPayroll',
//                         name: 'replaceElectronicPayroll',
//                         component: replaceElectronicPayroll,
//                         meta: { title: '发布电子工资单', },
//                     },
//                     {
//                         path: '/issueAndReceive/electronicPayroll/replaceRecordQuery',
//                         name: 'replaceRecordQuery',
//                         component: recom,
//                         meta: { title: '发布记录查询', },
//                         children: [
//                             {
//                                 path: '/issueAndReceive/electronicPayroll/replaceRecordQuery',
//                                 name: 'replaceRecordQuery',
//                                 component: replaceRecordQuery,
//                                 meta: { title: '发布记录查询', menu: false },
//                             },
//                             {
//                                 path: '/issueAndReceive/electronicPayroll/replaceRecordQueryInfo',
//                                 name: 'replaceRecordQueryInfo',
//                                 component: replaceRecordQueryInfo,
//                                 meta: { title: '发布记录查询详情', menu: false },
//                             },
//                         ]
//                     },
//                 ],
//             },
//             {
//                 path: '/issueAndReceive/replaceReceiveWork',
//                 redirect: '/issueAndReceive/replaceReceiveWork/replaceReceive',
//                 name: 'replaceReceiveWork',
//                 component: recom,
//                 meta: { title: '代收业务', },
//                 children: [
//                     {
//                         path: '/issueAndReceive/replaceReceiveWork/replaceReceive',
//                         name: 'replaceReceive',
//                         component: recom,
//                         meta: { title: '代收', },
//                     },
//                     {
//                         path: '/issueAndReceive/replaceReceiveWork/replaceReceiveQuery',
//                         name: 'replaceReceiveQuery',
//                         component: recom,
//                         meta: { title: '代收交易查询', },
//                     },
//                     {
//                         path: '/issueAndReceive/replaceReceiveWork/toll',
//                         name: 'toll',
//                         component: recom,
//                         meta: { title: '收费', },
//                     },
//                 ],
//             }
//         ],
//     }
// ]

// export default issueAndReceive;