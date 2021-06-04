export default [
  { //跨行服务
    path: '/cashManagement/interBankService',
    name: 'InterBankService',
    component: resolve =>
    require.ensure(
      [],
      () => resolve(require('views/cashManagement/interBankService/index.vue')),
      'InterBankService'
    ),
    meta: {
      title: '跨行服务',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    }
  },{ //多级账簿
    path: '/cashManagement/multiLevelAccountBook',
    name: 'MultiLevelAccountBook',
    component: resolve =>
      require.ensure(
        [],
        () => resolve(require('views/cashManagement/multiLevelAccountBook/index.vue')),
        'MultiLevelAccountBook'
      ),
    meta: {
      title: '多级账簿',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    }
  },{ //资金归集
  path: '/cashManagement/cashSweep',
  name: 'CashSweep',
  component: resolve =>
    require.ensure(
      [],
      () => resolve(require('views/cashManagement/cashSweep/index.vue')),
      'CashSweep'
    ),
  meta: {
    title: '资金归集',
    keepAlive: false,
    requireAuth: true,
    roles: ['admin', 'editor'],
  }
},{ //跨行资金池
    path: '/cashManagement/interbankCapitalPool',
    name: 'InterbankCapitalPool',
    component:
  resolve =>
    require.ensure(
      [],
      () => resolve(require('views/cashManagement/interbankCapitalPool/index.vue')),
      'InterbankCapitalPool'
    ),
    meta: {
      title: '跨行资金池',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    }
  },{ //集团资金池
  path: '/cashManagement/groupCapitalPool',
  name: 'GroupCapitalPool',
  component: resolve =>
    require.ensure(
      [],
      () => resolve(require('views/cashManagement/groupCapitalPool/index.vue')),
      'GroupCapitalPool'
    ),
  meta: {
    title: '集团资金池',
    keepAlive: false,
    requireAuth: true,
    roles: ['admin', 'editor'],
  }
},{ //节税资金池
  path: '/cashManagement/taxSavingFundPool',
  name: 'TaxSavingFundPool',
  component: resolve =>
    require.ensure(
      [],
      () => resolve(require('views/cashManagement/taxSavingFundPool/index.vue')),
      'taxSavingFundPool'
    ),
  meta: {
    title: '节税资金池',
    keepAlive: false,
    requireAuth: true,
    roles: ['admin', 'editor'],
  }
}]