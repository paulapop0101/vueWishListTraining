import { ref } from "vue";
import { defineStore } from "pinia";

export const useWishList = defineStore("wishlist", () => {
  const wishlist = ref([]);

  function addProductToWishlist(product) {
    let exists = false;
    wishlist.value.forEach((element) => {
      if (element.id === product.id) exists = true;
    });
    if (!exists) wishlist.value.push(product);
  }
  function deleteProductFromWishlist(id) {
    wishlist.value = wishlist.value.filter((product) => product.id !== id);
  }
  return { wishlist, addProductToWishlist, deleteProductFromWishlist };
});
