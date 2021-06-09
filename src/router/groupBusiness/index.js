const recom = {
    template: `<router-view></router-view>`
}
export default [
    {
        path: '/groupBusiness/onTheDial',
        name: 'onTheDial',
        component: () => import('views/groupBusiness/onTheDial/index.vue'),
        meta: { title: '资金上拨' },
    },
    {
        path: '/groupBusiness/stir',
        name: 'stir',
        component: () => import('views/groupBusiness/stir/index.vue'),
        meta: { title: '资金下拨' },
    },
    {
        path: '/groupBusiness/internalTransfer',
        name: 'internalTransfer',
        component: () => import('views/groupBusiness/internalTransfer/index.vue'),
        meta: { title: '内部划拨' },
    },
    {
        path: '/groupBusiness/foreignPayment',
        name: 'foreignPayment',
        component: () => import('views/groupBusiness/foreignPayment/index.vue'),
        meta: { title: '对外付款' },
    },
    {
        path: '/groupBusiness/automaticTransfer/automaticTransferPlan',
        redirect: "/groupBusiness/automaticTransfer/automaticTransferPlan/onTheDialSet",

        name: 'foreignPayment',
        component: recom,
        meta: { title: '自动划拨计划' },
        children: [{
            path: '/groupBusiness/automaticTransfer/automaticTransferPlan/onTheDialSet',
            name: 'onTheDialSet',
            component: () => import('views/groupBusiness/automaticTransfer/automaticTransferPlan/onTheDialSet.vue'),
            meta: { title: '资金上划计划设置' },
        }, {
            path: '/groupBusiness/automaticTransfer/automaticTransferPlan/stirSet',
            name: 'stirSet',
            component: () => import('views/groupBusiness/automaticTransfer/automaticTransferPlan/stirSet.vue'),
            meta: { title: '资金下拨计划设置' },
        }]
    },
    {
        path: '/groupBusiness/automaticTransfer/automaticTransferMaintenance',
        name: 'automaticTransferMaintenance',
        component: recom,
        meta: { title: '划拨计划维护' },
        children: [{
            path: '/groupBusiness/automaticTransfer/automaticTransferMaintenance',
            name: 'automaticTransferMaintenance',
            component: () => import('views/groupBusiness/automaticTransfer/automaticTransferMaintenance/index.vue'),
            meta: { title: '划拨计划维护', menu: false },
        }, {
            path: '/groupBusiness/automaticTransfer/automaticTransferMaintenance/autoTMInfo',
            name: 'autoTMInfo',
            component: () => import('views/groupBusiness/automaticTransfer/automaticTransferMaintenance/info.vue'),
            meta: { title: '划拨计划详情', menu: false },
        }]

    },
    {
        path: '/groupBusiness/informationQuery/groupManagemen',
        name: 'groupManagemen',
        component: () => import('views/groupBusiness/informationQuery/groupManagemen.vue'),
        meta: { title: '集团管理查询' },
    }, {
        path: '/groupBusiness/informationQuery/accountBalanceBranchCompany',
        name: 'accountBalanceBranchCompany',
        component: recom,
        meta: { title: '分公司账户余额查询' },
        children: [{
            path: '/groupBusiness/informationQuery/accountBalanceBranchCompany',
            name: 'accountBalanceBranchCompany',
            component: () => import('views/groupBusiness/informationQuery/accountBalanceBranchCompany/index.vue'),
            meta: { title: '分公司账户余额查询' },
        }, {
            path: '/groupBusiness/informationQuery/accountBalanceBranchCompany/ABBCInfo',
            name: 'ABBCInfo',
            component: () => import('views/groupBusiness/informationQuery/accountBalanceBranchCompany/info.vue'),
            meta: { title: '分公司账户明细' },
        },
        {
            path: '/groupBusiness/informationQuery/accountBalanceBranchCompany/ABBCParticulars',
            name: 'ABBCParticulars',
            component: () => import('views/groupBusiness/informationQuery/accountBalanceBranchCompany/particulars.vue'),
            meta: { title: '分公司账户详情' },
        }]
    },
    {
        path: '/groupBusiness/informationQuery/transferTransactions',
        redirect: "/groupBusiness/informationQuery/transferTransactions/queryOnTheDial",
        name: 'transferTransactions',
        component: () => import('views/groupBusiness/informationQuery/transferTransactions/index.vue'),
        meta: { title: '划拨交易查询' },
        children: [{
            path: '/groupBusiness/informationQuery/transferTransactions/queryOnTheDial',
            name: 'queryOnTheDial',
            component: recom,
            meta: { title: '资金上拨' },
            children: [
                {
                    path: '/groupBusiness/informationQuery/transferTransactions/queryOnTheDial',
                    name: 'queryOnTheDial',
                    component: () => import('views/groupBusiness/informationQuery/transferTransactions/queryOnTheDial.vue'),
                    meta: { title: '资金上拨' },
                },
                {
                    path: '/groupBusiness/informationQuery/transferTransactions/queryOnTheDial/queryOnTheDialInfo',
                    name: 'queryOnTheDialInfo',
                    component: () => import('views/groupBusiness/informationQuery/transferTransactions/queryOnTheDialInfo.vue'),
                    meta: { title: '资金上拨详情' },
                }
            ]
        }, {
            path: '/groupBusiness/informationQuery/transferTransactions/queryStir',
            name: 'queryStir',
            component: recom,
            meta: { title: '资金下拨' },
            children: [
                {
                    path: '/groupBusiness/informationQuery/transferTransactions/queryStir',
                    name: 'queryStir',
                    component: () => import('views/groupBusiness/informationQuery/transferTransactions/queryStir.vue'),
                    meta: { title: '资金下拨' },
                },
                {
                    path: '/groupBusiness/informationQuery/transferTransactions/queryStir/queryStirInfo',
                    name: 'queryStirInfo',
                    component: () => import('views/groupBusiness/informationQuery/transferTransactions/queryStirInfo.vue'),
                    meta: { title: '资金下拨详情' },
                }
            ]
        },
        {
            path: '/groupBusiness/informationQuery/transferTransactions/queryInternalTransfer',
            name: 'queryInternalTransfer',
            component: recom,
            meta: { title: '内部划拨' },
            children: [
                {
                    path: '/groupBusiness/informationQuery/transferTransactions/queryInternalTransfer',
                    name: 'queryInternalTransfer',
                    component: () => import('views/groupBusiness/informationQuery/transferTransactions/queryInternalTransfer.vue'),
                    meta: { title: '内部划拨' },
                },
                {
                    path: '/groupBusiness/informationQuery/transferTransactions/queryInternalTransfer/queryInternalTransferInfo',
                    name: 'queryInternalTransferInfo',
                    component: () => import('views/groupBusiness/informationQuery/transferTransactions/queryInternalTransferInfo.vue'),
                    meta: { title: '内部划拨详情' },
                }
            ]
        }, {
            path: '/groupBusiness/informationQuery/transferTransactions/queryForeignPayment',
            name: 'queryForeignPayment',
            component: recom,
            meta: { title: '对外付款' },
            children: [
                {
                    path: '/groupBusiness/informationQuery/transferTransactions/queryForeignPayment',
                    name: 'queryForeignPayment',
                    component: () => import('views/groupBusiness/informationQuery/transferTransactions/queryForeignPayment.vue'),
                    meta: { title: '对外付款' },
                },
                {
                    path: '/groupBusiness/informationQuery/transferTransactions/queryForeignPayment/queryForeignPaymentInfo',
                    name: 'queryForeignPaymentInfo',
                    component: () => import('views/groupBusiness/informationQuery/transferTransactions/queryForeignPaymentInfo.vue'),
                    meta: { title: '对外付款详情' },
                }
            ]
        }]
    }
]

