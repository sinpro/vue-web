
export default [
    { //理财产品-理财超市
        path: '/investmentFinancing/financialProducts/financialSupermarket',
        name:'financialSupermarket',
        component: () => import('views/investmentFinancing/financialProducts/financialSupermarket/index.vue'),
        meta: {
          title: '理财超市',
        }
    },
    { //理财产品-我的理财
        path: '/investmentFinancing/financialProducts/myfinancial',
        name:'myfinancial',
        component: () => import('views/investmentFinancing/financialProducts/myfinancial/ownList.vue'),
        meta: {
          title: '我的理财',
        }
    },
    { //理财产品-历史交易查询
        path: '/investmentFinancing/financialProducts/transactionInquiry',
        name:'transactionInquiry',
        component: () => import('views/investmentFinancing/financialProducts/transactionInquiry/index.vue'),
        meta: {
          title: '历史交易查询',
        }
    },
    { //理财产品-风险评估
        path: '/investmentFinancing/financialProducts/riskAassessment',
        name:'riskAassessment',
        component: () => import('views/investmentFinancing/financialProducts/riskAassessment/index.vue'),
        meta: {
          title: '风险评估',
        }
    },
    { //存款业务-定期存款
        path: '/investmentFinancing/depositBusiness/fixedDeposit',
        name:'fixedDeposit',
        component: () => import('views/investmentFinancing/depositBusiness/fixedDeposit/fdDraw.vue'),
        meta: {
          title: '定期存款',
        }
    },
    { //存款业务-通知存款
        path: '/investmentFinancing/depositBusiness/noticeDeposit',
        name:'noticeDeposit',
        component: () => import('views/investmentFinancing/depositBusiness/noticeDeposit/noticeDepositIn.vue'),
        meta: {
          title: '通知存款',
        }
    },
    { //存款业务-大额存单
        path: '/investmentFinancing/depositBusiness/certificatesOfDeposit',
        name:'certificatesOfDeposit',
        component: () => import('views/investmentFinancing/depositBusiness/certificatesOfDeposit/CODDeposit.vue'),
        meta: {
          title: '大额存单',
        }
    },
    { //存款业务-存款明细
        path: '/investmentFinancing/depositBusiness/depositDetail',
        name:'depositDetail',
        component: () => import('views/investmentFinancing/depositBusiness/depositDetail/index.vue'),
        meta: {
          title: '存款明细',
        }
    },
]

