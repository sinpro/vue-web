export default []
/*
const recom = {
    template: `<router-view></router-view>`
}
import Layout from '../../views/layout/layout'


// 转账汇款
const drawAbillApply = resolve => require(['@src/views/bill/drawAbill/index.vue'], resolve)//出票
const oneStopApply = resolve => require(['@src/views/bill/drawAbill/oneStop/oneStopApply.vue'], resolve)//单笔申请
const batchApply = resolve => require(['@src/views/bill/drawAbill/batch/batchApply.vue'], resolve)//批量申请
const updateBatchApply = resolve => require(['@src/views/bill/drawAbill/batch/updateBatchApply.vue'], resolve)//修改批量出票

const stayBill = resolve => require(['@src/views/bill/drawAbill/stayBill/stayBill.vue'], resolve)//待出票清单
const updateStayBill = resolve => require(['@src/views/bill/drawAbill/stayBill/updateStayBill.vue'], resolve)//待出票清单修改

const acceptApply = resolve => require(['@src/views/bill/accept/acceptApply.vue'], resolve)//承兑申请
const acceptRevocation = resolve => require(['@src/views/bill/accept/acceptRevocation.vue'], resolve)//承兑申请撤销

const revocationBill = resolve => require(['@src/views/bill/revocationBill/revocationBill.vue'], resolve)//撤票

const thisTicketApply = resolve => require(['@src/views/bill/thisTicket/thisTicketApply.vue'], resolve)//承兑申请撤销
const thisTicketRevocation = resolve => require(['@src/views/bill/thisTicket/thisTicketRevocation.vue'], resolve)//承兑申请撤销

const discountApply = resolve => require(['@src/views/bill/discount/discountApply.vue'], resolve)//贴现申请
const discountRevocation = resolve => require(['@src/views/bill/discount/discountRevocation.vue'], resolve)//贴现申请撤销

const negotiablityApply = resolve => require(['@src/views/bill/negotiablity/negotiablityApply.vue'], resolve)//背书申请
const negotiablityRevocation = resolve => require(['@src/views/bill/negotiablity/negotiablityRevocation.vue'], resolve)//背书申请撤销

const pledge = resolve => require(['@src/views/bill/pledge/pledge.vue'], resolve)//质押
const pledgeRevocation = resolve => require(['@src/views/bill/pledge/pledgeRevocation.vue'], resolve)//质押撤销
const removePledgeApply = resolve => require(['@src/views/bill/pledge/removePledgeApply.vue'], resolve)//解质押申请
const removePledgeApplyRevocation = resolve => require(['@src/views/bill/pledge/removePledgeApplyRevocation.vue'], resolve)//解质押撤销

const perForPaymentApply = resolve => require(['@src/views/bill/perForPayment/perForPaymentApply.vue'], resolve)//提示付款申请
const perForPaymentRevocation = resolve => require(['@src/views/bill/perForPayment/perForPaymentRevocation.vue'], resolve)//提示付款撤销

const pressPaymentApply = resolve => require(['@src/views/bill/pressPaymentAndpayOff/pressPaymentApply.vue'], resolve)//追索申请
const pressPaymentRevocation = resolve => require(['@src/views/bill/pressPaymentAndpayOff/pressPaymentRevocation.vue'], resolve)//追索申请撤销
const payOffApply = resolve => require(['@src/views/bill/pressPaymentAndpayOff/payOffApply.vue'], resolve)//同意清偿
const payOffRevocation = resolve => require(['@src/views/bill/pressPaymentAndpayOff/payOffRevocation.vue'], resolve)//同意清偿撤销


const PromptToCollectTickets = resolve => require(['@src/views/bill/toBeSigned/PromptToCollectTickets.vue'], resolve)//提示收票签收
const endorsementTransfer = resolve => require(['@src/views/bill/toBeSigned/endorsementTransfer.vue'], resolve)//背书转让签收
const pledgeSign = resolve => require(['@src/views/bill/toBeSigned/pledgeSign.vue'], resolve)//质押签收
const removePledgeApplySign = resolve => require(['@src/views/bill/toBeSigned/removePledgeApplySign.vue'], resolve)//解质押签收
const payOffSign = resolve => require(['@src/views/bill/toBeSigned/payOffSign.vue'], resolve)//同意清偿签收

const billBusiness = resolve => require(['@src/views/bill/query/billBusiness.vue'], resolve)//票据结果查询
const billinfo = resolve => require(['@src/views/bill/query/billinfo.vue'], resolve)//票据结果查询
const billResult = resolve => require(['@src/views/bill/query/billResult.vue'], resolve)//票据结果查询

const payee = resolve => require(['@src/views/bill/payee/index.vue'], resolve)//收款人
const drawAbillPayee = resolve => require(['@src/views/bill/payee/drawAbillPayee/drawAbillPayee.vue'], resolve)//出票收款人
const negotiablityPayee = resolve => require(['@src/views/bill/payee/negotiablityPayee/negotiablityPayee.vue'], resolve)//背书收款人

const drawAbillUpdate = resolve => require(['@src/views/bill/payee/drawAbillPayee/drawAbillUpdate.vue'], resolve)//出票收款人修改
const drawAbillAdd = resolve => require(['@src/views/bill/payee/drawAbillPayee/drawAbillAdd.vue'], resolve)//出票收款人 新增

const negotiablityUpdate = resolve => require(['@src/views/bill/payee/negotiablityPayee/negotiablityUpdate.vue'], resolve)//背书收款人修改
const negotiablityAdd = resolve => require(['@src/views/bill/payee/negotiablityPayee/negotiablityAdd.vue'], resolve)//背书收款人 新增

const bill = [
    {
        path: '/bill',
        name: 'bill',
        redirect: "/bill/drawAbill",
        component: Layout,
        meta: { title: '票据业务', },
        children: [
            {
                path: '/bill/drawAbill',
                name: 'drawAbill',
                redirect: "/bill/drawAbill/drawAbillApply",
                component: recom,
                meta: { title: '出票', },
                children: [
                    {
                        path: '/bill/drawAbill/drawAbillApply',
                        name: 'drawAbillApply',
                        redirect: "/bill/drawAbill/drawAbillApply/oneStopApply",
                        component: drawAbillApply,
                        meta: { title: '出票申请', },
                        children: [
                            {
                                path: '/bill/drawAbill/drawAbillApply/oneStopApply',
                                name: 'oneStopApply',
                                component: oneStopApply,
                                meta: { title: '单笔申请', menu: false },
                            },
                            {
                                path: '/bill/drawAbill/drawAbillApply/batchApply',
                                name: 'batchApply',
                                component: recom,
                                meta: { title: '批量申请', menu: false },
                                children: [
                                    {
                                        path: '/bill/drawAbill/drawAbillApply/batchApply',
                                        name: 'batchApply',
                                        component: batchApply,
                                        meta: { title: '批量申请', menu: false },
                                    },
                                    {
                                        path: '/bill/drawAbill/drawAbillApply/batchApply/updateBatchApply',
                                        name: 'updateBatchApply',
                                        component: updateBatchApply,
                                        meta: { title: '修改批量申请', menu: false },
                                    },
                                ]
                            },

                        ]
                    },
                    {
                        path: '/bill/drawAbill/stayBill',
                        name: 'stayBill',
                        component: recom,
                        meta: { title: '待出票清单', },
                        children: [{
                            path: '/bill/drawAbill/stayBill',
                            name: 'stayBill',
                            component: stayBill,
                            meta: { title: '待出票清单', menu: false },
                        }, {
                            path: '/bill/drawAbill/stayBill/updateStayBill',
                            name: 'updateStayBill',
                            component: updateStayBill,
                            meta: { title: '修改待出票清单', menu: false },
                        }]
                    },
                ]
            },
            {
                path: '/bill/accept',
                name: 'accept',
                redirect: "/bill/accept/acceptApply",
                component: recom,
                meta: { title: '承兑', },
                children: [
                    {
                        path: '/bill/accept/acceptApply',
                        name: 'acceptApply',
                        component: acceptApply,
                        meta: { title: '提示承兑申请', },
                    },
                    {
                        path: '/bill/accept/acceptRevocation',
                        name: 'acceptRevocation',
                        component: acceptRevocation,
                        meta: { title: '提示承兑撤销', },
                    },
                ]
            },
            {
                path: '/bill/revocationBill',
                name: 'revocationBill',
                component: revocationBill,
                meta: { title: '撤票', },
            },
            {
                path: '/bill/thisTicket',
                name: 'thisTicket',
                redirect: "/bill/thisTicket/thisTicketApply",
                component: recom,
                meta: { title: '提示收票', },
                children: [
                    {
                        path: '/bill/thisTicket/thisTicketApply',
                        name: 'thisTicketApply',
                        component: thisTicketApply,
                        meta: { title: '提示收票申请', },
                    },
                    {
                        path: '/bill/thisTicket/thisTicketRevocation',
                        name: 'thisTicketRevocation',
                        component: thisTicketRevocation,
                        meta: { title: '提示收票撤销', },
                    },
                ]
            },
            {
                path: '/bill/discount',
                name: 'discount',
                redirect: "/bill/discount/discountApply",
                component: recom,
                meta: { title: '贴现', },
                children: [
                    {
                        path: '/bill/discount/discountApply',
                        name: 'discountApply',
                        component: discountApply,
                        meta: { title: '贴现申请', },
                    },
                    {
                        path: '/bill/discount/discountRevocation',
                        name: 'discountRevocation',
                        component: discountRevocation,
                        meta: { title: '贴现撤销', },
                    },
                ]
            },
            {
                path: '/bill/negotiablity',
                name: 'negotiablity',
                redirect: "/bill/negotiablity/negotiablityApply",
                component: recom,
                meta: { title: '背书转让', },
                children: [
                    {
                        path: '/bill/negotiablity/negotiablityApply',
                        name: 'negotiablityApply',
                        component: negotiablityApply,
                        meta: { title: '背书转让申请', },
                    },
                    {
                        path: '/bill/negotiablity/negotiablityRevocation',
                        name: 'negotiablityRevocation',
                        component: negotiablityRevocation,
                        meta: { title: '背书转让撤销', },
                    },
                ]
            },
            {
                path: '/bill/pledge',
                name: 'pledge',
                redirect: "/bill/pledge/pledge",
                component: recom,
                meta: { title: '质押', },
                children: [
                    {
                        path: '/bill/pledge/pledge',
                        name: 'pledge',
                        component: pledge,
                        meta: { title: '质押', },
                    },
                    {
                        path: '/bill/pledge/pledgeRevocation',
                        name: 'pledgeRevocation',
                        component: pledgeRevocation,
                        meta: { title: '质押撤销', },
                    },
                    {
                        path: '/bill/pledge/removePledgeApply',
                        name: 'removePledgeApply',
                        component: removePledgeApply,
                        meta: { title: '解质押申请', },
                    },
                    {
                        path: '/bill/pledge/removePledgeApplyRevocation',
                        name: 'removePledgeApplyRevocation',
                        component: removePledgeApplyRevocation,
                        meta: { title: '解质押申请撤销', },
                    },
                ]
            },
            {
                path: '/bill/perForPayment',
                name: 'perForPayment',
                redirect: "/bill/perForPayment/perForPaymentApply",
                component: recom,
                meta: { title: '提示付款', },
                children: [
                    {
                        path: '/bill/perForPayment/perForPaymentApply',
                        name: 'perForPaymentApply',
                        component: perForPaymentApply,
                        meta: { title: '提示付款申请', },
                    },
                    {
                        path: '/bill/perForPayment/perForPaymentRevocation',
                        name: 'perForPaymentRevocation',
                        component: perForPaymentRevocation,
                        meta: { title: '提示付款撤销', },
                    },
                ]
            },
            {
                path: '/bill/pressPaymentAndpayOff',
                name: 'drawAbill',
                redirect: "/bill/pressPaymentAndpayOff/pressPaymentApply",
                component: recom,
                meta: { title: '追索/清偿', },
                children: [
                    {
                        path: '/bill/pressPaymentAndpayOff/pressPaymentApply',
                        name: 'pressPaymentApply',
                        component: pressPaymentApply,
                        meta: { title: '追索申请', },
                    },
                    {
                        path: '/bill/pressPaymentAndpayOff/pressPaymentRevocation',
                        name: 'pressPaymentRevocation',
                        component: pressPaymentRevocation,
                        meta: { title: '追索申请撤销', },
                    },
                    {
                        path: '/bill/pressPaymentAndpayOff/payOffApply',
                        name: 'payOffApply',
                        component: payOffApply,
                        meta: { title: '同意清偿', },
                    },
                    {
                        path: '/bill/pressPaymentAndpayOff/payOffRevocation',
                        name: 'payOffRevocation',
                        component: payOffRevocation,
                        meta: { title: '同意清偿撤销', },
                    },
                ]
            },
            {
                path: '/bill/toBeSigned',
                name: 'toBeSigned',
                redirect: "/bill/toBeSigned/PromptToCollectTickets",
                component: recom,
                meta: { title: '待签收业务', },
                children: [
                    {
                        path: '/bill/toBeSigned/PromptToCollectTickets',
                        name: 'PromptToCollectTickets',
                        component: PromptToCollectTickets,
                        meta: { title: '提示收票签收', },
                    },
                    {
                        path: '/bill/toBeSigned/endorsementTransfer',
                        name: 'endorsementTransfer',
                        component: endorsementTransfer,
                        meta: { title: '背书转让签收', },
                    },
                    {
                        path: '/bill/toBeSigned/pledgeSign',
                        name: 'pledgeSign',
                        component: pledgeSign,
                        meta: { title: '质押签收', },
                    },
                    {
                        path: '/bill/toBeSigned/removePledgeApplySign',
                        name: 'removePledgeApplySign',
                        component: removePledgeApplySign,
                        meta: { title: '解质押签收', },
                    },
                    {
                        path: '/bill/toBeSigned/payOffSign',
                        name: 'payOffSign',
                        component: payOffSign,
                        meta: { title: '同意清偿签收', },
                    },
                ]
            },
            {
                path: '/bill/query',
                name: 'query',
                redirect: "/bill/query/billBusiness",
                component: recom,
                meta: { title: '查询', },
                children: [
                    {
                        path: '/bill/query/billBusiness',
                        name: 'billBusiness',
                        component: billBusiness,
                        meta: { title: '票据交易查询', },
                    },
                    {
                        path: '/bill/query/billinfo',
                        name: 'billinfo',
                        component: billinfo,
                        meta: { title: '票据信息查询', },
                    },
                    {
                        path: '/bill/query/billResult',
                        name: 'billResult',
                        component: billResult,
                        meta: { title: '票据结果查询', },
                    },
                ]
            },
            {
                path: '/bill/payee',
                name: 'payee',
                redirect: "/bill/payee/drawAbillPayee",
                component: payee,
                meta: { title: '收款人维护' },
                children: [
                    {
                        path: '/bill/payee/drawAbillPayee',
                        name: 'drawAbillPayee',
                        component: recom,
                        meta: { title: '出票收款人', menu: false },
                        children: [
                            {
                                path: '/bill/payee/drawAbillPayee',
                                name: 'drawAbillPayee',
                                component: drawAbillPayee,
                                meta: { title: '出票收款人', menu: false },
                            },
                            {
                                path: '/bill/payee/drawAbillPayee/drawAbillAdd',
                                name: 'drawAbillAdd',
                                component: drawAbillAdd,
                                meta: { title: '新增收款人', menu: false },
                            },
                            {
                                path: '/bill/payee/drawAbillPayee/drawAbillUpdate',
                                name: 'drawAbillUpdate',
                                component: drawAbillUpdate,
                                meta: { title: '修改收款人', menu: false },
                            }
                        ]
                    },
                    {
                        path: '/bill/payee/negotiablityPayee',
                        name: 'negotiablityPayee',
                        component: recom,
                        meta: { title: '背书收款人', menu: false },
                        children: [
                            {
                                path: '/bill/payee/negotiablityPayee',
                                name: 'negotiablityPayee',
                                component: negotiablityPayee,
                                meta: { title: '背书收款人', menu: false },
                            },
                            {
                                path: '/bill/payee/negotiablityPayee/negotiablityAdd',
                                name: 'negotiablityAdd',
                                component: negotiablityAdd,
                                meta: { title: '新增收款人', menu: false },
                            },
                            {
                                path: '/bill/payee/negotiablityPayee/negotiablityUpdate',
                                name: 'negotiablityUpdate',
                                component: negotiablityUpdate,
                                meta: { title: '修改收款人', menu: false },
                            }
                        ]
                    }
                ]

            },
        ],
    }
]

export default bill;
*/