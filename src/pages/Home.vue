<template>
    <div class="home">
      <h1>Welcome to MyRecommendationApp</h1>
      <search-bar @search="performSearch"></search-bar>
  
      <div v-if="loading">Loading recommendations...</div>
      
      <recommendation-list 
        v-if="!loading" 
        :recommendations="recommendations">
      </recommendation-list>
    </div>
  </template>
  
  <script>
  import SearchBar from "@/components/SearchBar.vue";
  import RecommendationList from "@/components/RecommendationList.vue";
  import { mapState, mapActions } from "vuex";
  
  export default {
    name: "HomePage", // Bileşen ismini tek kelime olmaktan çıkarıyoruz
    components: {
      SearchBar,
      RecommendationList,
    },
    data() {
      return {
        loading: false, // Yüklenme durumu
      };
    },
    computed: {
      ...mapState("recommendations", ["recommendations"]), // Vuex'ten önerileri çekiyoruz
    },
    methods: {
      ...mapActions("recommendations", ["fetchRecommendations"]),
      async performSearch(query) {
        this.loading = true; // Arama başlarken yüklenme durumu aktif
        try {
          await this.fetchRecommendations(query); // API'den öneri almak için arama sorgusunu kullan
        } finally {
          this.loading = false; // İşlem bitince yüklenme durumu pasif
        }
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
  