export default {
  namespaced: true,
  state: () => ({
    isLogin: false,
    loginUser: { id: 0, nickname: "", auth: 0 },
  }),
  mutations: {},
  getters: {
    isLogin(state) {
      return state.isLogin;
    },
    loginUser(state) {
      return state.loginUser;
    },
  },
};