/*
const recom = {
    template: `<router-view></router-view>`
}
import Layout from '../../views/layout/layout';12q      q2


const onTheDial = resolve => require(['@src/views/groupBusiness/onTheDial/index.vue'], resolve);
const stir = resolve => require(['@src/views/groupBusiness/stir/index.vue'], resolve);
const internalTransfer = resolve => require(['@src/views/groupBusiness/internalTransfer/index.vue'], resolve);

const foreignPayment = resolve => require(['@src/views/groupBusiness/foreignPayment/index.vue'], resolve);
const onTheDialSet = resolve => require(['@src/views/groupBusiness/automaticTransfer/automaticTransferPlan/onTheDialSet.vue'], resolve);
const stirSet = resolve => require(['@src/views/groupBusiness/automaticTransfer/automaticTransferPlan/stirSet.vue'], resolve);
const automaticTransferMaintenance = resolve => require(['@src/views/groupBusiness/automaticTransfer/automaticTransferMaintenance/index.vue'], resolve);
const autoTMInfo = resolve => require(['@src/views/groupBusiness/automaticTransfer/automaticTransferMaintenance/info.vue'], resolve);

const groupManagemen = resolve => require(['@src/views/groupBusiness/informationQuery/groupManagemen.vue'], resolve);
const accountBalanceBranchCompany = resolve => require(['@src/views/groupBusiness/informationQuery/accountBalanceBranchCompany/index.vue'], resolve);
const ABBCInfo = resolve => require(['@src/views/groupBusiness/informationQuery/accountBalanceBranchCompany/info.vue'], resolve);
const ABBCParticulars = resolve => require(['@src/views/groupBusiness/informationQuery/accountBalanceBranchCompany/particulars.vue'], resolve);
const transferTransactions = resolve => require(['@src/views/groupBusiness/informationQuery/transferTransactions/index.vue'], resolve);
const queryOnTheDial = resolve => require(['@src/views/groupBusiness/informationQuery/transferTransactions/queryOnTheDial.vue'], resolve);
const queryStir = resolve => require(['@src/views/groupBusiness/informationQuery/transferTransactions/queryStir.vue'], resolve);
const queryInternalTransfer = resolve => require(['@src/views/groupBusiness/informationQuery/transferTransactions/queryInternalTransfer.vue'], resolve);
const queryForeignPayment = resolve => require(['@src/views/groupBusiness/informationQuery/transferTransactions/queryForeignPayment.vue'], resolve);
const queryOnTheDialInfo = resolve => require(['@src/views/groupBusiness/informationQuery/transferTransactions/queryOnTheDialInfo.vue'], resolve);
const queryStirInfo = resolve => require(['@src/views/groupBusiness/informationQuery/transferTransactions/queryStirInfo.vue'], resolve);
const queryInternalTransferInfo = resolve => require(['@src/views/groupBusiness/informationQuery/transferTransactions/queryInternalTransferInfo.vue'], resolve);
const queryForeignPaymentInfo = resolve => require(['@src/views/groupBusiness/informationQuery/transferTransactions/queryForeignPaymentInfo.vue'], resolve);

const groupBusiness = [
    {
        path: '/groupBusiness',
        redirect: "/groupBusiness/onTheDial",
        name: 'groupBusiness',
        component: Layout,
        meta: { title: '集团业务' },
        children: [
            {
                path: '/groupBusiness/onTheDial',
                name: 'onTheDial',
                component: onTheDial,
                meta: { title: '资金上拨' },
            },
            {
                path: '/groupBusiness/stir',
                name: 'stir',
                component: stir,
                meta: { title: '资金下拨' },
            },
            {
                path: '/groupBusiness/internalTransfer',
                name: 'internalTransfer',
                component: internalTransfer,
                meta: { title: '内部划拨' },
            },
            {
                path: '/groupBusiness/foreignPayment',
                name: 'foreignPayment',
                component: foreignPayment,
                meta: { title: '对外付款' },
            },
            {
                path: '/groupBusiness/automaticTransfer',
                redirect: "/groupBusiness/automaticTransfer/automaticTransferPlan",
                name: 'automaticTransfer',
                component: recom,
                meta: { title: '自动划拨' },
                children: [{
                    path: '/groupBusiness/automaticTransfer/automaticTransferPlan',
                    redirect: "/groupBusiness/automaticTransfer/automaticTransferPlan/onTheDialSet",
                    name: 'automaticTransferPlan',
                    component: recom,
                    meta: { title: '自动划拨计划' },
                    children: [{
                        path: '/groupBusiness/automaticTransfer/automaticTransferPlan/onTheDialSet',
                        name: 'onTheDialSet',
                        component: onTheDialSet,
                        meta: { title: '资金上划计划设置', menu: false },
                    }, {
                        path: '/groupBusiness/automaticTransfer/automaticTransferPlan/stirSet',
                        name: 'stirSet',
                        component: stirSet,
                        meta: { title: '资金下拨计划设置', menu: false },
                    }]
                }, {
                    path: '/groupBusiness/automaticTransfer/automaticTransferMaintenance',
                    name: 'automaticTransferMaintenance',
                    component: recom,
                    meta: { title: '划拨计划维护' },
                    children: [{
                        path: '/groupBusiness/automaticTransfer/automaticTransferMaintenance',
                        name: 'automaticTransferMaintenance',
                        component: automaticTransferMaintenance,
                        meta: { title: '划拨计划维护', menu: false },
                    }, {
                        path: '/groupBusiness/automaticTransfer/automaticTransferMaintenance/autoTMInfo',
                        name: 'autoTMInfo',
                        component: autoTMInfo,
                        meta: { title: '划拨计划详情', menu: false },
                    }]

                }]
            },
            {
                path: '/groupBusiness/informationQuery',
                name: 'informationQuery',
                component: recom,
                meta: { title: '信息查询' },
                children: [{
                    path: '/groupBusiness/informationQuery/groupManagemen',
                    name: 'groupManagemen',
                    component: groupManagemen,
                    meta: { title: '集团管理查询' },
                }, {
                    path: '/groupBusiness/informationQuery/accountBalanceBranchCompany',
                    name: 'accountBalanceBranchCompany',
                    component: recom,
                    meta: { title: '分公司账户余额查询' },
                    children: [{
                        path: '/groupBusiness/informationQuery/accountBalanceBranchCompany',
                        name: 'accountBalanceBranchCompany',
                        component: accountBalanceBranchCompany,
                        meta: { title: '分公司账户余额查询', menu: false },
                    }, {
                        path: '/groupBusiness/informationQuery/accountBalanceBranchCompany/ABBCInfo',
                        name: 'ABBCInfo',
                        component: ABBCInfo,
                        meta: { title: '分公司账户明细', menu: false },
                    },
                    {
                        path: '/groupBusiness/informationQuery/accountBalanceBranchCompany/ABBCParticulars',
                        name: 'ABBCParticulars',
                        component: ABBCParticulars,
                        meta: { title: '分公司账户详情', menu: false },
                    }]
                },
                {
                    path: '/groupBusiness/informationQuery/transferTransactions',
                    redirect: "/groupBusiness/informationQuery/transferTransactions/queryOnTheDial",
                    name: 'transferTransactions',
                    component: transferTransactions,
                    meta: { title: '划拨交易查询' },
                    children: [{
                        path: '/groupBusiness/informationQuery/transferTransactions/queryOnTheDial',
                        name: 'queryOnTheDial',
                        component: recom,
                        meta: { title: '资金上拨', menu: false },
                        children: [
                            {
                                path: '/groupBusiness/informationQuery/transferTransactions/queryOnTheDial',
                                name: 'queryOnTheDial',
                                component: queryOnTheDial,
                                meta: { title: '资金上拨', menu: false },
                            },
                            {
                                path: '/groupBusiness/informationQuery/transferTransactions/queryOnTheDial/queryOnTheDialInfo',
                                name: 'queryOnTheDialInfo',
                                component: queryOnTheDialInfo,
                                meta: { title: '资金上拨详情', menu: false },
                            }
                        ]
                    }, {
                        path: '/groupBusiness/informationQuery/transferTransactions/queryStir',
                        name: 'queryStir',
                        component: recom,
                        meta: { title: '资金下拨', menu: false },
                        children: [
                            {
                                path: '/groupBusiness/informationQuery/transferTransactions/queryStir',
                                name: 'queryStir',
                                component: queryStir,
                                meta: { title: '资金下拨', menu: false },
                            },
                            {
                                path: '/groupBusiness/informationQuery/transferTransactions/queryStir/queryStirInfo',
                                name: 'queryStirInfo',
                                component: queryStirInfo,
                                meta: { title: '资金下拨详情', menu: false },
                            }
                        ]
                    },
                    {
                        path: '/groupBusiness/informationQuery/transferTransactions/queryInternalTransfer',
                        name: 'queryInternalTransfer',
                        component: recom,
                        meta: { title: '内部划拨', menu: false },
                        children: [
                            {
                                path: '/groupBusiness/informationQuery/transferTransactions/queryInternalTransfer',
                                name: 'queryInternalTransfer',
                                component: queryInternalTransfer,
                                meta: { title: '内部划拨', menu: false },
                            },
                            {
                                path: '/groupBusiness/informationQuery/transferTransactions/queryInternalTransfer/queryInternalTransferInfo',
                                name: 'queryInternalTransferInfo',
                                component: queryInternalTransferInfo,
                                meta: { title: '内部划拨详情', menu: false },
                            }
                        ]
                    }, {
                        path: '/groupBusiness/informationQuery/transferTransactions/queryForeignPayment',
                        name: 'queryForeignPayment',
                        component: recom,
                        meta: { title: '对外付款', menu: false },
                        children: [
                            {
                                path: '/groupBusiness/informationQuery/transferTransactions/queryForeignPayment',
                                name: 'queryForeignPayment',
                                component: queryForeignPayment,
                                meta: { title: '对外付款', menu: false },
                            },
                            {
                                path: '/groupBusiness/informationQuery/transferTransactions/queryForeignPayment/queryForeignPaymentInfo',
                                name: 'queryForeignPaymentInfo',
                                component: queryForeignPaymentInfo,
                                meta: { title: '对外付款详情', menu: false },
                            }
                        ]
                    }]
                }]
            },
        ]
    },
]

export default groupBusiness;
 */