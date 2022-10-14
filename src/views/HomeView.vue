<script setup>
import { ref } from "vue";
import CategoryItem from "../components/CategoryItem.vue";
import TheProduct from "../components/TheProduct.vue";
import TheNavigation from "../components/TheNavigation.vue";
// import TheProduct from "../components/TheProduct.vue";
// import SliderComponent from "../components/SliderComponent.vue";
const categories = ref([]);
fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((json) => (categories.value = json));

const trending = ref([]);
fetch("https://fakestoreapi.com/products?limit=8")
  .then((res) => res.json())
  .then((json) => (trending.value = json));
</script>
<template>
  <div>
    <TheNavigation></TheNavigation>
    <div class="main">
      <!-- <h1>here</h1> -->
      <div class="img-wrapper">
        <img src="https://picsum.photos/id/465/1200/600.jpg" class="image" />
        <div class="textimage">
          <span id="title">Title</span>
          <span id="description">some description</span>
          <button id="discover">
            <RouterLink to="/products">Discover now</RouterLink>
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="category-slider">
        <CategoryItem
          v-for="cat in categories"
          :key="cat"
          :categoryName="cat"
        />
      </div>
      <div class="trending">
        <h2>Trending Products</h2>
        <div class="products-wrapper">
          <div class="products">
            <TheProduct
              v-for="pr in trending"
              :key="pr.id"
              :title="pr.title"
              :price="pr.price"
              :id="pr.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  margin-top: 3em;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
}
a {
  text-decoration: none;
  color: black;
}
.img-wrapper {
  /* position: relative; */
  max-width: 1250px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.image {
  /* width: 100%; */
  position: absolute;
}
.textimage {
  z-index: 10;
  position: absolute;
  margin-top: 5em;
  font-size: xx-large;
  margin-left: 10em;
  display: grid;
}
#title {
  font-size: 2em;
}
#description {
  color: rgb(157, 157, 157);
  font-size: x-large;
  width: 10em;
}
#discover {
  background-color: transparent;
  border: 1px solid black;
  margin-top: 2em;
  width: 10em;
  font-size: 0.7em;
  cursor: pointer;
}
.container {
  padding-top: 42em;
  max-width: 1250px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.category-slider {
  display: flex;
  width: 100%;
  justify-content: center;
}
.trending {
  width: 10em;
  margin-top: 6em;
  width: 100%;
}
h2 {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2em;
  color: rgb(50, 50, 50);
}

h2:before,
h2:after {
  content: "";
  border-top: 1px solid rgb(174, 174, 174);
  margin: 0 20px 0 0;
  flex: 1 0 20px;
}

h2:after {
  margin: 0 0 0 20px;
}
.products {
  align-items: center;
}
</style>
