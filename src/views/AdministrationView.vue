<script setup>
import CredentialsComponent from "../components/CredentialsComponent.vue";
import { ref } from "vue";
import useCategories from "../composables/categories";
import { useProductsStore } from "../stores/useProducts";
import useProducts from "../composables/products";
import LayoutMenu from "../components/LayoutMenu.vue";
import ProductsTable from "../components/ProductsTable.vue";

// eslint-disable-next-line no-unused-vars
const { categories, isLoading1, resetCategoryButtons } = useCategories();
// eslint-disable-next-line no-unused-vars
const { products, isLoading, resetProducts, filterProducts } = useProducts();
const store = useProductsStore();
const title_ = ref("");
const price_ = ref("");
const description_ = ref("");
const category_ = ref("");
const tabIndex = ref(0);

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
    <LoaderComponent :state="isLoading">
      <LayoutMenu>
        <template #left-side>
          <ul>
            <li @click="() => (tabIndex = 0)">Add product</li>
            <li @click="() => (tabIndex = 1)">See products</li>
          </ul>
        </template>
        <template #menu-side>
          <CredentialsComponent v-if="tabIndex === 0">
            <template #title> Add new product </template>
            <template #inputs>
              <input type="text" placeholder="title" v-model="title_" />
              <input type="number" placeholder="price" v-model="price_" />
              <input
                type="text"
                placeholder="description"
                v-model="description_"
              />
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
          <ProductsTable v-if="tabIndex === 1"></ProductsTable>
        </template>
      </LayoutMenu>
    </LoaderComponent>
  </div>
</template>
<style scoped>
.sidenav {
  position: absolute;
  background-color: red;
  width: 30%;
  height: 3em;
}
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
ul {
  padding-left: 2em;
  margin-left: 3em;
  list-style-type: none;
  border-left: 1px solid black;
}
li {
  font-size: 1.2em;
  margin-bottom: 1.5em;
  cursor: pointer;
}
li :hover {
  text-decoration: underline;
  color: red;
}
</style>
