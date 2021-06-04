import home from './home'; // 首页登录
import internationalBusiness from './cashManagement';
import cashManagement from './cashManagement';
export default [{
  path: '/',
  redirect: {
    name: 'Login'
  }
},
  ...home, // 首页模块
  {
    path: '/layout',
    name: 'layout',
    component: () =>
      import ('src/components/layout'),
    children:[
      ...internationalBusiness, // 国际业务
      ...cashManagement, //现金管理
    ]
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