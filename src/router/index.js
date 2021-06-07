import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import { setSideMenu } from 'utils/routerIntercept';

// 解决侧边栏重复点击报错问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
import store from 'src/store';
import routes from './routes';
const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({
    x: 0,
    y: 0
  }),
  routes
})
router.beforeEach((to, from, next) => {
  const nick = store.state.app.token;
  if (!nick && to.path !== '/login') {
    next({
      path: '/login'
    })
  } else {
    next()
    // setSideMenu(to, from, router, next);
  }
})
router.afterEach((to) => {
  // console.log('afterEach',to)
  // const path = (to.path || '').replace(/^\//, '');
  // document.body.setAttribute('data-root', path.split('/').join('-'));

})
export default router;