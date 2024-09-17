const state = {
    recommendations: [],
  };
  
  const mutations = {
    setRecommendations(state, recommendations) {
      state.recommendations = recommendations;
    },
  };
  
  const actions = {
    fetchRecommendations({ commit }, query) {
      // API'den veri çekme işlemi simüle ediliyor (gerçek API ile değiştirilebilir)
      return new Promise((resolve) => {
        setTimeout(() => {
          const sampleRecommendations = [
            { id: 1, title: "The Great Gatsby", year: 1925 },
            { id: 2, title: "Inception", year: 2010 },
            { id: 3, title: "1984", year: 1949 },
          ];
          commit('setRecommendations', sampleRecommendations);
          resolve();
        }, 1000);
      });
    },
  };
  
  const getters = {
    recommendations: state => state.recommendations,
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };
  