/*
// 投资理财
const recom = {
    template: `<router-view></router-view>`
}
import Layout from '../../views/layout/layout';
// 理财产品
// 理财超市
const financialSupermarket = resolve => require(['@src/views/investmentFinancing/financial-products/Financial-supermarket/index.vue'], resolve);
// 机构查询
const organCheck = resolve => require(['@src/views/investmentFinancing/financial-products/Financial-supermarket/organCheck.vue'], resolve);
// 购买
const buyStep = resolve => require(['@src/views/investmentFinancing/financial-products/Financial-supermarket/buyStep.vue'], resolve);
// 我的理财
const ownList = resolve => require(['@src/views/investmentFinancing/financial-products/myfinancial/ownList.vue'], resolve);//已持有
const tradeList = resolve => require(['@src/views/investmentFinancing/financial-products/myfinancial/tradeList.vue'], resolve);//交易中
const financiaDetail = resolve => require(['@src/views/investmentFinancing/financial-products/myfinancial/financiaDetail.vue'], resolve);//已持有详情
const redemptionFill = resolve => require(['@src/views/investmentFinancing/financial-products/myfinancial/redemptionFill.vue'], resolve);//赎回
const buyAgainFill = resolve => require(['@src/views/investmentFinancing/financial-products/myfinancial/buyAgainFill.vue'], resolve);//追加购买
const ownDetail = resolve => require(['@src/views/investmentFinancing/financial-products/myfinancial/ownDetail.vue'], resolve);//交易中-详情
// 历史交易查询
const transactionInquiry = resolve => require(['@src/views/investmentFinancing/financial-products/transactionInquiry/index.vue'], resolve);
// 风险评估
const riskAassessment = resolve => require(['@src/views/investmentFinancing/financial-products/riskAassessment/index.vue'], resolve);
// 存款业务
// 定期存款
// const fixedDeposit = resolve => require(['@src/views/investmentFinancing/DepositBusiness/fixedDeposit/index.vue'], resolve);
//定期存款存入
const fdDraw = resolve => require(['@src/views/investmentFinancing/DepositBusiness/fixedDeposit/fdDraw.vue'], resolve);
//定期存款支取
const fdDeposit = resolve => require(['@src/views/investmentFinancing/DepositBusiness/fixedDeposit/fdDeposit.vue'], resolve);
//定期存款支取,支取步骤页面
const fdDepositDraw = resolve => require(['@src/views/investmentFinancing/DepositBusiness/fixedDeposit/fdDepositDraw.vue'], resolve);

// 通知存款存入
const noticeDepositIn = resolve => require(['@src/views/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositIn.vue'], resolve);
// 通知存款支取
const noticeDepositOut = resolve => require(['@src/views/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositOut.vue'], resolve);
//通知存款支取,支取步骤页面
const noticeDepositOutDraw = resolve => require(['@src/views/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositOutDraw.vue'], resolve);
//大额存单存入
const CODDeposit = resolve => require(['@src/views/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDeposit.vue'], resolve);
//大额存单支取
const CODDraw = resolve => require(['@src/views/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDraw.vue'], resolve);
//大额存单存入,购买页面
const CODDepositIn = resolve => require(['@src/views/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDepositIn.vue'], resolve);
//大额存单支取,支取页面
const CODDrawOut = resolve => require(['@src/views/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDrawOut.vue'], resolve);
//存款查询
const depositDetail = resolve => require(['@src/views/investmentFinancing/DepositBusiness/depositDetail/index.vue'], resolve);






const investmentFinancing = [
    {
        path: '/investmentFinancing',
        redirect: "/investmentFinancing/financial-products",
        name: 'investmentFinancing',
        component: Layout,
        meta: {
            title: '投资理财',
        },
        children: [
            {
                path: '/investmentFinancing/financial-products',
                redirect: "/investmentFinancing/financial-products/financialSupermarket",
                name: 'financial-products',
                component: recom,
                meta: { title: '理财产品', },
                children: [
                    {
                        path: '/investmentFinancing/financial-products/financialSupermarket',
                        name: 'financialSupermarket',
                        component: recom,
                        meta: { title: '理财超市', },
                        children: [
                            {
                                path: '/investmentFinancing/financial-products/financialSupermarket',
                                name: 'financialSupermarket',
                                component: financialSupermarket,
                                meta: { title: '理财超市', menu: false },
                            },
                            {
                                path: '/investmentFinancing/financial-products/financialSupermarket/buyStep',
                                name: 'buyStep',
                                component: buyStep,
                                meta: { title: '购买', menu: false },
                            },
                            {
                                path: '/investmentFinancing/financial-products/financialSupermarket/organCheck',
                                name: 'organCheck',
                                component: organCheck,
                                meta: { title: '机构查询', menu: false },
                            },
                        ]
                    },

                    {
                        path: '/investmentFinancing/financial-products/ownList',
                        name: 'ownList',
                        component: recom,
                        meta: { title: '我的理财', },
                        children: [
                            {
                                path: '/investmentFinancing/financial-products/ownList',
                                name: 'ownList',
                                component: ownList,
                                meta: { title: '已持有', menu: false },
                            },
                            {
                                path: '/investmentFinancing/financial-products/ownList',
                                name: 'ownList',
                                component: recom,
                                meta: { title: '已持有', menu: false },
                                children: [
                                    {
                                        path: '/investmentFinancing/financial-products/ownList/financiaDetail',
                                        name: 'financiaDetail',
                                        component: financiaDetail,
                                        meta: { title: '详情', menu: false },
                                    }

                                ]
                            },
                            {
                                path: '/investmentFinancing/financial-products/financialSupermarket',
                                name: 'financialSupermarket',
                                component: recom,
                                meta: { title: '详情', menu: false },
                                children: [
                                    {
                                        path: '/investmentFinancing/financial-products/buyAgainFill',
                                        name: 'buyAgainFill',
                                        component: buyAgainFill,
                                        meta: { title: '追加购买', menu: false },
                                    },
                                    {
                                        path: '/investmentFinancing/financial-products/redemptionFill',
                                        name: 'redemptionFill',
                                        component: redemptionFill,
                                        meta: { title: '赎回', menu: false },
                                    },
                                ]
                            },


                            {
                                path: '/investmentFinancing/financial-products/tradeList',
                                name: 'tradeList',
                                component: tradeList,
                                meta: { title: '交易中', menu: false },
                            },
                            {
                                path: '/investmentFinancing/financial-products/tradeList',
                                name: 'tradeList',
                                component: recom,
                                meta: { title: '交易中', menu: false },
                                children: [
                                    {
                                        path: '/investmentFinancing/financial-products/tradeList/ownDetail',
                                        name: 'ownDetail',
                                        component: ownDetail,
                                        meta: { title: '详情', menu: false },
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        path: '/investmentFinancing/financial-products/transactionInquiry',
                        name: 'transactionInquiry',
                        component: transactionInquiry,
                        meta: { title: '历史交易查询', },
                    },
                    {
                        path: '/investmentFinancing/financial-products/riskAassessment',
                        name: 'riskAassessment',
                        component: riskAassessment,
                        meta: { title: '风险评估', },
                    },
                ]
            },
            {
                path: '/investmentFinancing/DepositBusiness',
                name: 'DepositBusiness',
                component: recom,
                meta: { title: '存款业务', },
                children: [
                    {
                        path: '/investmentFinancing/DepositBusiness/fixedDeposit',
                        redirect: "/investmentFinancing/DepositBusiness/fixedDeposit/fdDraw",
                        name: 'fixedDeposit',
                        component: recom,
                        meta: {
                            title: '定期存款',
                        },
                        children: [
                            {
                                path: '/investmentFinancing/DepositBusiness/fixedDeposit/fdDraw',
                                name: 'fdDraw',
                                component: fdDraw,
                                meta: {
                                    title: '定期存款存入', menu: false
                                },
                            },
                            {
                                path: '/investmentFinancing/DepositBusiness/fixedDeposit/fdDeposit',
                                redirect: "/investmentFinancing/DepositBusiness/fixedDeposit/fdDeposit/index",
                                name: 'fdDeposit',
                                component: recom,
                                meta: {
                                    title: '定期存款支取', menu: false
                                },
                                children: [
                                    {
                                        path: '/investmentFinancing/DepositBusiness/fixedDeposit/fdDeposit/index',
                                        name: 'fdDeposit',
                                        component: fdDeposit,
                                        meta: {
                                            title: '定期存款支取', menu: false
                                        },
                                    },
                                    {
                                        path: '/investmentFinancing/DepositBusiness/fixedDeposit/fdDeposit/fdDepositDraw',
                                        name: 'fdDepositDraw',
                                        component: fdDepositDraw,
                                        meta: {
                                            title: '支取', menu: false
                                        },
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: '/investmentFinancing/DepositBusiness/noticeDeposit',
                        redirect: "/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositIn",
                        name: 'noticeDeposit',
                        component: recom,
                        meta: {
                            title: '通知存款',
                        },
                        children: [
                            {
                                path: '/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositIn',
                                name: 'noticeDepositIn',
                                component: noticeDepositIn,
                                meta: {
                                    title: '通知存款存入', menu: false
                                },
                            },
                            {
                                path: '/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositOut',
                                redirect: "/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositOut",
                                name: 'noticeDepositOut',
                                component: recom,
                                meta: {
                                    title: '通知存款支取', menu: false
                                },
                                children: [
                                    {
                                        path: '/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositOut',
                                        name: 'noticeDepositOut',
                                        component: noticeDepositOut,
                                        meta: {
                                            title: '通知存款支取', menu: false
                                        },
                                    },
                                    {
                                        path: '/investmentFinancing/DepositBusiness/noticeDeposit/noticeDepositOut/noticeDepositOutDraw',
                                        name: 'noticeDepositOutDraw',
                                        component: noticeDepositOutDraw,
                                        meta: {
                                            title: '支取', menu: false
                                        },
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: '/investmentFinancing/DepositBusiness/certificatesOfDeposit',
                        redirect: "/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDeposit",
                        name: 'certificatesOfDeposit',
                        component: recom,
                        meta: {
                            title: '大额存单',
                        },
                        children: [
                            {
                                path: '/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDeposit',
                                redirect: "/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDeposit",
                                name: 'CODDeposit',
                                component: recom,
                                meta: {
                                    title: '大额存单存入', menu: false
                                },
                                children: [
                                    {
                                        path: '/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDeposit',
                                        name: 'CODDeposit',
                                        component: CODDeposit,
                                        meta: {
                                            title: '大额存单存入', menu: false
                                        },
                                    },
                                    {
                                        path: '/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDeposit/CODDepositIn',
                                        name: 'CODDepositIn',
                                        component: CODDepositIn,
                                        meta: {
                                            title: '购买', menu: false
                                        },
                                    },
                                ]
                            },
                            {
                                path: '/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDraw',
                                redirect: "/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDraw",
                                name: 'CODDraw',
                                component: recom,
                                meta: {
                                    title: '大额存单支取', menu: false
                                },
                                children: [
                                    {
                                        path: '/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDraw',
                                        name: 'CODDraw',
                                        component: CODDraw,
                                        meta: {
                                            title: '大额存单支取', menu: false
                                        },
                                    },
                                    {
                                        path: '/investmentFinancing/DepositBusiness/certificatesOfDeposit/CODDraw/CODDrawOut',
                                        name: 'CODDrawOut',
                                        component: CODDrawOut,
                                        meta: {
                                            title: '支取', menu: false
                                        },
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        path: '/investmentFinancing/DepositBusiness/depositDetail',
                        name: 'depositDetail',
                        component: depositDetail,
                        meta: {
                            title: '存款明细'
                        },
                    }
                ]
            },
        ]
    },
]

export default investmentFinancing;
*/