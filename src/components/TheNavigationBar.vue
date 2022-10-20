<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import useWishlist from "../composables/wishlist";

const showNavBar = ref(true);
// eslint-disable-next-line no-unused-vars
const { products, deleteProduct, addToWishlist } = useWishlist();
onMounted(() => {
  useRoute().name === "wishlist"
    ? (showNavBar.value = false)
    : (showNavBar.value = true);
});
</script>

<template>
  <div class="wrapper" v-if="showNavBar">
    <div class="navi">
      <div class="one">
        <div class="left">
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/products">Products</RouterLink></li>
          </ul>
        </div>
        <div class="right">
          <RouterLink to="/wishlist">
            Wishlist ({{ products.length }})</RouterLink
          >
        </div>
      </div>
      <div class="center">Outstock</div>
    </div>
  </div>
</template>

<style scoped>
.navi {
  /* width: 100%; */
  max-width: 1280px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
}
ul {
  list-style-type: none;
  display: inline-flex;
}
li {
  padding-left: 1em;
  padding-right: 1em;
}
.left {
  max-width: 10em;
  margin: 0;
  padding: 0;
  float: left;
}
.one {
  position: inherit;
}
.center {
  position: absolute;
  left: 50%;
  margin-left: -80px !important;
  display: block;
  margin-top: 0.2em;
  font-size: 2em;
}
.right {
  float: right;
  margin-top: 1em;
  margin-right: 3em;
}
a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
a:hover {
  text-decoration: underline;
}
</style>
