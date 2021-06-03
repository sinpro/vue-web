import home from './home'; // 首页登录
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
      ...cashManagement, //现金管理
    ]
  },
];