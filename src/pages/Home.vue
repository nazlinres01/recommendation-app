<template>
  <div class="home">
    <h1>Welcome to MyRecommendationApp</h1>
    <search-bar @search="performSearch"></search-bar>
    <recommendation-list></recommendation-list>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import RecommendationList from "@/components/RecommendationList.vue";
import { mapActions } from "vuex";

export default {
  components: {
    SearchBar,
    RecommendationList,
  },
  methods: {
    ...mapActions("recommendations", ["fetchRecommendations"]),
    performSearch(query) {
      this.fetchRecommendations(query); // Arama sorgusunu API'den öneri almak için kullan
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 2rem;
}
</style>
