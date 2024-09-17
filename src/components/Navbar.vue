<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="logo">MyRecommendationApp</router-link>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/favorites">Favorites</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
        <li v-if="isLoggedIn">
          <button @click="logout">Logout</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["isLoggedIn"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
  },
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.logo {
  font-weight: bold;
  color: white;
  text-decoration: none;
}
</style>
