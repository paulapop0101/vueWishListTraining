import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductList = defineStore("products", () => {
  const products = ref([]);

  function addProduct(product) {
    products.value.push(product);
  }
  function deleteProduct(id) {
    products.value = products.value.filter((product) => product.id !== id);
  }
  return { products, addProduct, deleteProduct };
});
