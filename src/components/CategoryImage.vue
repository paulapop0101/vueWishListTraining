<script setup>
defineProps({
  categoryName: String,
});
</script>
<template>
  <div class="category-container">
    <img src="https://picsum.photos/id/465/160.jpg" class="image" />
    <div class="textimage">
      <span id="title">{{ categoryName }}</span>
    </div>
  </div>
</template>
<style scoped>
.category-container {
  width: 10em;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
}
.image {
  /* width: 100%; */
  position: absolute;
}
.textimage {
  margin-top: 5em;
  font-size: small;
  text-align: center;
  justify-content: center;
  display: flex;
  position: relative;
}
#title {
  font-size: 20px;
}
</style>
