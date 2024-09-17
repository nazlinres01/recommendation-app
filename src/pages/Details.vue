<template>
    <div class="details" v-if="item">
      <h1>{{ item.title }}</h1>
      <p><strong>Year:</strong> {{ item.year }}</p>
      <p><strong>Description:</strong> {{ item.description }}</p>
      <button @click="addToFavorites(item.id)">Add to Favorites</button>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  
  export default {
    name: "ItemDetails",  // Bileşen adı çok kelimeli hale getirildi
    data() {
      return {
        item: null,  // Öğenin verileri
      };
    },
    created() {
      const itemId = this.$route.params.id;  // URL'den itemId'yi al
      this.fetchItemDetails(itemId);  // Öğenin detaylarını getir
    },
    methods: {
      ...mapActions("favorites", ["addToFavorites"]),  // Favorilere ekleme işlemi için Vuex aksiyonu
      fetchItemDetails(itemId) {
        // API'den öğe bilgilerini çek
        // Gerçek API entegrasyonuyla değiştirin
        this.item = {
          id: itemId,
          title: "Sample Book/Movie Title",
          year: 2021,
          description: "This is a description of the book or movie.",
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .details {
    margin-top: 2rem;
    text-align: center;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: #3498db;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  </style>
  