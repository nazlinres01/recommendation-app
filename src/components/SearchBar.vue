<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search for a book or movie..."
      v-model="searchQuery"
      @input="onSearch"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.searchQuery); // Arama terimini üst bileşene iletir
    },
  },
};
</script>

<style scoped>
.search-bar input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
