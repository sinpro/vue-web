export default [
    { //财富总览
        path: '/accountManagement/assetOverview',
        name:'assetOverview',
        component: () => import('views/accountManagement/assetOverview/assetOverview.vue'),
        meta: {
          title: '财富总览',
        }
    },
    { //账户查询
        path: '/accountManagement/accountQuery',
        name:'accountQuery',
        component: () => import('views/accountManagement/accountQuery/accountQuery.vue'),
        meta: {
          title: '账户查询',
        }
    },
    { //添加账户
        path: '/accountManagement/addAccount',
        name:'addAccount',
        component: () => import('views/accountManagement/addAccount/addAccount.vue'),
        meta: {
          title: '添加账户',
        }
    },
    { //银企对账-余额对账
        path: '/accountManagement/balanceCheck',
        name:'balanceCheck',
        component: () => import('views/accountManagement/bankCompanyAccountChecking/balanceChecking/balanceChecking.vue'),
        meta: {
          title: '余额对账',
        }
    },

    { //电子回单-电子回单查询/打印
        path: '/accountManagement/electricBillQuery',
        name:'balanceCheck',
        component: () => import('views/accountManagement/electricBill/electricBillQuery.vue'),
        meta: {
          title: '电子回单查询/打印',
        }
    },
    { //电子回单-电子回单验证
        path: '/accountManagement/electricBillCheck',
        name:'balanceCheck',
        component: () => import('views/accountManagement/electricBill/electricBillCheck.vue'),
        meta: {
          title: '电子回单验证',
        }
    },
]
/*
const assetOverview = resolve => require(['views/accountManagement/assetOverview/assetOverview.vue'], resolve);//财富总览
const accountQuery = resolve => require(['views/accountManagement/accountQuery/accountQuery.vue'], resolve);//账户查询
const acQryBasicInfoOwn = resolve => require(['views/accountManagement/accountQuery/acQryBasicInfoOwn.vue'], resolve);//他行账户基本信息(详情)
const acQryBasicInfoOther = resolve => require(['views/accountManagement/accountQuery/acQryBasicInfoOther.vue'], resolve);//他行账户基本信息(详情)



const acQryDetailOwn = resolve => require(['views/accountManagement/accountQuery/acQryDetailOwn.vue'], resolve);//本行账户明细查询
const acQryDetailOther = resolve => require(['views/accountManagement/accountQuery/acQryDetailOther.vue'], resolve);//他行账户明细查询
const addAccount = resolve => require(['views/accountManagement/addAccount/addAccount.vue'], resolve);//添加账户
const balanceChecking = resolve => require(['views/accountManagement/bankCompanyAccountChecking/balanceChecking/balanceChecking.vue'], resolve);//余额对账
const balanceCheckDetail = resolve => require(['views/accountManagement/bankCompanyAccountChecking/balanceChecking/balanceCheckDetail.vue'], resolve);//余额对账明细
const electricBillQuery = resolve => require(['views/accountManagement/electricBill/electricBillQuery.vue'], resolve);//电子回单查询/打印
const electricBillCheck = resolve => require(['views/accountManagement/electricBill/electricBillCheck.vue'], resolve);//电子回单验证


const AgreementSign = resolve => require(['views/accountManagement/EbankInterconnection/AgreementSign.vue'], resolve);//授权支付协议签约
const signResult = resolve => require(['views/accountManagement/EbankInterconnection/signResult.vue'], resolve);//授权支付协议签约
export default [
    {
        path: '/accountManagement/assetOverview',
        name: 'accountManagement',
        meta: { title: '账户管理',},
        children: [
          {
            path: '/accountManagement/assetOverview',
            name: 'assetOverview',
            component: assetOverview,
            meta: { title: '财富总览',},
          },
    
          {
            path: '/accountManagement/accountQuery',
            
            name:'accountQuery',
            meta: { title: '账户查询', },
            children: [
              {
                path: '/accountManagement/accountQuery',
                name: 'accountQuery',
                component: accountQuery,
                meta: { title: '账户查询', menu: false },
              },
              {
                path: '/accountManagement/accountQuery/acQryBasicInfoOwn',
                name: 'acQryBasicInfoOwn',
                component: acQryBasicInfoOwn,
                meta: { title: '本行账户详情', menu: false },
              },
              {
                path: '/accountManagement/accountQuery/acQryBasicInfoOther',
                name: 'acQryBasicInfoOther',
                component: acQryBasicInfoOther,
                meta: { title: '他行账户详情', menu: false },
              },
              {
                path: '/accountManagement/accountQuery/acQryDetailOwn',
                name: 'acQryDetailOwn',
                component: acQryDetailOwn,
                meta: { title: '本行账户明细查询', menu: false },
              },
              {
                path: '/accountManagement/accountQuery/acQryDetailOther',
                name: 'acQryDetailOther',
                component: acQryDetailOther,
                meta: { title: '他行账户明细查询', menu: false },
              },
            ]
          },
          {
            path: '/accountManagement/addAccount',
            name: 'addAccount',
            component: addAccount,
            meta: { title: '添加账户', },
          },
          {
            path: '/accountManagement/balanceCheck',
            name: 'balanceCheck',
            
            meta: { title: '银企对账', },
            children: [
              {
                path: '/accountManagement/balanceCheck',
                name: 'balanceChecking',
                
                meta: { title: '余额对账' },
                children: [
                  {
                    path: '/accountManagement/balanceCheck',
                    name: 'balanceChecking',
                    component: balanceChecking,
                    meta: { title: '余额对账' ,menu: false},
                  },
                      {
                    path: '/accountManagement/balanceCheck/balanceCheckDetail',
                    name: 'balanceCheckDetail',
                    component: balanceCheckDetail,
                    meta: { title: '交易明细', menu: false },
                  },
                ]
              },
              
            ]
          },
          {
            path: '/accountManagement/electricBill/electricBillQuery',
            name: 'electricBill',
            meta: { title: '电子回单' },
            children: [
              {
                path: '/accountManagement/electricBill/electricBillQuery',
                name: 'electricBillQuery',
                component: electricBillQuery,
                meta: { title: '电子回单查询/打印',},
              },
              {
                path: '/accountManagement/electricBill/electricBillCheck',
                name: 'electricBillCheck',
                component: electricBillCheck,
                meta: { title: '电子回单验证',},
              },
    
            ]
          },
    
        ],
      },
      // {
      //   path: '/AgreementSign', 
      //   name: 'AgreementSign', 
      //    
      //   meta: {title: '网银互联交易认证',sideActiveMenu:'',activeMenu:''}, 
      //   children:[
      //     {
      //       path: '/AgreementSign', 
      //       name: 'AgreementSign', 
      //       component: AgreementSign, 
      //       meta: {title: '授权支付协议签约',menu:false,sideActiveMenu:'',activeMenu:''}, 
      //     },
      //     {
      //       path: '/AgreementSign', 
      //       name: 'AgreementSign', 
      //        
      //       meta: {title: '授权支付协议签约',sideActiveMenu:'',activeMenu:''}, 
      //       children:[
      //         {
      //           path: '/AgreementSign/signResult', 
      //           name: 'signResult', 
      //           component: signResult, 
      //           meta: {title: '结果',sideActiveMenu:'',activeMenu:''}, 
      //         },
      //       ]
      //     },
      //   ]
      // },
]
*/