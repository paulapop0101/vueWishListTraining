import { onMounted, ref } from "vue";
import { useWishList } from "../stores/useWishlist";
const useWishlist = () => {
  const products = ref([]);
  const store = useWishList();
  onMounted(() => {
    products.value = store.wishlist;
  });
  const deleteProduct = (id) => {
    store.deleteProductFromWishlist(id);
    products.value = store.wishlist;
  };
  const addToWishlist = (newProduct1) => {
    store.addProductToWishlist(newProduct1);
    products.value = store.wishlist;
  };
  return { products, deleteProduct, addToWishlist };
};

export default useWishlist;
