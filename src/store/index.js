import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import recommendations from './modules/recommendations';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    recommendations,
  },
});
