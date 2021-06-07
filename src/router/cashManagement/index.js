export default [
  { //跨行服务
    path: '/cashManagement/interBankService',
    name:'InterBankService',
    component: resolve =>
    require.ensure(
      [],
      () => resolve(require('views/cashManagement/interBankService/index.vue')),
    ),
    meta: {
      title: '跨行服务',
    }
  },{ //多级账簿
    path: '/cashManagement/multiLevelAccountBook',
    name:'MultiLevelAccountBook',
    component: resolve =>
      require.ensure(
        [],
        () => resolve(require('views/cashManagement/multiLevelAccountBook/index.vue')),
      ),
    meta: {
      title: '多级账簿'
    }
  },{ //资金归集
  path: '/cashManagement/cashSweep',
  name:'CashSweep',
  component: resolve =>
    require.ensure(
      [],
      () => resolve(require('views/cashManagement/cashSweep/index.vue')),
    ),
  meta: {
    title: '资金归集'
  }
},{ //跨行资金池
    path: '/cashManagement/interbankCapitalPool',
    name:'InterbankCapitalPool',
    component:
  resolve =>
    require.ensure(
      [],
      () => resolve(require('views/cashManagement/interbankCapitalPool/index.vue'))
    ),
    meta: {
      title: '跨行资金池'
    }
  },{ //集团资金池
  path: '/cashManagement/groupCapitalPool',
  name:'GroupCapitalPool',
  component: resolve =>
    require.ensure(
      [],
      () => resolve(require('views/cashManagement/groupCapitalPool/index.vue'))
    ),
  meta: {
    title: '集团资金池'
  }
},{ //节税资金池
  path: '/cashManagement/taxSavingFundPool',
  name:'taxSavingFundPool',
  component: resolve =>
    require.ensure(
      [],
      () => resolve(require('views/cashManagement/taxSavingFundPool/index.vue'))
    ),
  meta: {
    title: '节税资金池'
  }
}]