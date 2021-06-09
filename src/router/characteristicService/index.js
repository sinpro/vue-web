export default []

/*
const recom = {
    template: `<router-view></router-view>`
}
import Layout from '../../views/layout/layout';
//电力缴费
const electricityPayment = resolve => require(['@src/views/characteristic/electricity/electricityPayment.vue'], resolve)

//财税库银
const fiscalLevy = resolve => require(['@src/views/characteristic/fiscalLevy/fiscalLevy.vue'], resolve)
//非税缴费
const nontaxPay = resolve => require(['@src/views/characteristic/nontaxPay/nontaxPay.vue'], resolve)

//预售房资金管理
//缴款确认
const payConfirm = resolve => require(['@src/views/characteristic/preSaleMgt/payConfirm.vue'], resolve)
//划拨退款
const transRefund = resolve => require(['@src/views/characteristic/preSaleMgt/transRefund.vue'], resolve)

// 投招标保证金
//非订单模式
const noOrderPayment = resolve => require(['@src/views/characteristic/bidBond/noOrderPayment.vue'], resolve)
//订单模式
const orderPayment = resolve => require(['@src/views/characteristic/bidBond/orderPayment.vue'], resolve)
//保证金退款
const depositReFund = resolve => require(['@src/views/characteristic/bidBond/depositReFund.vue'], resolve)
//退款失败清单
const reFundFail = resolve => require(['@src/views/characteristic/bidBond/reFundFail.vue'], resolve)
//缴费记录
const paymentRecords = resolve => require(['@src/views/characteristic/paymentRecords/paymentRecords.vue'], resolve)

const characteristic = [
    {
        path: '/characteristic/electricityPayment',
        name: 'characteristic',
        component: Layout,
        meta: { title: '特色服务',},
        children: [
            {
                path: '/characteristic/electricityPayment',
                name: 'electricityPayment',
                component: electricityPayment,
                meta: { title: '电力缴费',},
            },
            {
                path: '/characteristic/fiscalLevy',
                name: 'fiscalLevy',
                component: fiscalLevy,
                meta: { title: '财税库银'},
            },
            {
                path: '/characteristic/nontaxPay',
                name: 'nontaxPay',
                component: nontaxPay,
                meta: { title: '非税缴费'},
            },
            {
                path: '/characteristic/preSaleMgt',
                name: 'preSaleMgt',
                component: recom,
                meta: { title: '预售房资金管理'},
                children:[
                    {
                        path: '/characteristic/payConfirm',
                        name: 'payConfirm',
                        component: payConfirm,
                        meta: { title: '缴款确认'},
                    },
                    {
                        path: '/characteristic/transRefund',
                        name: 'transRefund',
                        component: transRefund,
                        meta: { title: '划拨退款'},
                    },
                ]
            },
            {
                path: '/characteristic/bidBond',
                name: 'bidBond',
                component: recom,
                meta: { title: '投招标保证金'},
                children:[
                    {
                        path: '/characteristic/noOrderPayment',
                        name: 'noOrderPayment',
                        component: noOrderPayment,
                        meta: { title: '非订单模式支付'},
                    },
                    {
                        path: '/characteristic/orderPayment',
                        name: 'orderPayment',
                        component: orderPayment,
                        meta: { title: '订单模式支付'},
                    },
                    {
                        path: '/characteristic/depositReFund',
                        name: 'depositReFund',
                        component: depositReFund,
                        meta: { title: '保证金退款'},
                    },
                    {
                        path: '/characteristic/reFundFail',
                        name: 'reFundFail',
                        component: reFundFail,
                        meta: { title: '退款失败清单'},
                    },
                ]
            },
            {
                path: '/characteristic/paymentRecords',
                name: 'paymentRecords',
                component: paymentRecords,
                meta: { title: '缴费记录'},
            },
        ]
    }

]
export default characteristic;
*/