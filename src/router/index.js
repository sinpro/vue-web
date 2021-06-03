import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
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
  console.log(to)
  next()

})
export default router;