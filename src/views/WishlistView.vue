<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
const products = ref([]);
onMounted(() => {
  updateProducts();
});
function updateProducts() {
  if (localStorage.getItem("products")) {
    products.value = JSON.parse(localStorage.getItem("products"));
    console.log(products.value);
  }
}
function deleteProduct(id) {
  let storageProducts = JSON.parse(localStorage.getItem("products"));
  let products = storageProducts.filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
  updateProducts();
}
</script>
<template>
  <div>
    <div class="main">
      <div class="image-container">
        <img src="https://picsum.photos/id/465/2000/400.jpg" class="img" />
        <div class="text">
          <h1>Wishlist</h1>
          <RouterLink to="/">Home/ </RouterLink
          ><span id="wishbutton"> Wishlist </span>
        </div>
      </div>
      <div class="content">
        <h1 class="title">My wishlist</h1>
        <table>
          <tr>
            <th></th>
            <th></th>
            <th>Products</th>
            <th>Unit Price</th>
            <th></th>
          </tr>
          <tr v-for="(pr, index) in products" :key="index">
            <td>{{ index + 1 }}</td>
            <td><img src="https://picsum.photos/50/70" /></td>
            <td>{{ pr.title }}</td>
            <td>{{ pr.price }}</td>
            <td><button @click="deleteProduct(pr.id)">Delete</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
body {
  margin: 0 !important;
}
table {
  width: 900px;
  font-size: large;
  border-top: 1px solid rgb(158, 158, 158);
  border-left: 1px solid rgb(228, 228, 228);
  border-right: 1px solid rgb(228, 228, 228);
  text-align: left;
  border-spacing: 0;
}
th,
td {
  border-bottom: 0.2px solid rgb(242, 242, 242);
  padding-left: 1em;
  padding-right: 1em;
}
td:last-child {
  width: 3em;
}
td:first-child {
  border-right: 1px solid rgb(193, 193, 193);
  width: 2em;
  text-align: center;
}
td:nth-child(2) {
  border-right: 1px solid rgb(235, 235, 235);
  width: 3em;
  text-align: center;
}
th:first-child {
  border-right: 1px solid rgb(206, 206, 206);
}
th:nth-child(2) {
  border-right: 1px solid rgb(235, 235, 235);
}
button {
  font-size: 0.8em;
  font-weight: 60;
  padding: 6px;
  width: 6em;
  background-color: rgba(227, 87, 79, 0.786);
  border: none;
  color: white;
  cursor: pointer;
}
.image-container {
  display: flex;
  justify-content: center;
}
.img {
  width: 100%;
  height: 400px;
  position: absolute;
}
.text {
  position: absolute;
  font-size: 1.5em;
  margin-top: 4em;
}
a {
  text-decoration: none;
  color: black;
}
.content {
  margin: auto;
  margin-top: 400px;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 5em;
}
.title {
  font-size: 1.5em;
  padding-top: 3em;
  padding-left: 3em;
  padding-bottom: 1.5em;
}
</style>
