import home from './home'; // 首页登录
import internationalBusiness from './cashManagement';
import cashManagement from './cashManagement';

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
      ...internationalBusiness, // 国际业务
      ...cashManagement, //现金管理
    ]
  },
];
const routes = [...constantRoutes, ...asyncRoutes];
export default [...routes];