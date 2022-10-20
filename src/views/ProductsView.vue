<script setup>
import { ref } from "vue";
import TheProductCard from "../components/TheProductCard.vue";
import { computed } from "vue";
import useProducts from "../composables/products";
import useCategories from "../composables/categories";
import LoaderComponent from "../components/LoaderComponent.vue";

const term = ref("");

const { products, isLoading, resetProducts, filterProducts } = useProducts();

// eslint-disable-next-line no-unused-vars
const { categories, categoriesAreLoading, resetCategoryButtons } =
  useCategories();

const productList = computed(() => {
  const regex = ".*" + term.value + ".*";
  return products.value.filter((term1) => term1.title.match(regex));
});

function filter(category) {
  resetCategoryButtons(category.name);
  resetProducts();
  category.clicked = !category.clicked;
  if (category.clicked) {
    filterProducts(category.name);
  }
}
</script>
<template>
  <div>
    <LoaderComponent :state="isLoading">
      <div class="main">
        <div class="container">
          <div class="side">
            <div>
              <ul>
                <li><h3>Product Categories</h3></li>
                <li
                  class="catlist"
                  v-for="cat in categories"
                  :key="cat.name"
                  @click="filter(cat)"
                >
                  {{ cat.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="content">
            <div class="search">
              <input type="text" placeholder="Search" v-model="term" />
              <div class="products">
                <TheProductCard
                  v-for="pr in productList"
                  :key="pr.id"
                  :title="pr.title"
                  :price="pr.price"
                  :img="pr.image"
                  :id="pr.id"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoaderComponent>
  </div>
</template>
<style scoped>
.main {
  padding-top: 3em;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1250px;
}
.container {
  width: 100%;
  display: flex;
}
.side {
  width: 20%;
}
.content {
  width: 80%;
}
ul {
  list-style-type: none;
}
li {
  font-size: 1.2em;
  margin-bottom: 1.5em;
}
.catlist {
  cursor: pointer;
}
.catlist :hover {
  text-decoration: underline;
  color: red;
}
.search {
  margin: 0.5em;
}
input[type="text"] {
  display: block;
  width: 10em;
  font-size: 15px;
  font-weight: 400;
  padding: 10px;
  border: 2px solid #c2c2c2;
  height: 0.7em;
  margin-left: 1.1em;
}
.loading {
  display: flex;
  justify-content: center;
  font-size: xx-large;
}
</style>
