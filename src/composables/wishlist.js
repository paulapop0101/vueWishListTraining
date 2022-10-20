import { onMounted, ref } from "vue";
import { useProductList } from "../stores/useProducts";
const useWishlist = () => {
  const products = ref([]);
  const store = useProductList();
  onMounted(() => {
    products.value = store.products;
  });
  const deleteProduct = (id) => {
    store.deleteProduct(id);
    products.value = store.products;
  };
  const addToWishlist = (newProduct1) => {
    store.addProduct(newProduct1);
    products.value = store.products;
  };
  return { products, deleteProduct, addToWishlist };
};

export default useWishlist;
