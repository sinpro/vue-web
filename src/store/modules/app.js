// 设置token
function setToken(state, token = '') {
  state.token = token;
}
export default {
  // namespaced: true, // 模块化局部命名
  state: {
    loading: false,//是否需要loading
    loginTimeOutVisible: false, // 登录超时提示modal显示
    token: '', // token
  },
  mutations: {
    setLoading(state, boolean) {
      state.loading = boolean;
    },
    setLoginTimeOutVisible(state, boolean) {
      state.loginTimeOutVisible = boolean;
    },
    setToken,
  },
  actions: {},
  getters: {
    isLoading(state) {
      return state.loading;
    },
    isLoginTimeOutVisible(state) {
      return state.loginTimeOutVisible;
    },
    token(state) {
      return state.token;
    }
  }
};
