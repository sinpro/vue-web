const recom = {
    template: `<router-view></router-view>`
}
export default [
    {
        path: '/more/companyManage/companyInfoManage',
        name: 'companyInfoManage',
        component: () => import('views/moreFeatures/companyManage/companyInfoManage/index.vue'),
        meta: { title: '企业信息管理' },
        redirect: "/more/companyManage/companyInfoManage/basicInfoQuery",
        children: [
            {
                path: '/more/companyManage/companyInfoManage/basicInfoQuery',
                name: 'basicInfoQuery',
                component: () => import('views/moreFeatures/companyManage/companyInfoManage/basicInfoQuery.vue'),
                meta: { title: '企业基本信息查询' },
            },
            {
                path: '/more/companyManage/companyInfoManage/accountPowerManage',
                name: 'accountPowerManage',
                component: () => import('views/moreFeatures/companyManage/companyInfoManage/accountPowerManage.vue'),
                meta: { title: '企业账户权限管理' },
            },
            {
                path: '/more/companyManage/companyInfoManage/authorizationQuery',
                name: 'authorizationQuery',
                component: () => import('views/moreFeatures/companyManage/companyInfoManage/authorizationQuery.vue'),
                meta: { title: '授权模式查询' },
            },
            {

                path: '/more/companyManage/companyInfoManage/openedFunctionQuery',
                name: 'openedFunctionQuery',
                component: () => import('views/moreFeatures/companyManage/companyInfoManage/openedFunctionQuery.vue'),
                meta: { title: '开通业务查询' },
            }
        ]
    },
    {
        path: '/more/companyManage/companyOperatorManage',
        name: 'companyOperatorManage',
        component: recom,
        meta: { title: '企业操作员管理' },
        redirect: "/more/companyManage/companyOperatorManage/operatorManage",
        children: [
            {
                path: '/more/companyManage/companyOperatorManage/operatorManage',
                name: 'operatorManage',
                component: () => import('views/moreFeatures/companyManage/companyOperatorManage/operatorManage.vue'),
                meta: { title: '操作员管理' },
            },
            {
                path: '/more/companyManage/companyOperatorManage/authorizationManage',
                name: 'authorizationManage',
                component: () => import('views/moreFeatures/companyManage/companyOperatorManage/authorizationManage.vue'),
                meta: { title: '修改操作员权限' },
            },
            {
                path: '/more/companyManage/companyOperatorManage/accountManage',
                name: 'accountManage',
                component: () => import('views/moreFeatures/companyManage/companyOperatorManage/accountManage.vue'),
                meta: { title: '修改可操作账户' },
            },
            {

                path: '/more/companyManage/companyOperatorManage/functionManage',
                name: 'functionManage',
                component: () => import('views/moreFeatures/companyManage/companyOperatorManage/functionManage.vue'),
                meta: { title: '修改可操作业务' },
            }
        ]
    },
    {
        path: '/more/companyManage/limitSetting',
        redirect: "/more/companyManage/limitSetting/operatorLimit",
        name: 'operatorLimit',
        component: () => import('views/moreFeatures/companyManage/limitSetting/index.vue'),
        meta: { title: '限额设置', },
        children: [
            {
                path: '/more/companyManage/limitSetting/operatorLimit',
                name: 'operatorLimit',
                component: () => import('views/moreFeatures/companyManage/limitSetting/operatorLimit.vue'),
                meta: { title: '操作员限额设置', },
            },
            {
                path: '/more/companyManage/limitSetting/accountLimit',
                name: 'accountLimit',
                component: () => import('views/moreFeatures/companyManage/limitSetting/accountLimit.vue'),
                meta: { title: '企业账户限额设置', },
            },
            {
                path: '/more/companyManage/limitSetting/specialLimit',
                name: 'specialLimit',
                component: () => import('views/moreFeatures/companyManage/limitSetting/specialLimit.vue'),
                meta: { title: '特殊限额', },
            },
        ]
    },
    {
        path: '/more/companyManage/remittanceUsefor',
        name: 'remittanceUsefor',
        component: () => import('views/moreFeatures/companyManage/remittanceUsefor/remittanceUsefor.vue'),
        meta: { title: '汇款用途维护', },
    },
    {
        path: '/more/companyManage/deductingAccountManage',
        name: 'deductingAccountManage',
        component: () => import('views/moreFeatures/companyManage/deductingAccountManage/deductingAccountManage.vue'),
        meta: { title: '扣款账户管理', },
    },
    {
        path: '/more/companyManage/operatorLogQuery',
        name: 'operatorLogQuery',
        component: () => import('views/moreFeatures/companyManage/operatorLogQuery/operatorLogQuery.vue'),
        meta: { title: '操作员日志查询', },
    },
    // {
    //     path: '/more/companyManage/manager/message',
    //     name: 'message',
    //     component: recom,
    //     meta: { title: '短信通'},
    //     children:[
    //         {
    //             path: '/more/companyManage/manager/message',
    //             name: 'message',
    //             component: () => import('views/moreFeatures/moreFeatures/companyManage/limitSetting/operatorLimit.vue'),
    //             meta: { title: '短信通', },
    //         },
    //         {
    //             path: '/more/companyManage/manager/message/contract',
    //             name: 'contract',
    //             component: () => import('views/moreFeatures/moreFeatures/companyManage/limitSetting/operatorLimit.vue'),
    //             meta: { title: '签约', },
    //         },
    //         {
    //             path: '/more/companyManage/manager/message/edit',
    //             name: 'edit',
    //             component: () => import('views/moreFeatures/moreFeatures/companyManage/limitSetting/operatorLimit.vue'),
    //             meta: { title: '修改', },
    //         }
    //     ]
    // },




]






