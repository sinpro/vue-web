const recom = {
  template: `<router-view></router-view>`
}
export default [
  { //贷款业务-贷款查询
    path: '/financingLoan/loanBussiness/loanInquiry',
    name: 'loanInquiry',
    component: recom,
    meta: { title: '贷款查询' },
    redirect: "/financingLoan/loanBussiness/loanInquiry",
    children: [
      {
        path: '/financingLoan/loanBussiness/loanInquiry',
        name: 'loanInquiry',
        component: recom,
        meta: { title: '贷款合同查询' },
        children: [
          {
            path: '/financingLoan/loanBussiness/loanInquiry',
            name: 'loanInquiry',
            component: () => import('views/financingLoan/loanBussiness/loanInquiry.vue'),
            meta: { title: '贷款合同查询' },
          },
          {
            path: '/financingLoan/loanBussiness/IouInquiry',
            name: 'IouInquiry',
            component: () => import('views/financingLoan/loanBussiness/IouInquiry.vue'),
            meta: { title: '借据' },
          }
        ]
      },
      {

        path: '/financingLoan/loanBussiness/loanInquiryApply',
        name: 'loanInquiryApply',
        component: () => import('views/financingLoan/loanBussiness/loanInquiryApply.vue'),
        meta: { title: '申请进度查询' },
      }
    ]
  },
  { //贷款业务-贷款申请
    path: '/financingLoan/loanBussiness/loanApplication',
    name: 'loanApplication',
    component: recom,
    meta: { title: '贷款申请' },
    children: [
      {
        path: '/financingLoan/loanBussiness/loanApplication',
        name: 'loanApplication',
        component: () => import('views/financingLoan/loanBussiness/loanApplication.vue'),
        meta: { title: '贷款申请' },
      },
      {
        path: '/financingLoan/loanBussiness/myApplication',
        name: 'myApplication',
        component: recom,
        meta: { title: '申请' },
        children: [
          {
            path: '/financingLoan/loanBussiness/myApplication',
            name: 'myApplication',
            component: () => import('views/financingLoan/loanBussiness/myApplication.vue'),
            meta: { title: '申请' },
          },
          {
            path: '/financingLoan/loanBussiness/myApplicationResult',
            name: 'myApplicationResult',
            component: () => import('views/financingLoan/loanBussiness/myApplicationResult.vue'),
            meta: { title: '结果' },
          },

        ]
      }

    ]
  },
  {//贷款业务-贷款放款
    path: '/financingLoan/loanBussiness/loansAndloans',
    name: 'loansAndloans',
    component: recom,
    meta: { title: '贷款放款' },
    children: [
      {
        path: '/financingLoan/loanBussiness/loansAndloans',
        name: 'loansAndloans',
        component: () => import('views/financingLoan/loanBussiness/loansAndloans.vue'),
        meta: { title: '贷款放款' },

      },
      {
        path: '/financingLoan/loanBussiness/entrustedPayment',
        name: 'entrustedPayment',
        component: recom,
        meta: { title: '受托支付' },
        children: [
          {
            path: '/financingLoan/loanBussiness/entrustedPayment',
            name: 'entrustedPayment',
            component: () => import('views/financingLoan/loanBussiness/entrustedPayment.vue'),
            meta: { title: '受托支付' },

          },
          {
            path: '/financingLoan/loanBussiness/entrustedPaymentEntry',
            name: 'entrustedPaymentEntry',
            component: () => import('views/financingLoan/loanBussiness/entrustedPaymentEntry.vue'),
            meta: { title: '受托支付录入' },

          },
          {
            path: '/financingLoan/loanBussiness/entrustedPaymentResult',
            name: 'entrustedPaymentResult',
            component: () => import('views/financingLoan/loanBussiness/entrustedPaymentResult.vue'),
            meta: { title: '结果' },

          },

          {
            path: '/financingLoan/loanBussiness/delegationRecordQuery',
            name: 'delegationRecordQuery',
            component: recom,
            meta: { title: '受托记录查询' },
            children: [
              {
                path: '/financingLoan/loanBussiness/delegationRecordQuery',
                name: 'delegationRecordQuery',
                component: () => import('views/financingLoan/loanBussiness/delegationRecordQuery.vue'),
                meta: { title: '受托记录查询' },
              },
              {
                path: '/financingLoan/loanBussiness/delegationRecordQueryDetails',
                name: 'delegationRecordQueryDetails',
                component: () => import('views/financingLoan/loanBussiness/delegationRecordQueryDetails.vue'),
                meta: { title: '交易详情' },
              },
            ]
          },
        ]

      },
      {
        path: '/financingLoan/loanBussiness/loanDetails',
        name: 'loanDetails',
        component: recom,
        meta: { title: '放款详情' },
        children: [
          {
            path: '/financingLoan/loanBussiness/loanDetails',
            name: 'loanDetails',
            component: () => import('views/financingLoan/loanBussiness/loanDetails.vue'),
            meta: { title: '放款详情' },
          },
          {
            path: '/financingLoan/loanBussiness/loanDetailsModify',
            name: 'loanDetailsModify',
            component: () => import('views/financingLoan/loanBussiness/loanDetailsModify.vue'),
            meta: { title: '修改' },
          }
        ]
      },
      {
        path: '/financingLoan/loanBussiness/loanDrawing',
        name: 'loanDrawing',
        component: recom,
        meta: { title: '贷款支用' },
        children: [
          {
            path: '/financingLoan/loanBussiness/loanDrawing',
            name: 'loanDrawing',
            component: () => import('views/financingLoan/loanBussiness/loanDrawing.vue'),
            meta: { title: '贷款支用' },
          },
          {
            path: '/financingLoan/loanBussiness/loanDrawingResult',
            name: 'loanDrawingResult',
            component: () => import('views/financingLoan/loanBussiness/loanDrawingResult.vue'),
            meta: { title: '结果' },
          },
        ]
      },
    ]
  },
  {//贷款业务-贷款归还
    path: '/financingLoan/loanBussiness/loanRepayment',
    name: 'loanRepayment',
    component: recom,
    meta: { title: '贷款归还' },
    children: [
      {
        path: '/financingLoan/loanBussiness/loanRepayment',
        name: 'loanRepayment',
        component: recom,
        meta: { title: '还款进度查询' },
        children: [
          {
            path: '/financingLoan/loanBussiness/loanRepayment',
            name: 'loanRepayment',
            component: () => import('views/financingLoan/loanBussiness/loanRepayment.vue'),
            meta: { title: '还款进度查询' },
          },
          {
            path: '/financingLoan/loanBussiness/loanRepaymentDetails',
            name: 'loanRepaymentDetails',
            component: () => import('views/financingLoan/loanBussiness/loanRepaymentDetails.vue'),
            meta: { title: '详情' },
          },
        ]
      },
      {
        path: '/financingLoan/loanBussiness/loanPayment',
        name: 'loanPayment',
        component: recom,
        meta: { title: '贷款还款' },
        children: [
          {
            path: '/financingLoan/loanBussiness/loanPayment',
            name: 'loanPayment',
            component: () => import('views/financingLoan/loanBussiness/loanPayment.vue'),
            meta: { title: '贷款还款' },
          },
          {
            path: '/financingLoan/loanBussiness/repaymentDetails',
            name: 'repaymentDetails',
            component: recom,
            meta: { title: '还款' },
            children: [
              {
                path: '/financingLoan/loanBussiness/repaymentDetails',
                name: 'repaymentDetails',
                component: () => import('views/financingLoan/loanBussiness/repaymentDetails.vue'),
                meta: { title: '还款' },
              },
              {
                path: '/financingLoan/loanBussiness/repaymentResult',
                name: 'repaymentResult',
                component: () => import('views/financingLoan/loanBussiness/repaymentResult.vue'),
                meta: { title: '结果' },
              },
            ]
          },
        ]
      }
    ]
  },
  {//贷款业务-贷款计算器
    path: '/financingLoan/loanBussiness/lendersToolBox',
    name: 'lendersToolBox',
    component: () => import('views/financingLoan/loanBussiness/lendersToolBox.vue'),
    meta: { title: '贷款计算器' },
  },
  {//包涵业务-保函业务申请
    path: '/financingLoan/letterOfGuarantteeBusiness/guarantteeApplication',
    name: 'guarantteeApplication',
    component: () => import('views/financingLoan/letterOfGuarantteeBusiness/guarantteeApplication.vue'),
    meta: { title: '保函业务申请' },
  },
  {//包涵业务-申请进度查询
    path: '/financingLoan/letterOfGuarantteeBusiness/applicationProgress',
    name: 'applicationProgress',
    component: () => import('views/financingLoan/letterOfGuarantteeBusiness/applicationProgress.vue'),
    meta: { title: '申请进度查询' },
  },
  {//包涵业务-保函业务查询
    path: '/financingLoan/letterOfGuarantteeBusiness/guarantteeInquiry',
    name: 'guarantteeInquiry',
    component: () => import('views/financingLoan/letterOfGuarantteeBusiness/guarantteeInquiry.vue'),
    meta: { title: '保函业务查询' },
  },
  {//保理业务
    path: '/financingLoan/factoringBusiness/factoringBusiness',
    name: 'factoringBusiness',
    component: () => import('views/financingLoan/factoringBusiness/factoringBusiness.vue'),
    meta: { title: '保理业务' }
  }
]