const state = {
    user: null,
    isLoggedIn: false,
  };
  
  const mutations = {
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = !!user;
    },
  };
  
  const actions = {
    login({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        // Örnek giriş işlemi (normalde bir API isteği yapılır)
        if (username === "test" && password === "password") {
          commit('setUser', { username });
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      });
    },
    logout({ commit }) {
      commit('setUser', null);
    },
  };
  
  const getters = {
    isLoggedIn: state => state.isLoggedIn,
    user: state => state.user,
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };
  