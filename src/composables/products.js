import { onMounted, ref } from "vue";
import { useProductsStore } from "../stores/useProducts";
const useProducts = () => {
  const products = ref([]);
  const isLoading = ref(false);
  const allProducts = ref(false);
  const storeProducts = useProductsStore();

  const loadProducts = async () => {
    isLoading.value = true;
    const data = await fetch("https://fakestoreapi.com/products");
    allProducts.value = await data.json();
    storeProducts.products.forEach((product) => {
      allProducts.value.push(product);
    });
    products.value = allProducts.value;
    isLoading.value = false;
    console.log(products.value);
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
