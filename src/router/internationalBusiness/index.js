const foreignExchangeRemittanceApp =() => import('views/internationalBusiness/foreignExchangeRemittance/foreignExchangeRemittanceApp.vue');
export default [
    { //外汇汇款-外汇汇款申请
        path: '/internationalBusiness/foreignExchangeRemittance/foreignExchangeRemittanceApp',
        name:'foreignExchangeRemittanceApp',
        component: () => import('views/internationalBusiness/foreignExchangeRemittance/foreignExchangeRemittanceApp.vue'),
        meta: {
          title: '外汇汇款申请',
        }
    },
    { //外汇牌价查询
        path: '/internationalBusiness/forexListPrice/forexListPrice',
        name:'forexListPrice',
        component: () => import('views/internationalBusiness/forexListPrice/forexListPrice.vue'),
        meta: {
          title: '外汇牌价查询',
        }
    },
    { //汇入汇款确认
        path: '/internationalBusiness/remittanceConfirm/remittanceConfirm',
        name:'remittanceConfirm',
        component: () => import('views/internationalBusiness/remittanceConfirm/remittanceConfirm.vue'),
        meta: {
          title: '汇入汇款确认',
        }
    },
    { //结售汇-结汇
        path: '/internationalBusiness/writtenGuarantee/foreignExchangeSettlement',
        name:'foreignExchangeSettlement',
        component: () => import('views//internationalBusiness/writtenGuarantee/foreignExchangeSettlement.vue'),
        meta: {
          title: '结汇',
        }
    },
    { //结售汇-购汇
        path: '/internationalBusiness/writtenGuarantee/foreignExchangePurchase',
        name:'foreignExchangePurchase',
        component: () => import('views/internationalBusiness/writtenGuarantee/foreignExchangePurchase.vue'),
        meta: {
          title: '购汇',
        }
    },
    { //国际信用证-信用证开证
        path: '/internationalBusiness/internationalLC/openInternationalLC',
        name:'openInternationalLC',
        component: foreignExchangeRemittanceApp,
        meta: {
          title: '信用证开证',
        }
    },
    { //国际信用证-信用证改证
        path: '/internationalBusiness/internationalLC/updateInternationalLC',
        name:'updateInternationalLC',
        component: foreignExchangeRemittanceApp,
        meta: {
          title: '信用证改证',
        }
    },
    { //国际信用证-承兑/付款/拒付
        path: '/internationalBusiness/internationalLC/acceptancePaymentDishonor',
        name:'acceptancePaymentDishonor',
        component: foreignExchangeRemittanceApp,
        meta: {
          title: '承兑/付款/拒付',
        }
    },
    { //保证金缴纳
        path: '/internationalBusiness/deposit',
        name:'deposit',
        component: foreignExchangeRemittanceApp,
        meta: {
          title: '保证金缴纳',
        }
    },
    { //查询
        path: '/internationalBusiness/query',
        name:'query',
        component: () => import('views/internationalBusiness/query.vue'),
        meta: {
          title: '查询',
        }
    }
]
/*
const recom = {
    template: `<router-view></router-view>`
}
import Layout from '../../views/layout/layout';
//外汇汇款申请
const foreignExchangeRemittanceApp = resolve => require(['@src/views/internationalBusiness/foreignExchangeRemittance/foreignExchangeRemittanceApp.vue'], resolve);
//汇入汇款确认
const remittanceConfirm = resolve => require(['@src/views/internationalBusiness/remittanceConfirm/remittanceConfirm.vue'], resolve);
//确认
const confirm = resolve => require(['@src/views/internationalBusiness/remittanceConfirm/confirm.vue'], resolve);
//外汇牌价查询
const forexListPrice = resolve => require(['@src/views/internationalBusiness/forexListPrice/forexListPrice.vue'], resolve);
//币种历史牌价曲线图
const forexListPriceGragh = resolve => require(['@src/views/internationalBusiness/forexListPrice/forexListPriceGragh.vue'], resolve);
//结售汇-结汇
const foreignExchangeSettlement = resolve => require(['@src/views/internationalBusiness/writtenGuarantee/foreignExchangeSettlement.vue'], resolve);
//结售汇-购汇
const foreignExchangePurchase = resolve => require(['@src/views/internationalBusiness/writtenGuarantee/foreignExchangePurchase.vue'], resolve);
//结售汇-查询
const query = resolve => require(['@src/views/internationalBusiness/query.vue'], resolve);

const internationalBusiness = [
    {
        path: '/internationalBusiness/foreignExchangeRemittance/foreignExchangeRemittanceApp',
        name: 'internationalBusiness',
        component: Layout,
        meta: { title: '国际业务' },
        children: [
            {
                path: '/internationalBusiness/foreignExchangeRemittance/foreignExchangeRemittanceApp',
                name: 'foreignExchangeRemittance',
                component: recom,
                meta: { title: '外汇汇款' },
                children: [{
                    path: '/internationalBusiness/foreignExchangeRemittance/foreignExchangeRemittanceApp',
                    name: 'foreignExchangeRemittanceApp',
                    component: foreignExchangeRemittanceApp,
                    meta: { title: '外汇汇款申请' },
                }, 
             ]
            },
            {
                path: '/internationalBusiness/forexListPrice',
                redirect: "/internationalBusiness/forexListPrice/forexListPrice",
                name: 'forexListPrice',
                component: recom,
                meta: { title: '外汇牌价查询 ' },
                children: [
                    {
                        path: '/internationalBusiness/forexListPrice/forexListPrice',
                        name: 'forexListPrice',
                        component: forexListPrice,
                        meta: { title: '外汇牌价查询 ' ,menu: false},
                    },
                    {
                        path: '/internationalBusiness/forexListPrice/forexListPrice/forexListPriceGragh',
                        name: 'confirm',
                        component: forexListPriceGragh,
                        meta: { title: '币种历史牌价曲线图', menu: false},
                    },
                ]
            },
            {
                path: '/internationalBusiness/remittanceConfirm',
                redirect: "/internationalBusiness/remittanceConfirm/remittanceConfirm",
                name: 'remittanceConfirm',
                component: recom,
                meta: { title: '汇入汇款确认' },
                children: [
                    {
                        path: '/internationalBusiness/remittanceConfirm/remittanceConfirm',
                        name: 'remittanceConfirm',
                        component: remittanceConfirm,
                        meta: { title: '汇入汇款确认' ,menu: false},
                    },
                    {
                        path: '/internationalBusiness/remittanceConfirm/remittanceConfirm/confirm',
                        name: 'confirm',
                        component: confirm,
                        meta: { title: '确认', menu: false},
                    },
                ]
            },

            {
                path: '/internationalBusiness/writtenGuarantee/foreignExchangeSettlement',
                name: 'writtenGuarantee',
                component: recom,
                meta: { title: '结售汇' },
                children: [{
                    path: '/internationalBusiness/writtenGuarantee/foreignExchangeSettlement',
                    name: 'foreignExchangeSettlement',
                    component: foreignExchangeSettlement,
                    meta: { title: '结汇' },
                }, {
                    path: '/internationalBusiness/writtenGuarantee/foreignExchangePurchase',
                    name: 'foreignExchangePurchase',
                    component: foreignExchangePurchase,
                    meta: { title: '购汇' },
                }]
            },
            {
                path: '/internationalBusiness/internationalLC/openInternationalLC',
                name: 'internationalLC',
                component: recom,
                meta: { title: '国际信用证' },
                children: [{
                    path: '/internationalBusiness/internationalLC/openInternationalLC',
                    name: 'openInternationalLC',
                    component: foreignExchangeRemittanceApp,
                    meta: { title: '信用证开证' },
                }, {
                    path: '/internationalBusiness/internationalLC/updateInternationalLC',
                    name: 'updateInternationalLC',
                    component: foreignExchangeRemittanceApp,
                    meta: { title: '信用证改证' },
                }, {
                    path: '/internationalBusiness/internationalLC/AcceptancePaymentDishonor',
                    name: 'AcceptancePaymentDishonor',
                    component: foreignExchangeRemittanceApp,
                    meta: { title: '承兑/付款/拒付' },
                }]
            },
            {
                path: '/internationalBusiness/deposit',
                name: 'deposit',
                component: foreignExchangeRemittanceApp,
                meta: { title: '保证金缴纳' },
            },
            {
                path: '/internationalBusiness/query',
                name: 'query',
                component: query,
                meta: { title: '查询' },
            },

        ]
    },

]

export default internationalBusiness;
 
 */