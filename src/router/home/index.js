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
  },]