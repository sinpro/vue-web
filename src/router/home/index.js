export default [{ //首页
  path: '/home',
  name: 'Home',
  component: () =>
    import ('src/views/home/index.vue'),
  meta: {
    title: '首页',
    keepAlive: false,
    requireAuth: true,
    roles: ['admin', 'editor'],
  }
  }, { //登录
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
}]