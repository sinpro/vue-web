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