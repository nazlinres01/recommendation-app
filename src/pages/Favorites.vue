<template>
  <div class="favorites">
    <h1>Your Favorite Books/Movies</h1>
    <div v-if="favorites.length === 0">You have no favorites yet!</div>
    <ul v-else>
      <li v-for="item in favorites" :key="item.id">
        <router-link :to="`/details/${item.id}`">
          {{ item.title }} ({{ item.year }})
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("favorites", ["favorites"]),
  },
};
</script>

<style scoped>
.favorites {
  margin-top: 2rem;
}

.favorites ul {
  list-style-type: none;
  padding: 0;
}

.favorites li {
  margin-bottom: 1rem;
}
</style>
