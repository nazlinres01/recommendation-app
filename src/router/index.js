import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';
import Favorites from '@/pages/Favorites.vue';
import Details from '@/pages/Details.vue';
import Login from '@/pages/Login.vue';
import store from '@/store'; // Giriş kontrolü için Vuex store

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: false }
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
    meta: { requiresAuth: true } // Sadece giriş yapılmış kullanıcılar erişebilir
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
    props: true, // Parametreyi bileşene prop olarak geçir
    meta: { requiresAuth: false }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '*',
    redirect: '/' // Bilinmeyen bir rotada ana sayfaya yönlendirme
  }
];

const router = new VueRouter({
  mode: 'history', // URL'de hash olmadan ("/#") gezinmek için
  routes
});

// Giriş kontrolü için global navigation guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['auth/isLoggedIn'];

  // Eğer giriş gerektiren bir rotaya gitmeye çalışıyorsak ve kullanıcı giriş yapmamışsa
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next('/login'); // Giriş sayfasına yönlendir
  } else {
    next(); // İzin ver
  }
});

export default router;
