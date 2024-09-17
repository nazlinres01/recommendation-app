import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Vue Router konfigürasyonu
import store from './store';   // Vuex store
import './assets/styles.css'; // Küresel stiller (opsiyonel)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
