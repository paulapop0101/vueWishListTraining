import { onMounted, ref, computed } from "vue";
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
  const addToWishlist = (newProduct1) => {
    let newProduct;
    if (localStorage.getItem("products")) {
      newProduct = JSON.parse(localStorage.getItem("products"));
      newProduct = newProduct.filter(
        (product) => product.id !== newProduct1.id
      );
    }
    newProduct.push(newProduct1);
    localStorage.setItem("products", JSON.stringify(newProduct));
    window.dispatchEvent(new Event("storage"));
  };
  const counter = computed(() => {
    console.log(products.value);
    return products.value.length;
  });
  window.addEventListener("storage", () => {
    updateProducts();
  });
  return { products, deleteProduct, addToWishlist, counter };
};

export default useWishlist;
