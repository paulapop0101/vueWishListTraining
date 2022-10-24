import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  const products = ref([]);
  function addProduct(product) {
    products.value.push(product);
  }
  return { products, addProduct };
});
