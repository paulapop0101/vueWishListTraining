import { onMounted, ref } from "vue";
const useWishlist = () => {
  const products = ref([]);

  const updateProducts = () => {
    if (localStorage.getItem("products")) {
      products.value = JSON.parse(localStorage.getItem("products"));
    }
  };
  const deleteProduct = (id) => {
    let storageProducts = JSON.parse(localStorage.getItem("products"));
    let products = storageProducts.filter((product) => product.id !== id);
    localStorage.setItem("products", JSON.stringify(products));
    updateProducts();
  };
  onMounted(() => {
    updateProducts();
  });
  const addToWishlist = (newProduct) => {
    if (localStorage.getItem("products")) {
      products.value = JSON.parse(localStorage.getItem("products"));
      products.value = products.value.filter(
        (product) => product.id !== newProduct.id
      );
    }
    products.value.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products.value));
  };
  return { products, deleteProduct, addToWishlist };
};

export default useWishlist;
