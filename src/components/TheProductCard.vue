<script setup>
import useWishlist from "../composables/wishlist";

const props = defineProps({
  title: String,
  price: Number,
  img: String,
  id: Number,
});
// eslint-disable-next-line no-unused-vars
const { products, deleteProduct, addToWishlist, counter } = useWishlist();
</script>
<template>
  <div class="product-container">
    <img :src="img" class="img" />
    <div class="title">{{ props.title }}</div>
    <div class="rest">
      <span class="price">${{ props.price }}</span>
      <span
        class="addbutton"
        @click="
          addToWishlist({
            id: props.id,
            title: props.title,
            price: props.price,
            image: props.img,
          })
        "
        >Add to wishlist</span
      >
    </div>
  </div>
</template>
<style scoped>
.product-container {
  width: 15em;
  margin: 0.2em;
  float: left;
  margin: 20px;
  height: 24em;
}
@media screen and (max-width: 1200px) {
  .product-container {
    margin: 10px;
  }
}
.img {
  width: 240px;
  height: 300px;
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
