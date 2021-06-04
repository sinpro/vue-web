export default [
  {id:'1',name:'首页',path:'/home',children:[]},
  {id:'2',name:'账户管理',path:'',children:[]},
  {id:'3',name:'转账汇款',path:'',children:[]},
  {id:'4',name:'代发代收',path:'',children:[]},
  {id:'5',name:'投资理财',path:'',children:[]},
  {id:'6',name:'票据业务',path:'',children:[]},
  {id:'7',name:'融资贷款',path:'',children:[]},
  {id:'8',name:'特色服务',path:'',children:[]},
  {id:'9',name:'国际业务',path:'',children:[]},
  {id:'10',name:'集团业务',path:'',children:[]},
  {id:'11',name:'现金管理',path:'',children:[
      {id:'11-1',name:'跨行服务',path:'/cashManagement/interBankService'},
      {id:'11-2',name:'多级账簿',path:'/cashManagement/multiLevelAccountBook'},
      {id:'11-3',name:'资金归集',path:'/cashManagement/cashSweep'},
      {id:'11-4',name:'跨行资金池',path:'/cashManagement/interbankCapitalPool'},
      {id:'11-5',name:'集团资金池',path:'/cashManagement/groupCapitalPool'},
      {id:'11-6',name:'节税资金池',path:'/cashManagement/taxSavingFundPool'},
    ]
  },
  {id:'12',name:'更多功能',path:'',children:[]},
]