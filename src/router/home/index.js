export default [
  { //登录
    path: '/login',
    name: 'Login',
    component:
      resolve =>
        require.ensure(
          [],
          () => resolve(require('views/login/LoginMainNew.vue')),
        ),
    meta: {
      title: '登录',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    }
  },
  { //首页
  path: '/home',
  name: 'Home',
  component: resolve =>
    require.ensure(
      [],
      () => resolve(require('views/home/index.vue')),
    ),
  meta: {
    title: '首页',
    keepAlive: true,
    requireAuth: true,
    roles: ['admin', 'editor'],
  }
  }]