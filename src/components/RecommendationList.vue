<template>
  <div class="recommendation-list">
    <h2>Recommended for You</h2>
    <div v-if="recommendations.length === 0">No recommendations yet</div>
    <ul>
      <li v-for="item in recommendations" :key="item.id">
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
    ...mapState("recommendations", ["recommendations"]),
  },
};
</script>

<style scoped>
.recommendation-list {
  margin-top: 2rem;
}

.recommendation-list ul {
  list-style-type: none;
  padding: 0;
}

.recommendation-list li {
  margin-bottom: 1rem;
}
</style>
