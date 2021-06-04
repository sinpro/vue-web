import { safeGetLocalStorage, safeSetLocalStorage } from 'src/utils/index';
// 设置token
function setToken(state, token = '') {
  state.token = token;
}
// 设置用户菜单数据
function setUserMenus(state, menus = []) {
  safeSetLocalStorage('userMenus', menus);
  state.userMenus = menus;
}
// 设置用户侧边菜单栏
function setSliderMenus(state, menus = []) {
  safeSetLocalStorage('sliderMenus', menus);
  state.sliderMenus = menus;
}
export default {
  // namespaced: true, // 模块化局部命名
  state: {
    loading: false,//是否需要loading
    loginTimeOutVisible: false, // 登录超时提示modal显示
    token: safeGetLocalStorage('token'), // token
    userMenus:safeGetLocalStorage('userMenus', []),// 菜单列表
    sliderMenus:safeGetLocalStorage('sliderMenus', []),// 侧边栏菜单
  },
  mutations: {
    setLoading(state, boolean) {
      state.loading = boolean;
    },
    setLoginTimeOutVisible(state, boolean) {
      state.loginTimeOutVisible = boolean;
    },
    setToken,
    setUserMenus,
    setSliderMenus

  },
  actions: {
    getUserMenus(ctx, Vue) {
      Vue.$api.getMenus().then((res) => {
        const { menuList } = res.data;
        ctx.commit('setUserMenus', Object.freeze(menuList)); // 数据太大，需要freeze一下，否则耗性能
      });
    },
  },
  getters: {
    getLoading(state) {
      return state.loading;
    },
    getLoginTimeOutVisible(state) {
      return state.loginTimeOutVisible;
    },
    getToken(state) {
      return state.token;
    },
    getUserMenus(state) {
      return state.userMenus;
    },
    getSliderMenus(state) {
      return state.sliderMenus;
    },
  }
};
