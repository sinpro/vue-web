import home from './home';
export default [{
  path: '/',
  redirect: {
    name: 'Login'
  }
},
  {
    path: '/layout',
    name: 'layout',
    component: () =>
      import ('src/components/layout'),
    children:[
      ...home
    ]
  },
  { //登录
    path: '/login',
    name: 'Login',
    component: () =>
      import ('src/views/home/Login.vue'),
    meta: {
      title: '登录',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    }
  }

];