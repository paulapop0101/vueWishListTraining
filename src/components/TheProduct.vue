<script setup>
const props = defineProps({
  title: String,
  price: Number,
  img: String,
  id: Number,
});
function addToWishlist() {
  let products = [];
  if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
    let products = products.filter((product) => product.id !== props.id);
  }
  products.push({ id: props.id, title: props.title, price: props.price });
  console.log(products);
  localStorage.setItem("products", JSON.stringify(products));
}
</script>
<template>
  <div class="product-container">
    <img src="https://picsum.photos/280/300" class="img" />
    <div class="title">{{ props.title }}</div>
    <div class="rest">
      <span class="price">${{ props.price }}</span>
      <span class="addbutton" @click="addToWishlist()">Add to wishlist</span>
    </div>
  </div>
</template>
<style scoped>
.product-container {
  width: 17em;
  margin: 0.5em;
  float: left;
  margin: 20px;
  height: 24em;
}
.img {
  width: 280;
  height: 300;
}
.title {
  margin-top: 0.5em;
  margin-left: 5px;
  color: gray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.rest {
  margin-left: 5px;
  padding-top: 1em;
  padding-bottom: 0.5em;
}
.price {
  padding-top: 20px;
}
.addbutton {
  float: right;
  padding-right: 5px;
  font-size: 1.5em;
  cursor: pointer;
}
</style>
