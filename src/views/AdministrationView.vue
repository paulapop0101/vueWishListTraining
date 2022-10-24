<script setup>
import CredentialsComponent from "../components/CredentialsComponent.vue";
import { ref } from "vue";
import useCategories from "../composables/categories";
import { useProductsStore } from "../stores/useProducts";
import useProducts from "../composables/products";

// eslint-disable-next-line no-unused-vars
const { categories, isLoading1, resetCategoryButtons } = useCategories();
// eslint-disable-next-line no-unused-vars
const { products, isLoading, resetProducts, filterProducts } = useProducts();
const store = useProductsStore();
const title_ = ref("");
const price_ = ref("");
const description_ = ref("");
const category_ = ref("");
function addProduct() {
  let last_id = products.value[products.value.length - 1].id + 1;
  store.addProduct({
    id: last_id,
    title: title_.value,
    price: price_.value,
    description: description_.value,
    category: category_.value,
    image: "https://picsum.photos/id/237/200/300",
  });
}
</script>
<template>
  <div>
    <CredentialsComponent>
      <template #title> Add new product </template>
      <template #inputs>
        <input type="text" placeholder="title" v-model="title_" />
        <input type="number" placeholder="price" v-model="price_" />
        <input type="text" placeholder="description" v-model="description_" />
        <select v-model="category_">
          <option
            v-for="option in categories"
            :key="option"
            :value="option.name"
          >
            {{ option.name }}
          </option>
        </select>
        <input type="submit" @click="addProduct()" />
      </template>
    </CredentialsComponent>
  </div>
</template>
<style scoped>
.formm {
  display: inline-grid;
}
input,
select {
  margin: 0.5em;
  height: 2.3em;
  width: 20em;
}
input[type="submit"] {
  background-color: black;
  color: white;
  cursor: pointer;
}
</style>
