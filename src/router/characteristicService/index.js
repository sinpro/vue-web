export default [
    {
        path: '/characteristicService/electricityPayment',
        name: 'electricityPayment',
        component: () => import('views/characteristicService/electricity/electricityPayment.vue'),
        meta: { title: '电力缴费', },
    },
    {
        path: '/characteristicService/fiscalLevy',
        name: 'fiscalLevy',
        component: () => import('views/characteristicService/fiscalLevy/fiscalLevy.vue'),
        meta: { title: '财税库银' },
    },
    {
        path: '/characteristicService/nontaxPay',
        name: 'nontaxPay',
        component: () => import('views/characteristicService/nontaxPay/nontaxPay.vue'),
        meta: { title: '非税缴费' },
    },
    {
        path: '/characteristicService/payConfirm',
        name: 'payConfirm',
        component: () => import('views/characteristicService/preSaleMgt/payConfirm.vue'),
        meta: { title: '缴款确认' },
    },
    {
        path: '/characteristicService/transRefund',
        name: 'transRefund',
        component: () => import('views/characteristicService/preSaleMgt/transRefund.vue'),
        meta: { title: '划拨退款' },
    },
    {
        path: '/characteristicService/noOrderPayment',
        name: 'noOrderPayment',
        component: () => import('views/characteristicService/bidBond/noOrderPayment.vue'),
        meta: { title: '非订单模式支付' },
    },
    {
        path: '/characteristicService/orderPayment',
        name: 'orderPayment',
        component: () => import('views/characteristicService/bidBond/orderPayment.vue'),
        meta: { title: '订单模式支付' },
    },
    {
        path: '/characteristicService/depositReFund',
        name: 'depositReFund',
        component: () => import('views/characteristicService/bidBond/depositReFund.vue'),
        meta: { title: '保证金退款' },
    },
    {
        path: '/characteristicService/reFundFail',
        name: 'reFundFail',
        component: () => import('views/characteristicService/bidBond/reFundFail.vue'),
        meta: { title: '退款失败清单' },
    },
    {
        path: '/characteristicService/paymentRecords',
        name: 'paymentRecords',
        component: () => import('views/characteristicService/paymentRecords/paymentRecords.vue'),
        meta: { title: '缴费记录' },
    },
]