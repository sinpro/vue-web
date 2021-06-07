export default [
    { //资金归集余额查询
        path: '/cashManagement/cashSweep/balanceQuery',
        name:'cashSweepBalanceQuery',
        component: () => import('views/cashManagement/cashSweep/balanceQuery.vue'),
        meta: {
          title: '资金归集余额查询',
        }
    },
    { //资金归集明细查询
        path: '/cashManagement/cashSweep/detailedQuery',
        name:'cashSweepDetailedQuery',
        component: () => import('views/cashManagement/cashSweep/detailedQuery.vue'),
        meta: {
          title: '资金归集明细查询',
        }
    },
    { //资金归集利息查询
        path: '/cashManagement/cashSweep/interestQuery',
        name:'cashSweepInterestQuery',
        component: () => import('views/cashManagement/cashSweep/interestQuery.vue'),
        meta: {
          title: '资金归集利息查询',
        }
    },{ //资金归集利息分配
        path: '/cashManagement/cashSweep/interestDistribution',
        name:'cashSweepInterestDistribution',
        component: () => import('views/cashManagement/cashSweep/interestDistribution.vue'),
        meta: {
          title: '资金归集利息分配',
        }
    },{ //资金归集上划下拨
        path: '/cashManagement/cashSweep/upStrokeAllocation',
        name:'cashSweepUpStrokeAllocation',
        component: () => import('views/cashManagement/cashSweep/upStrokeAllocation.vue'),
        meta: {
          title: '资金归集上划下拨',
        }
    },{ //资金归集联动支付
        path: '/cashManagement/cashSweep/linkagePayment',
        name:'cashSweepLinkagePayment',
        component: () => import('views/cashManagement/cashSweep/linkagePayment.vue'),
        meta: {
          title: '资金归集联动支付',
        }
    }
]