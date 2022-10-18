import { onMounted, ref } from "vue";
const useProducts = () => {
  const products = ref([]);
  const isLoading = ref(false);
  const allProducts = ref([]);

  const loadProducts = async () => {
    isLoading.value = true;
    const data = await fetch("https://fakestoreapi.com/products");
    products.value = await data.json();
    allProducts.value = products.value;
    isLoading.value = false;
  };

  const resetProducts = () => {
    products.value = allProducts.value;
  };

  const filterProducts = (categoryName) => {
    products.value = products.value.filter(
      (product) => product.category === categoryName
    );
  };

  onMounted(() => {
    loadProducts();
  });
  return { products, isLoading, resetProducts, filterProducts };
};
export default useProducts;