// export default []


/*
//套餐购买
const meal = resolve => require(['@src/views/more/meal/meal.vue'], resolve)
const payment1 = resolve => require(['@src/views/more/meal/payment1.vue'], resolve)
const paymoney = resolve => require(['@src/views/more/meal/paymoney.vue'], resolve)
const payRecord = resolve => require(['@src/views/more/meal/payRecord.vue'], resolve)
const recordDet = resolve => require(['@src/views/more/meal/recordDet.vue'], resolve)//购买记录详情
const paymeal = resolve => require(['@src/views/more/meal/paymeal.vue'], resolve)
const paymealDet = resolve => require(['@src/views/more/meal/paymealDet.vue'], resolve)//购买明细详情
//预约服务
const account = resolve => require(['@src/views/more/reserve/account.vue'], resolve)
const quota = resolve => require(['@src/views/more/reserve/quota.vue'], resolve)
//短信通
const message = resolve => require(['@src/views/companyManage/manager/message.vue'], resolve)
const contract = resolve => require(['@src/views/companyManage/manager/contract.vue'], resolve)
const edit = resolve => require(['@src/views/companyManage/manager/edit.vue'], resolve)
//B2B网关支付
const payDetail = resolve => require(['@src/views/B2BPay/payDetail.vue'], resolve);//支付明细查询
const openPayManage = resolve => require(['@src/views/B2BPay/openPayManage.vue'], resolve);//网上支付开通/管理
const openPay = resolve => require(['@src/views/B2BPay/openPay.vue'], resolve);//网上支付开通
const openManage = resolve => require(['@src/views/B2BPay/openManage.vue'], resolve);//网上支付管理
const openResult = resolve => require(['@src/views/B2BPay/openResult.vue'], resolve);//网上支付开通结果
//企业管理台
const companyInfoManage = resolve => require(['@src/views/companyManage/companyInfoManage/index.vue'], resolve);//企业信息管理
const basicInfoQuery = resolve => require(['@src/views/companyManage/companyInfoManage/basicInfoQuery.vue'], resolve);//企业基本信息查询
const accountPowerManage = resolve => require(['@src/views/companyManage/companyInfoManage/accountPowerManage.vue'], resolve);//企业基本信息查询
const authorizationQuery = resolve => require(['@src/views/companyManage/companyInfoManage/authorizationQuery.vue'], resolve);//授权模式查询
const openedFunctionQuery = resolve => require(['@src/views/companyManage/companyInfoManage/openedFunctionQuery.vue'], resolve);//开通业务查询
const operatorManage = resolve => require(['@src/views/companyManage/companyOperatorManage/operatorManage.vue'], resolve);//企业操作员管理
const authorizationManage = resolve => require(['@src/views/companyManage/companyOperatorManage/authorizationManage.vue'], resolve);//操作员权限管理
const accountManage = resolve => require(['@src/views/companyManage/companyOperatorManage/accountManage.vue'], resolve);//操作员账户管理
const functionManage = resolve => require(['@src/views/companyManage/companyOperatorManage/functionManage.vue'], resolve);//修改可操作业务
const limitSetting = resolve => require(['@src/views/companyManage/limitSetting/index.vue'], resolve);//操作员限额设置
const operatorLimit = resolve => require(['@src/views/companyManage/limitSetting/operatorLimit.vue'], resolve);//操作员限额设置
const accountLimit = resolve => require(['@src/views/companyManage/limitSetting/accountLimit.vue'], resolve);//企业账户限额设置
const specialLimit = resolve => require(['@src/views/companyManage/limitSetting/specialLimit.vue'], resolve);//特殊限额
const remittanceUsefor = resolve => require(['@src/views/companyManage/remittanceUsefor/remittanceUsefor.vue'], resolve);//汇款用途维护
const deductingAccountManage = resolve => require(['@src/views/companyManage/deductingAccountManage/deductingAccountManage.vue'], resolve);//扣款账户管理
const operatorLogQuery = resolve => require(['@src/views/companyManage/operatorLogQuery/operatorLogQuery.vue'], resolve);//操作员日志查询
//交易管理
const tradeSelect = resolve => require(['@src/views/more/trade/select/tradeSelect.vue'], resolve)
const selectDetail = resolve => require(['@src/views/more/trade/select/selectDetail.vue'], resolve)
//审批中心
const rest = resolve => require(['@src/views/more/trade/approval/rest.vue'], resolve)//待他人审批
const notApproval = resolve => require(['@src/views/more/trade/approval/notApproval.vue'], resolve)//待他人审批-未审批
const notDetail = resolve => require(['@src/views/more/trade/approval/notDetail.vue'], resolve)//待他人审批-未审批
const finish = resolve => require(['@src/views/more/trade/approval/finish.vue'], resolve)//待他人审批-已结束
const finishDetail = resolve => require(['@src/views/more/trade/approval/finishDetail.vue'], resolve)//待他人审批-已结束-详情

const waitForMe = resolve => require(['@src/views/more/trade/approval/waitForMe.vue'], resolve)//待我审批
const notStart = resolve => require(['@src/views/more/trade/approval/notStart.vue'], resolve)//待我审批-未审批
const notStartDet = resolve => require(['@src/views/more/trade/approval/notStartDet.vue'], resolve)//待我审批-未审批
const end = resolve => require(['@src/views/more/trade/approval/end.vue'], resolve)//待我审批-已结束
const endDet = resolve => require(['@src/views/more/trade/approval/endDet.vue'], resolve)//待我审批-已结束-详情
//银企直连
const loadcore = resolve => require(['@src/views/more/bankload/loadcore.vue'], resolve)//下载中心
const credentials = resolve => require(['@src/views/more/bankload/credentials.vue'], resolve)





import Layout from '../../views/layout/layout';

const recom = {
    template: `<router-view></router-view>`
}


//activeMenu:头部一级菜单高亮url    sideActiveMenu：左侧菜单高亮url
const more = [
    {
        path: '/more',
        name: 'more',
        component: Layout,
        meta: { title: '更多功能'},
        children: [
            {
                path: '/more/meal',
                redirect: "/more/meal/payment1",
                name: 'meal',
                component: meal,
                meta: { title: '费用套餐',},
                children:[
                    {
                        path: '/more/meal/payment1',
                        name: 'payment1',
                        component: recom,
                        meta: { title: '购买套餐',menu: false},
                        children:[
                            {
                                path: '/more/meal/payment1',
                                name: 'payment1',
                                component: payment1,
                                meta: { title: '购买套餐',menu: false},
                            },
                            {
                                path: '/more/meal/payment1/paymoney',
                                name: 'paymoney',
                                component: paymoney,
                                meta: { title: '购买',menu: false},
                            },
                        ],
                    },
                    {
                        path: '/more/meal/payRecord',
                        name: 'payRecord',
                        component: recom,
                        meta: { title: '购买记录查询',menu: false},
                        children:[
                            {
                                path: '/more/meal/payRecord',
                                name: 'payRecord',
                                component: payRecord,
                                meta: { title: '购买记录查询',menu: false},
                            },
                            {
                                path: '/more/meal/payRecord/recordDet',
                                name: 'recordDet',
                                component: recordDet,
                                meta: { title: '详情',menu: false},
                            },
                        ]
                    },
                    {
                        path: '/more/meal/paymeal',
                        name: 'paymeal',
                        component: recom,
                        meta: { title: '套餐明细查询',menu: false},
                        children:[
                            {
                                path: '/more/meal/paymeal',
                                name: 'paymeal',
                                component: paymeal,
                                meta: { title: '套餐明细查询',menu: false},
                            },
                            {
                                path: '/more/meal/paymeal/paymealDet',
                                name: 'paymealDet',
                                component: paymealDet,
                                meta: { title: '详情',menu: false},
                            },
                        ]
                    },
                ]
            },
            {
                path: '/more/reserve',
                name: 'reserve',
                component: recom,
                meta: { title: '预约服务',},
                children:[
                    {
                        path: '/more/reserve/account',
                        name: 'account',
                        component: account,
                        meta: { title: '预约开户',},
                    },
                    {
                        path: '/more/reserve/quota',
                        name: 'quota',
                        component: quota,
                        meta: { title: '大额取现预约',},
                    },
                ]
            },
            {
                path: '/more/companyManage',
                redirect: "/more/companyManage/companyInfoManage",
                name: 'companyManage',
                component: recom,
                meta: { title: '企业管理台',},
                children:[
                    {
                        path: '/more/companyManage/companyInfoManage',
                        redirect: "/more/companyManage/companyInfoManage/basicInfoQuery",
                        name: 'companyInfoManage',
                        component: companyInfoManage,//index页面
                        meta: { title: '企业信息管理',},
                        children:[
                            {
                                path: '/more/companyManage/companyInfoManage/basicInfoQuery',
                                name: 'basicInfoQuery',
                                component: basicInfoQuery,
                                meta: { title: '企业基本信息查询',menu: false},
                            },
                            {
                                path: '/more/companyManage/companyInfoManage/accountPowerManage',
                                name: 'accountPowerManage',
                                component: accountPowerManage,
                                meta: { title: '企业账户权限管理',menu: false},
                            },
                            {
                                path: '/more/companyManage/companyInfoManage/authorizationQuery',
                                name: 'authorizationQuery',
                                component: authorizationQuery,
                                meta: { title: '授权模式查询',menu: false},
                            },
                            {
                                path: '/more/companyManage/companyInfoManage/openedFunctionQuery',
                                name: 'openedFunctionQuery',
                                component: openedFunctionQuery,
                                meta: { title: '开通业务查询',menu: false},
                            },
                        ]
                    },
                    {
                        path: '/more/companyManage/companyOperatorManage',
                        redirect: "/more/companyManage/companyOperatorManage/operatorManage",
                        name: 'companyOperatorManage',
                        component: recom,
                        meta: { title: '企业操作员管理',},
                        children:[
                            {
                                path: '/more/companyManage/companyOperatorManage',
                                redirect: "/more/companyManage/companyOperatorManage/operatorManage",
                                name: 'operatorManage',
                                component: recom,
                                meta: { title: '操作员管理',menu: false},
                                children:[
                                    {
                                        path: '/more/companyManage/companyOperatorManage/operatorManage',
                                        name: 'operatorManage',
                                        component: operatorManage,
                                        meta: { title: '操作员管理',menu: false},
                                    },
                                    {
                                        path: '/more/companyManage/companyOperatorManage/authorizationManage',
                                        name: 'authorizationManage',
                                        component: authorizationManage,
                                        meta: { title: '修改操作员权限',menu: false},
                                    },
                                    {
                                        path: '/more/companyManage/companyOperatorManage/accountManage',
                                        name: 'accountManage',
                                        component: accountManage,
                                        meta: { title: '修改可操作账户',menu: false},
                                    },
                                    {
                                        path: '/more/companyManage/companyOperatorManage/functionManage',
                                        name: 'functionManage',
                                        component: functionManage,
                                        meta: { title: '修改可操作业务',menu: false},
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        path: '/more/companyManage/limitSetting',
                        redirect: "/more/companyManage/limitSetting/operatorLimit",
                        name: 'companyInfoManage',
                        component: limitSetting,
                        meta: { title: '限额设置',},
                        children:[
                            {
                                path: '/more/companyManage/limitSetting/operatorLimit',
                                name: 'operatorLimit',
                                component: operatorLimit,
                                meta: { title: '操作员限额设置',menu: false},
                            },
                            {
                                path: '/more/companyManage/limitSetting/accountLimit',
                                name: 'accountLimit',
                                component: accountLimit,
                                meta: { title: '企业账户限额设置',menu: false},
                            },
                            {
                                path: '/more/companyManage/limitSetting/specialLimit',
                                name: 'specialLimit',
                                component: specialLimit,
                                meta: { title: '特殊限额',menu: false},
                            },
                        ]
                    },
                    {
                        path: '/more/companyManage/remittanceUsefor',
                        name: 'remittanceUsefor',
                        component: remittanceUsefor,
                        meta: { title: '汇款用途维护',},
                    },
                    {
                        path: '/more/companyManage/deductingAccountManage',
                        name: 'deductingAccountManage',
                        component: deductingAccountManage,
                        meta: { title: '扣款账户管理',},
                    },
                    {
                        path: '/more/companyManage/operatorLogQuery',
                        name: 'operatorLogQuery',
                        component: operatorLogQuery,
                        meta: { title: '操作员日志查询',},
                    },
                    {
                        path: '/more/companyManage/manager/message',
                        name: 'message',
                        component: recom,
                        meta: { title: '短信通'},
                        children:[
                            {
                                path: '/more/companyManage/manager/message',
                                name: 'message',
                                component: message,
                                meta: { title: '短信通',menu: false},
                            },
                            {
                                path: '/more/companyManage/manager/message/contract',
                                name: 'contract',
                                component: contract,
                                meta: { title: '签约',menu: false},
                            },
                            {
                                path: '/more/companyManage/manager/message/edit',
                                name: 'edit',
                                component: edit,
                                meta: { title: '修改',menu: false},
                            }
                        ]
                    },
                ]
            },
            {
              path: '/more/B2BPay/payDetails',
              name: 'B2BPay',
              component: recom,
              meta: { title: 'B2B网关支付',},
              children: [
                          {
                      path: '/more/B2BPay/payDetails',
                      name: 'payDetail',
                      component: payDetail,
                      meta: { title: '支付明细查询',},
                  },
                          {
                      path: '/more/B2BPay/openPayManage',
                      name: 'openPayManage',
                      component: recom,
                      meta: { title: '网上支付开通/管理',},
                      children:[
                        {
                            path: '/more/B2BPay/openPayManage',
                            name: 'openPayManage',
                            component: openPayManage,
                            meta: { title: '网上支付开通/管理',menu: false},
                        },
                        {
                            path: '/more/B2BPay/openPayManage/openPay',
                            name: 'openPay',
                            component: recom,
                            meta: { title: '网上支付开通',menu: false},
                            children: [
                                    {
                                path: '/more/B2BPay/openPayManage/openPay',
                                name: 'openPay',
                                component: openPay,
                                meta: { title: '网上支付开通',menu: false},

                                },
                                {
                                    path: '/more/B2BPay/openPayManage/openResult',
                                    name: 'openResult',
                                    component: openResult,
                                    meta: { title: '结果',menu: false},
                                },
                            ]
                        },

                        {
                            path: '/more/B2BPay/openPayManage/openManage',
                            name: 'openManage',
                            component: openManage,
                            meta: { title: '网上支付管理',menu: false},
                        },

                    ]
                  },
              ]
            },
            {
                path: '/more/trade',
                name: 'trade',
                component: recom,
                meta: { title: '交易管理',},
                children:[
                    {
                        path: '/more/trade/select/tradeSelect',
                        name: 'tradeSelect',
                        component: recom,
                        meta: { title: '交易查询',},
                        children:[
                            {
                                path: '/more/trade/select/tradeSelect',
                                name: 'tradeSelect',
                                component: tradeSelect,
                                meta: { title: '交易查询',menu: false},
                            },
                            {
                                path: '/more/trade/select/tradeSelect/selectDetail',
                                name: 'selectDetail',
                                component: selectDetail,
                                meta: { title: '交易详情',menu: false},
                            }
                        ]
                    },
                    {
                        path: '/more/trade/approval',
                        redirect: "/more/trade/approval/rest/not",
                        name: 'approval',
                        component: recom,
                        meta: { title: '审批中心',},
                        children:[
                            {
                                path: '/more/trade/approval/rest',
                                redirect: "/more/trade/approval/rest/not",
                                name: 'rest',
                                component: rest,
                                meta: { title: '待他人审批',},
                                children:[
                                    {
                                        path: '/more/trade/approval/rest/not',
                                        name: 'notApproval',
                                        component: recom,
                                        meta: { title: '未审批',menu: false},
                                        children:[
                                            {
                                                path: '/more/trade/approval/rest/not',
                                                name: 'notApproval',
                                                component: notApproval,
                                                meta: { title: '未审批',menu: false},
                                            },
                                            {
                                                path: '/more/trade/approval/rest/not/notDetail',
                                                name: 'notDetail',
                                                component: notDetail,
                                                meta: { title: '交易详情',menu: false},
                                            },
                                        ]
                                    },
                                    {
                                        path: '/more/trade/approval/rest/finish',
                                        name: 'finish',
                                        component: recom,
                                        meta: { title: '已结束',menu: false},
                                        children:[
                                            {
                                                path: '/more/trade/approval/rest/finish',
                                                name: 'finish',
                                                component: finish,
                                                meta: { title: '已结束',menu: false},
                                            },
                                            {
                                                path: '/more/trade/approval/rest/finish/finishDetail',
                                                name: 'finishDetail',
                                                component: finishDetail,
                                                meta: { title: '交易详情',menu: false},
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                path: '/more/trade/approval/waitForMe',
                                redirect: "/more/trade/approval/waitForMe/notStart",
                                name: 'waitForMe',
                                component: waitForMe,
                                meta: { title: '待我审批',},
                                children:[
                                    {
                                        path: '/more/trade/approval/waitForMe/notStart',
                                        name: 'notStart',
                                        component: recom,
                                        meta: { title: '未审批',menu: false},
                                        children:[
                                            {
                                                path: '/more/trade/approval/waitForMe/notStart',
                                                name: 'notStart',
                                                component: notStart,
                                                meta: { title: '未审批',menu: false},
                                            },
                                            {
                                                path: '/more/trade/approval/waitForMe/notStart/notStartDet',
                                                name: 'notStartDet',
                                                component: notStartDet,
                                                meta: { title: '交易详情',menu: false},
                                            },
                                        ]
                                    },
                                    {
                                        path: '/more/trade/approval/waitForMe/end',
                                        name: 'end',
                                        component: recom,
                                        meta: { title: '已结束',menu: false},
                                        children:[
                                            {
                                                path: '/more/trade/approval/waitForMe/end',
                                                name: 'end',
                                                component: end,
                                                meta: { title: '已结束',menu: false},
                                            },
                                            {
                                                path: '/more/trade/approval/waitForMe/end/endDet',
                                                name: 'endDet',
                                                component: endDet,
                                                meta: { title: '交易详情',menu: false},
                                            }
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                path: '/more/bankload',
                name: 'bankload',
                component: recom,
                meta: { title: '银企直联',},
                children:[
                    {
                        path: '/more/bankload/loadcore',
                        name: 'loadcore',
                        component: loadcore,
                        meta: { title: '下载中心',},
                    },
                    {
                        path: '/more/bankload/credentials',
                        name: 'credentials',
                        component: credentials,
                        meta: { title: '证书管理',},
                    },
                ]
            },
        ]
    }
]
export default more;

*/