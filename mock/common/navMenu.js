export default [
  {id:'1',name:'首页',path:'/home',children:[]},
  {id:'2',name:'账户管理',path:'',children:[
    {id:'21',name:'财富总览',path:'/accountManagement/assetOverview',children:[]},
    {id:'22',name:'账户查询',path:'/accountManagement/accountQuery',children:[]},
    {id:'23',name:'添加账户',path:'/accountManagement/addAccount',children:[]},
    {id:'24',name:'银企对账',path:'',children:[
      {id:'241',name:'余额对账',path:'/accountManagement/balanceCheck',children:[]}
    ]},
    {id:'25',name:'电子回单',path:'/home',children:[
      {id:'251',name:'电子回单查询/打印',path:'/accountManagement/electricBillQuery',children:[]},
      {id:'252',name:'电子回单验证',path:'/accountManagement/electricBillCheck',children:[]},
    ]},
  ]},
  {id:'3',name:'转账汇款',path:'',children:[
    {id:'31',name:'单笔转账',path:'/paymentSettlement/oneStopTransfer',children:[]},
    {id:'32',name:'批量转账',path:'/paymentSettlement/batchTransfer',children:[]},
    {id:'33',name:'转账交易查询',path:'/paymentSettlement/transferQuery',children:[]},
    {id:'34',name:'联行号查询',path:'/paymentSettlement/associatedNumberQuery',children:[]},
    {id:'35',name:'常用收款人',path:'/paymentSettlement/payee',children:[]},
    {id:'36',name:'银企对账',path:'',children:[
      {id:'351',name:'余额对账',path:'/paymentSettlement/anInterBankCredit/collection',children:[]},
      {id:'352',name:'余额对账',path:'/paymentSettlement/anInterBankCredit/dealQuery',children:[]}
    ]},
  ]},
  {id:'4',name:'代发代收',path:'',children:[
    {id:'41',name:'代发业务',path:'',children:[
      {id:'411',name:'代发',path:'/issueAndReceive/replaceIssueWork/replaceIssue',children:[]},
      {id:'412',name:'代发交易查询',path:'/issueAndReceive/replaceIssueWork/replaceIssueQuery',children:[]}]
    },
    {id:'42',name:'电子工资单',path:'',children:[
      {id:'421',name:'发布电子工资单',path:'/issueAndReceive/electronicPayroll/replaceElectronicPayroll',children:[]},
      {id:'422',name:'发布记录查询',path:'/issueAndReceive/electronicPayroll/replaceRecordQuery',children:[]}]
    },
    {id:'43',name:'代收业务',path:'',children:[
      {id:'431',name:'代收',path:'/issueAndReceive/replaceReceiveWork/replaceReceive',children:[]},
      {id:'432',name:'代收交易查询',path:'/issueAndReceive/replaceReceiveWork/replaceReceiveQuer',children:[]},
      {id:'433',name:'收费',path:'/issueAndReceive/replaceReceiveWork/toll',children:[]}]
    },
  ]},
  {id:'5',name:'投资理财',path:'',children:[
    {id:'51',name:'理财产品',path:'',children:[
      {id:'511',name:'理财超市',path:'/investmentFinancing/financialProducts/financialSupermarket',children:[]},
      {id:'512',name:'我的理财',path:'/investmentFinancing/financialProducts/myfinancial',children:[]},
      {id:'513',name:'历史交易查询',path:'/investmentFinancing/financialProducts/transactionInquiry',children:[]},
      {id:'514',name:'风险评估',path:'/investmentFinancing/financialProducts/riskAassessment',children:[]}]
    },
    {id:'52',name:'存款业务',path:'',children:[
      {id:'521',name:'定期存款',path:'/investmentFinancing/depositBusiness/fixedDeposit',children:[]},
      {id:'522',name:'通知存款',path:'/investmentFinancing/depositBusiness/noticeDeposit',children:[]},
      {id:'523',name:'大额存单',path:'/investmentFinancing/depositBusiness/certificatesOfDeposit',children:[]},
      {id:'524',name:'存款明细',path:'/investmentFinancing/depositBusiness/depositDetail',children:[]}]
    },
  ]},
  {id:'6',name:'票据业务',path:'',children:[
    {id:'61',name:'出票',path:'',children:[
      { id: '611', name: '出票申请', path:'/billBusiness/drawAbill/drawAbillApply',children:[]},
      { id: '612', name: '待出票清单', path:'/billBusiness/drawAbill/stayBill',children:[]},
      ]
    },
    {id:'62',name:'承兑',path:'',children:[
      { id: '621', name: '提示承兑申请', path:'/billBusiness/accept/acceptApply',children:[]},
      { id: '622', name: '提示承兑撤销', path:'/billBusiness/accept/acceptRevocation',children:[]},
      ]
    },
    { id: '63', name: '撤票', path:'/billBusiness/revocationBill',children:[]},
    {id:'64',name:'提示收票',path:'',children:[
      { id: '641', name: '提示收票申请', path:'/billBusiness/thisTicket/thisTicketApply',children:[]},
      { id: '642', name: '提示收票撤销', path:'/billBusiness/thisTicket/thisTicketRevocation',children:[]},
      ]
    },
    {id:'65',name:'贴现',path:'',children:[
      { id: '651', name: '贴现申请', path:'/billBusiness/discount/discountApply',children:[]},
      { id: '652', name: '贴现撤销', path:'/billBusiness/discount/discountRevocation',children:[]},
      ]
    },
    {id:'66',name:'背书转让',path:'',children:[
      { id: '661', name: '背书转让申请', path:'/billBusiness/negotiablity/negotiablityApply',children:[]},
      { id: '662', name: '背书转让撤销', path:'/billBusiness/negotiablity/negotiablityRevocation',children:[]},
      ]
    },
    {
      id: '67', name: '质押', path: '', children: [
        { id: '671', name: '质押申请', path: '/billBusiness/pledge/pledge', children: [] },
        { id: '672', name: '质押撤销', path: '/billBusiness/pledge/pledgeRevocation', children: [] },
        { id: '673', name: '质押申请', path: '/billBusiness/pledge/removePledgeApply', children: [] },
        { id: '674', name: '质押申请', path: '/billBusiness/pledge/removePledgeApplyRevocation', children: [] },
      ]
    },
    {
      id: '68', name: '提示付款', path: '', children: [
        { id: '681', name: '提示付款申请', path: '/billBusiness/perForPayment/perForPaymentApply', children: [] },
        { id: '682', name: '提示付款撤销', path: '/billBusiness/perForPayment/perForPaymentRevocation', children: [] },
      ]
    },
    {id:'69',name:'追索/清偿',path:'',children:[
      { id: '691', name: '追索申请', path:'/billBusiness/pressPaymentAndpayOff/pressPaymentApply',children:[]},
      { id: '692', name: '追索申请撤销', path:'/billBusiness/pressPaymentAndpayOff/pressPaymentRevocation',children:[]},
      { id: '693', name: '同意清偿', path:'/billBusiness/pressPaymentAndpayOff/payOffApply',children:[]},
      { id: '694', name: '同意清偿撤销', path:'/billBusiness/pressPaymentAndpayOff/payOffRevocation',children:[]},
      ]
    },
    {id:'60',name:'待签收业务',path:'',children:[
      { id: '601', name: '提示收票签收', path:'/billBusiness/toBeSigned/PromptToCollectTickets',children:[]},
      { id: '602', name: '背书转让签收', path:'/billBusiness/toBeSigned/endorsementTransfer',children:[]},
      { id: '603', name: '质押签收', path:'/billBusiness/toBeSigned/pledgeSign',children:[]},
      { id: '604', name: '解质押签收', path:'/billBusiness/toBeSigned/removePledgeApplySign',children:[]},
      { id: '605', name: '同意清偿签收', path:'/billBusiness/toBeSigned/payOffSign',children:[]},
      ]
    },
    {id:'6-11',name:'查询',path:'',children:[
      { id: '6-11-1', name: '票据交易查询', path:'/billBusiness/query/billBusiness',children:[]},
      { id: '6-11-2', name: '票据信息查询', path:'/billBusiness/query/billinfo',children:[]},
      { id: '6-11-3', name: '票据结果查询', path:'/billBusiness/query/billResult',children:[]},
      ]
    },
    { id: '6-12', name: '收款人维护', path:'/billBusiness/payee',children:[]},
  ]},
  {id:'7',name:'国际业务',path:'',children:[
    {id:'71',name:'外汇汇款',path:'',children:[
      {id:'711',name:'外汇汇款申请',path:'',children:[]},
    ]},
    {id:'72',name:'外汇牌价查询',path:'',children:[]},
    {id:'73',name:'结售汇',path:'',children:[
      {id:'731',name:'票据交易查询',path:'',children:[]},
      {id:'732',name:'票据信息查询',path:'',children:[]},
      
    ]},
    {id:'74',name:'国际信用证',path:'',children:[
      {id:'741',name:'信用证开证',path:'',children:[]},
      {id:'742',name:'信用证改证',path:'',children:[]},
      {id:'743',name:'承兑/付款/拒付',path:'',children:[]},
    ]},
    {id:'75',name:'保证金缴纳',path:'',children:[]},
    {id:'76',name:'查询',path:'',children:[]},
  ]},
  {id:'8',name:'集团业务',path:'',children:[
    { id: '81', name: '资金上拨', path:'/groupBusiness/onTheDial',children:[]},
    { id: '82', name: '资金下拨', path:'/groupBusiness/stir',children:[]},
    { id: '83', name: '内部划拨', path:'/groupBusiness/internalTransfer',children:[]},
    { id: '84', name: '对外付款', path:'/groupBusiness/foreignPayment',children:[]},
    {id:'85',name:'自动划拨',path:'',children:[
      { id: '851', name: '自动划拨计划', path:'/groupBusiness/automaticTransfer/automaticTransferPlan',children:[]},
      { id: '852', name: '划拨计划维护', path:'/groupBusiness/automaticTransfer/automaticTransferMaintenance',children:[]},
    ]},
    {id:'86',name:'信息查询',path:'',children:[
      { id: '861', name: '集团管理查询', path:'/groupBusiness/informationQuery/groupManagemen',children:[]},
      { id: '862', name: '分公司账户余额查询', path:'/groupBusiness/informationQuery/accountBalanceBranchCompany',children:[]},
      { id: '863', name: '划拨交易查询', path:'/groupBusiness/informationQuery/transferTransactions',children:[]},
    ]},
  ]},
  {id:'9',name:'融资贷款',path:'',children:[
    {id:'91',name:'贷款业务',path:'',children:[
      {id:'911',name:'贷款查询',path:'',children:[]},
      {id:'912',name:'贷款申请',path:'',children:[]},
      {id:'913',name:'贷款放款',path:'',children:[]},
      {id:'914',name:'贷款归还',path:'',children:[]},
      {id:'915',name:'贷款计算器',path:'',children:[]}
    ]},
    {id:'92',name:'保函业务',path:'',children:[
      {id:'921',name:'保函业务申请',path:'',children:[]},
      {id:'922',name:'申请进度查询',path:'',children:[]},
      {id:'923',name:'保函业务查询',path:'',children:[]},
    ]},
    {id:'93',name:'保理业务',path:'',children:[]},
  ]},
  {id:'10',name:'特色服务',path:'',children:[
    {id:'x1',name:'电力缴费',path:'',children:[]},
    {id:'x2',name:'财税库银',path:'',children:[]},
    {id:'x3',name:'非税缴费',path:'',children:[]},
    {id:'x4',name:'预售房资金管理',path:'',children:[
      {id:'x41',name:'缴款确认',path:'',children:[]},
      {id:'x42',name:'划拨退款',path:'',children:[]},
    ]},
    {id:'x5',name:'投招标保证金',path:'',children:[
      {id:'x51',name:'非订单模式支付',path:'',children:[]},
      {id:'x52',name:'订单模式支付',path:'',children:[]},
      {id:'x53',name:'保证金退款',path:'',children:[]},
      {id:'x54',name:'退款失败清单',path:'',children:[]},
    ]},
    {id:'x6',name:'缴费记录',path:'',children:[]},
  ]},
  {id:'11',name:'现金管理',path:'',children:[
      {id:'zjgj',name:'资金归集',path:'',
        children:[
          // {id:'zjgj_yecx',name:'资金归集余额查询',path:'/cashManagement/cashSweep/balanceQuery'},
          // {id:'zjgj_mxcx',name:'资金归集明细查询',path:'/cashManagement/cashSweep/detailedQuery'},
          // {id:'zjgj_lxcx',name:'资金归集利息查询',path:'/cashManagement/cashSweep/interestQuery'},
          // {id:'zjgj_lxfp',name:'资金归集利息分配',path:'/cashManagement/cashSweep/interestDistribution'},
          // {id:'zjgj_shxb',name:'资金归集上划下拨',path:'/cashManagement/cashSweep/upStrokeAllocation'},
          // {id:'zjgj_ldzf',name:'资金归集联动支付',path:'/cashManagement/cashSweep/linkagePayment'}
          {id:'zjgj_yecx',name:'资金归集余额查询',path:''},
          {id:'zjgj_mxcx',name:'资金归集明细查询',path:''},
          {id:'zjgj_lxcx',name:'资金归集利息查询',path:''},
          {id:'zjgj_lxfp',name:'资金归集利息分配',path:''},
          {id:'zjgj_shxb',name:'资金归集上划下拨',path:''},
          {id:'zjgj_ldzf',name:'资金归集联动支付',path:''}
        ]
      },
      {
        id:'djzb',name:'多级账簿',path:'',
        children:[
          {id:'djzb_xecx',name:'多级账簿限额查询',path:''},
          {id:'djzb_xesz',name:'多级账簿限额设置',path:'',
            children:[
              {id:'djzb_xesz_xz',name:'多级账簿限额新增',path:'',},
              {id:'djzb_xesz_xg',name:'多级账簿限额修改',path:'',}
            ]
          },
          {id:'djzb_yecx',name:'多级账簿余额查询',path:''},
          {id:'djzb_mxcx',name:'多级账簿明细查询',path:''},
          {id:'djzb_mxtz',name:'多级账簿明细调账',path:'',
            children:[
              {id:'djzb_mxtz_lr',name:'录入页面',path:'',},
              {id:'djzb_mxtz_qr',name:'确认页面',path:'',}
            ]
          },
          {id:'djzb_lxcx',name:'资金归集利息查询',path:''},
          {id:'djzb_lxfp',name:'资金归集利息分配',path:'',
            children:[
              {id:'djzb_lxfp_lr',name:'录入页面',path:'',},
              {id:'djzb_lxfp_qr',name:'确认页面',path:'',}
            ]
          },
          {id:'djzb_yezz',name:'多级账簿余额转账',path:'',
            children:[
              {id:'djzb_yezz_lr',name:'录入页面',path:'',},
              {id:'djzb_yezz_qr',name:'确认页面',path:'',}
            ]
          },
          {id:'djzb_dwzf',name:'多级账簿对外支付',path:'',
            children:[
              {id:'djzb_dwzf_lr',name:'录入页面',path:'',},
              {id:'djzb_dwzf_qr',name:'确认页面',path:'',}
            ]
          }
        ]
      },
      {id:'jszjc',name:'节税资金池',path:'',
        children:[
          {id:'jszjc_yecx',name:'横向扫款余额查询',path:'',},
          {id:'jszjc_lscx',name:'横向扫款流水查询',path:'',},
          {id:'jszjc_lxcx',name:'横向扫款利息查询',path:'',},
          {id:'jszjc_lxfp',name:'横向扫款利息分配',path:'',
            children:[
              {id:'jszjc_lxfp_lr',name:'录入页面',path:'',},
              {id:'jszjc_lxfp_qr',name:'确认页面',path:'',}
            ]
          },
          {id:'jszjc_ldzf',name:'横向扫款联动支付',path:'',children:[]},
        ]
      },
      {id:'xnzjc',name:'虚拟资金池',path:'',
        children:[
          {id:'xnzjc_dbyecx',name:'VCP担保额度查询',path:'',},
          {id:'xnzjc_zyyecx',name:'VCP质押余额查询',path:'',},
          {id:'xnzjc_lscx',name:'VCP质押流水查询',path:'',},
          {id:'xnzjc_rc',name:'活期质押入池',path:'',
            children:[
              {id:'xnzjc_rc_lr',name:'录入页面',path:'',},
              {id:'xnzjc_rc_qr',name:'确认页面',path:'',}
            ]
          },
          {id:'xnzjc_cc',name:'活期解押出池',path:'',
            children:[
              {id:'xnzjc_cc_lr',name:'录入页面',path:'',},
              {id:'xnzjc_cc_qr',name:'确认页面',path:'',}
            ]
          },
        ]
      },
      {id:'khfu',name:'跨行服务',path:'',
        children:[
          {id:'khfu_xxcx',name:'他行账户信息查询',path:'',},
          {id:'khfu_yecx',name:'他行账户余额查询',path:'',},
          {id:'khfu_mxcx',name:'他行账户明细查询',path:'',},
          {id:'khfu_dwzf',name:'他行账户对外支付',path:'',children:[]},
        ]
      },
      {id:'khzjc',name:'跨行资金池',path:'',
        children:[
          {id:'khzjc_yecx',name:'跨行归集余额查询',path:''},
          {id:'khzjc_lscx',name:'跨行归集流水查询',path:''},
          {id:'khzjc_lxcx',name:'跨行归集利息查询',path:''},
        ]
      },
      {id:'pjc',name:'票据池',path:'/cashManagement/taxSavingFundPool',
        children:[
          {id:'pjc_edcx',name:'票据池额度查询',path:''},
          {id:'pjc_xxcx',name:'票据池信息查询',path:''},
          {id:'pjc_ccrc',name:'票据出池入池',path:''},
          {id:'pjc_rc',name:'票据入池',path:'',children:[]},
          {id:'pjc_cc',name:'票据出池',path:'',children:[]},
          {id:'pjc_bzjzq',name:'保证金支取',path:'',children:[
              {id:'pjc_bzjzq_lr',name:'录入页面',path:'',},
              {id:'pjc_bzjzq_qr',name:'确认页面',path:'',}
            ]
          },
        ]
      },
     
    ]
  },
  {id:'12',name:'更多功能',path:'',children:[
    {id:'y1',name:'费用套餐',path:'',children:[]},
    {id:'y2',name:'预约服务',path:'',children:[
      {id:'y21',name:'预约开户',path:'',children:[]},
      {id:'y22',name:'大额取现预约',path:'',children:[]},
    ]},
    {id:'y3',name:'企业管理台',path:'',children:[
      {id:'y31',name:'企业信息管理',path:'',children:[]},
      {id:'y32',name:'企业操作员管理',path:'',children:[]},
      {id:'y33',name:'限额设置',path:'',children:[]},
      {id:'y34',name:'汇款用途维护',path:'',children:[]},
      {id:'y35',name:'扣款账户管理',path:'',children:[]},
      {id:'y36',name:'操作员日志查询',path:'',children:[]},
      {id:'y37',name:'短信通',path:'',children:[]},
    ]},
    {id:'y4',name:'B2B网关支付',path:'',children:[
      {id:'y41',name:'支付明细查询',path:'',children:[]},
      {id:'y42',name:'网上支付开通/管理',path:'',children:[]},
    ]},
    {id:'y5',name:'交易管理',path:'',children:[
      {id:'y51',name:'交易查询',path:'',children:[]},
      {id:'y52',name:'审批中心',path:'',children:[]},
    ]},
    {id:'y6',name:'银企直联',path:'',children:[
      {id:'x61',name:'下载中心',path:'',children:[]},
      {id:'x62',name:'证书管理',path:'',children:[]},
    ]},
  ]},
]