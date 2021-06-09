import home from './home'; // 首页
import accountManagement from './accountManagement'; // 账户管理
import paymentSettlement from './paymentSettlement'; // 转账汇款
import issueAndReceive from './issueAndReceive'; // 代发代收
import investmentFinancing from './investmentFinancing'; // 投资理财
import billBusiness from './billBusiness'; // 票据业务
import internationalBusiness from './internationalBusiness'; // 国际业务
import groupBusiness from './groupBusiness'; // 集团业务
import financingLoan from './financingLoan'; // 融资贷款
import characteristicService from './characteristicService'; // 特色服务
import cashManagement from './cashManagement'; // 现金管理
import moreFeatures from './moreFeatures'; // 更多功能

// 不需要动态判断权限
const constantRoutes = [
  {
    path: '/',
    redirect: {
      path: '/home'
    }
  },
  {
    path: '/serverError',
    name: 'serverError',
    component: () => import('src/views/errorPage/serverError'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('src/views/errorPage'),
  },
];
// 需求动态判断权限并通过addRoutes 动态添加的页面
const asyncRoutes = [
  ...home, // 首页模块
  {
    path: '/layout',
    name: 'layout',
    component: resolve =>
      require.ensure(
        [],
        () => resolve(require('src/components/layout')),
        'Layout'
      ),
    children:[
      ...accountManagement, // 账户管理
      ...paymentSettlement, //转账汇款
      ...issueAndReceive, // 代发代收
      ...investmentFinancing, //投资理财
      ...internationalBusiness, //国际业务
      ...billBusiness, // 票据业务
      // ...internationalBusiness, //国际业务
      ...groupBusiness, // 集团业务
      ...financingLoan, //融资贷款
      // ...characteristicService, // 特色服务
      ...cashManagement, //现金管理
      // ...moreFeatures, // 更多功能
    ]
  },
];
const routes = [...constantRoutes, ...asyncRoutes];
export default [...routes];