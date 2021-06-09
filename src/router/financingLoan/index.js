export default []

/*
const recom = {
  template: `<router-view></router-view>`
}
import Layout from '../../views/layout/layout';

const loanInquiry = resolve => require(['@src/views/financeBussiness/loanBussiness/loanInquiry.vue'],resolve);//贷款业务
const loanInquiryApply = resolve => require(['@src/views/financeBussiness/loanBussiness/loanInquiryApply.vue'],resolve);//贷款申请进度查询

const IouInquiry = resolve => require(['@src/views/financeBussiness/loanBussiness/IouInquiry.vue'],resolve);//借据查询


const loanApplication = resolve => require(['@src/views/financeBussiness/loanBussiness/loanApplication.vue'],resolve);//贷款申请
const myApplication = resolve => require(['@src/views/financeBussiness/loanBussiness/myApplication.vue'],resolve);//申请
const myApplicationResult = resolve => require(['@src/views/financeBussiness/loanBussiness/myApplicationResult.vue'],resolve);//申请结果


const loansAndloans = resolve => require(['@src/views/financeBussiness/loanBussiness/loansAndloans.vue'],resolve);//贷款放款
const loanDetails = resolve => require(['@src/views/financeBussiness/loanBussiness/loanDetails.vue'],resolve);//贷款放款详情
const loanDetailsModify = resolve => require(['@src/views/financeBussiness/loanBussiness/loanDetailsModify.vue'],resolve);//贷款放款详情
const entrustedPayment = resolve => require(['@src/views/financeBussiness/loanBussiness/entrustedPayment.vue'],resolve);//委托支付
const entrustedPaymentEntry = resolve => require(['@src/views/financeBussiness/loanBussiness/entrustedPaymentEntry.vue'],resolve);//委托支付录入
const entrustedPaymentResult = resolve => require(['@src/views/financeBussiness/loanBussiness/entrustedPaymentResult.vue'],resolve);//委托支付录入结果


const delegationRecordQuery = resolve => require(['@src/views/financeBussiness/loanBussiness/delegationRecordQuery.vue'],resolve);//受托记录查询
const delegationRecordQueryDetails = resolve => require(['@src/views/financeBussiness/loanBussiness/delegationRecordQueryDetails.vue'],resolve);//受托详情






const loanDrawing = resolve => require(['@src/views/financeBussiness/loanBussiness/loanDrawing.vue'],resolve);//贷款支用
const loanDrawingResult = resolve => require(['@src/views/financeBussiness/loanBussiness/loanDrawingResult.vue'],resolve);//贷款支用结果





const loanRepayment = resolve => require(['@src/views/financeBussiness/loanBussiness/loanRepayment.vue'],resolve);//贷款归还进度查询
const loanPayment = resolve => require(['@src/views/financeBussiness/loanBussiness/loanPayment.vue'],resolve);//贷款还款
const loanRepaymentDetails = resolve => require(['@src/views/financeBussiness/loanBussiness/loanRepaymentDetails.vue'],resolve);//贷款归还详情
const repaymentDetails = resolve => require(['@src/views/financeBussiness/loanBussiness/repaymentDetails.vue'],resolve);//还款详情
const repaymentResult = resolve => require(['@src/views/financeBussiness/loanBussiness/repaymentResult.vue'],resolve);//提交还款结果






const lendersToolBox = resolve => require(['@src/views/financeBussiness/loanBussiness/lendersToolBox.vue'],resolve);//贷款计算器
const guarantteeApplication = resolve => require(['@src/views/financeBussiness/letterOfGuarantteeBusiness/guarantteeApplication.vue'],resolve);//保函业务申请
const applicationProgress = resolve => require(['@src/views/financeBussiness/letterOfGuarantteeBusiness/applicationProgress.vue'],resolve);//申请进度查询
const guarantteeInquiry = resolve => require(['@src/views/financeBussiness/letterOfGuarantteeBusiness/guarantteeInquiry.vue'],resolve);//保函业务查询
const factoringBusiness = resolve => require(['@src/views/financeBussiness/factoringBusiness/factoringBusiness.vue'],resolve);//保理业务





const financeBussiness = [
  {
      path: '/financeBussiness/loanBussiness/loanInquiry',
      name: 'financeBussiness',
      component: Layout,
      meta: { title: '融资贷款' }, 
      children: [
          {
              path: '/financeBussiness/loanBussiness/loanInquiry',
              name: 'loanBussiness',
              component: recom,
              meta: { title: '贷款业务' },
              children: [
                {
                  path: '/financeBussiness/loanBussiness/loanInquiry',
                  name: 'loanInquiry',
                  component: recom,
                  meta: { title: '贷款查询' }, 
                  redirect: "/financeBussiness/loanBussiness/loanInquiry",
                  children:[
                    {
                      path: '/financeBussiness/loanBussiness/loanInquiry',
                      name: 'loanInquiry',
                      component: recom,
                      meta: { title: '贷款合同查询', menu: false },
                      children:[
                        {
                          path: '/financeBussiness/loanBussiness/loanInquiry',
                          name: 'loanInquiry',
                          component: loanInquiry,
                          meta: { title: '贷款合同查询', menu: false },
                        },
                        {
                          path: '/financeBussiness/loanBussiness/IouInquiry',
                          name: 'IouInquiry',
                          component: IouInquiry,
                          meta: { title: '借据', menu: false },
                        }
                      ]
                    },
                    {
                      
                      path: '/financeBussiness/loanBussiness/loanInquiryApply',
                      name: 'loanInquiryApply',
                      component: loanInquiryApply,
                      meta: { title: '申请进度查询', menu: false },
                    }
                  ]
                },
                {
                  path: '/financeBussiness/loanBussiness/loanApplication',
                  name: 'loanApplication',
                  component: recom,
                  meta: { title: '贷款申请' },
                  children:[
                    {
                      path: '/financeBussiness/loanBussiness/loanApplication',
                      name: 'loanApplication',
                      component: loanApplication,
                      meta: { title: '贷款申请',menu: false},
                    },
                    {
                      path: '/financeBussiness/loanBussiness/myApplication',
                      name: 'myApplication',
                      component: recom,
                      meta: { title: '申请',menu: false},
                      children:[
                        {
                          path: '/financeBussiness/loanBussiness/myApplication',
                          name: 'myApplication',
                          component: myApplication,
                          meta: { title: '申请',menu: false},
                        },
                        {
                          path: '/financeBussiness/loanBussiness/myApplicationResult',
                          name: 'myApplicationResult',
                          component: myApplicationResult,
                          meta: { title: '结果',menu: false},
                        },

                      ]
                    }

                  ]
                },
                {
                  path: '/financeBussiness/loanBussiness/loansAndloans',
                  name: 'loansAndloans',
                  component: recom,
                  meta: { title: '贷款放款' },
                  children:[
                    {
                      path: '/financeBussiness/loanBussiness/loansAndloans',
                      name: 'loansAndloans',
                      component: loansAndloans,
                      meta: { title: '贷款放款',menu: false },
                     
                    },
                    {
                      path: '/financeBussiness/loanBussiness/entrustedPayment',
                      name: 'entrustedPayment',
                      component: recom,
                      meta: { title: '受托支付',menu: false },
                      children:[
                        {
                          path: '/financeBussiness/loanBussiness/entrustedPayment',
                          name: 'entrustedPayment',
                          component: entrustedPayment,
                          meta: { title: '受托支付',menu: false },
                         
                        },
                        {
                          path: '/financeBussiness/loanBussiness/entrustedPaymentEntry',
                          name: 'entrustedPaymentEntry',
                          component: entrustedPaymentEntry,
                          meta: { title: '受托支付录入',menu: false },
                         
                        },
                        {
                          path: '/financeBussiness/loanBussiness/entrustedPaymentResult',
                          name: 'entrustedPaymentResult',
                          component: entrustedPaymentResult,
                          meta: { title: '结果',menu: false },
                         
                        },
 
                        {
                          path: '/financeBussiness/loanBussiness/delegationRecordQuery',
                          name: 'delegationRecordQuery',
                          component: recom,
                          meta: { title: '受托记录查询',menu: false },
                          children:[
                            {
                              path: '/financeBussiness/loanBussiness/delegationRecordQuery',
                              name: 'delegationRecordQuery',
                              component: delegationRecordQuery,
                              meta: { title: '受托记录查询',menu: false },
                            },
                            {
                              path: '/financeBussiness/loanBussiness/delegationRecordQueryDetails',
                              name: 'delegationRecordQueryDetails',
                              component: delegationRecordQueryDetails,
                              meta: { title: '交易详情',menu: false },
                            },
                          ]
                        },
                      ]
                     
                    },
                    



                    
                    {
                      path: '/financeBussiness/loanBussiness/loanDetails',
                      name: 'loanDetails',
                      component: recom,
                      meta: { title: '放款详情', menu: false},
                      children:[
                        {
                          path: '/financeBussiness/loanBussiness/loanDetails',
                          name: 'loanDetails',
                          component: loanDetails,
                          meta: { title: '放款详情', menu: false},
                        },
                        {
                          path: '/financeBussiness/loanBussiness/loanDetailsModify',
                          name: 'loanDetailsModify',
                          component: loanDetailsModify,
                          meta: { title: '修改', menu: false},
                        }
                      ]
                    },
                    {
                      
                      path: '/financeBussiness/loanBussiness/loanDrawing',
                      name: 'loanDrawing',
                      component: recom,
                      meta: { title: '贷款支用', menu: false},
                      children:[
                        {
                      
                          path: '/financeBussiness/loanBussiness/loanDrawing',
                          name: 'loanDrawing',
                          component: loanDrawing,
                          meta: { title: '贷款支用', menu: false},
                        },
                        {
                      
                          path: '/financeBussiness/loanBussiness/loanDrawingResult',
                          name: 'loanDrawingResult',
                          component: loanDrawingResult,
                          meta: { title: '结果', menu: false},
                        },
                      ]
                    },
                    
                  ]
                },
                {
                  path: '/financeBussiness/loanBussiness/loanRepayment',
                  name: 'loanRepayment',
                  component: recom,
                  meta: { title: '贷款归还' },
                  children:[
                    {
                      path: '/financeBussiness/loanBussiness/loanRepayment',
                      name: 'loanRepayment',
                      component: recom,
                      meta: { title: '还款进度查询',menu: false },
                      children:[
                        {
                          path: '/financeBussiness/loanBussiness/loanRepayment',
                          name: 'loanRepayment',
                          component: loanRepayment,
                          meta: { title: '还款进度查询',menu: false },
                        },
                        {
                          path: '/financeBussiness/loanBussiness/loanRepaymentDetails',
                          name: 'loanRepaymentDetails',
                          component: loanRepaymentDetails,
                          meta: { title: '详情',menu: false },
                        },
                       
                        
                      ]
                      
                      
                    },
                    {
                      path: '/financeBussiness/loanBussiness/loanPayment',
                      name: 'loanPayment',
                      component: recom,
                      meta: { title: '贷款还款',menu: false },
                      children:[
                        {
                          path: '/financeBussiness/loanBussiness/loanPayment',
                          name: 'loanPayment',
                          component: loanPayment,
                          meta: { title: '贷款还款',menu: false },
                        },
                        {
                          path: '/financeBussiness/loanBussiness/repaymentDetails',
                          name: 'repaymentDetails',
                          component: recom,
                          meta: { title: '还款',menu: false },
                          children:[
                            {
                              path: '/financeBussiness/loanBussiness/repaymentDetails',
                              name: 'repaymentDetails',
                              component: repaymentDetails,
                              meta: { title: '还款',menu: false },
                            },
                            {
                              path: '/financeBussiness/loanBussiness/repaymentResult',
                              name: 'repaymentResult',
                              component: repaymentResult,
                              meta: { title: '结果',menu: false },
                            },
                          ]
                        },
                        
                      

                      ]
                    }
                  ]
                },
                {
                  path: '/financeBussiness/loanBussiness/lendersToolBox',
                  name: 'lendersToolBox',
                  component: lendersToolBox,
                  meta: { title: '贷款计算器' },
                }
              ]
          },
          {
            path: '/financeBussiness/letterOfGuarantteeBusiness/guarantteeApplication',
            name: 'letterOfGuarantteeBusiness',
            component: recom,
            meta: { title: '保函业务' },
            children:[
              {
                path: '/financeBussiness/letterOfGuarantteeBusiness/guarantteeApplication',
                name: 'guarantteeApplication',
                component: guarantteeApplication,
                meta: { title: '保函业务申请' },
              },
              {
                path: '/financeBussiness/letterOfGuarantteeBusiness/applicationProgress',
                name: 'applicationProgress',
                component: applicationProgress,
                meta: { title: '申请进度查询' },
              },
              {
                path: '/financeBussiness/letterOfGuarantteeBusiness/guarantteeInquiry',
                name: 'guarantteeInquiry',
                component: guarantteeInquiry,
                meta: { title: '保函业务查询' },
              }
            ]
          },
          {
            path: '/financeBussiness/factoringBusiness/factoringBusiness',
            name: 'factoringBusiness',
            component: factoringBusiness,
            meta: { title: '保理业务' }
          }
      ]
  },

]

export default financeBussiness;
*/