<template>
  <div class="details" v-if="item">
    <h1>{{ item.title }}</h1>
    <p><strong>Year:</strong> {{ item.year }}</p>
    <p><strong>Description:</strong> {{ item.description }}</p>
    <button @click="addToFavorites(item)">Add to Favorites</button>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      item: null,
    };
  },
  created() {
    const itemId = this.$route.params.id;
    this.fetchItemDetails(itemId);
  },
  methods: {
    ...mapActions("favorites", ["addToFavorites"]),
    fetchItemDetails(itemId) {
      // API'den öğe bilgilerini çek
      // Bu örnekte sabit bir öğe verisi kullanılıyor
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
</style>
