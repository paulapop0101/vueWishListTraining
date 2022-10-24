<script setup>
import { ref } from "vue";
import useProducts from "../composables/products";
// eslint-disable-next-line no-unused-vars
const { products, isLoading, resetProducts, filterProducts } = useProducts();
const columns = ref([
  {
    label: "Title",
    field: "title",
  },
  {
    label: "Description",
    field: "description",
  },
  {
    label: "Category",
    field: "category",
  },
  {
    label: "Price",
    field: "price",
    type: "number",
  },
]);
</script>
<template>
  <div class="table">
    <vue-good-table
      :columns="columns"
      :rows="products"
      :pagination-options="{
        enabled: true,
        mode: 'records',
        perPageDropdown: [5, 10, 20, 30, 50, 100],
      }"
      :search-options="{
        enabled: true,
      }"
    />
  </div>
</template>
<style scoped>
.table {
  margin-top: 3em;
  margin-bottom: 5em;
}
</style>
