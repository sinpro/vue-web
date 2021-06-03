export default [
  { //跨行服务
    path: '/cashManagement/interBankService',
    name: 'InterBankService',
    component: () =>
      import ('src/views/cashManagement/interBankService/index.vue'),
    meta: {
      title: '跨行服务',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    }
  },{ //多级账簿
    path: '/cashManagement/multiLevelAccountBook',
    name: 'MultiLevelAccountBook',
    component: () =>
      import ('src/views/cashManagement/multiLevelAccountBook/index.vue'),
    meta: {
      title: '多级账簿',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    }
  },{ //资金归集
  path: '/cashManagement/cashSweep',
  name: 'CashSweep',
  component: () =>
    import ('src/views/cashManagement/cashSweep/index.vue'),
  meta: {
    title: '资金归集',
    keepAlive: false,
    requireAuth: true,
    roles: ['admin', 'editor'],
  }
},{ //跨行资金池
    path: '/cashManagement/interbankCapitalPool',
    name: 'InterbankCapitalPool',
    component: () =>
      import ('src/views/cashManagement/interbankCapitalPool/index.vue'),
    meta: {
      title: '跨行资金池',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    }
  },{ //集团资金池
  path: '/cashManagement/groupCapitalPool',
  name: 'GroupCapitalPool',
  component: () =>
    import ('src/views/cashManagement/groupCapitalPool/index.vue'),
  meta: {
    title: '集团资金池',
    keepAlive: false,
    requireAuth: true,
    roles: ['admin', 'editor'],
  }
},{ //节税资金池
  path: '/cashManagement/taxSavingFundPool',
  name: 'TaxSavingFundPool',
  component: () =>
    import ('src/views/cashManagement/taxSavingFundPool/index.vue'),
  meta: {
    title: '节税资金池',
    keepAlive: false,
    requireAuth: true,
    roles: ['admin', 'editor'],
  }
}]