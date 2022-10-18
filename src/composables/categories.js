import { onMounted, ref } from "vue";
const useCategories = () => {
  const categoryNames = ref([]);
  const categories = ref([]);
  const isLoading = ref(false);

  const loadCategories = async () => {
    isLoading.value = true;
    const data = await fetch("https://fakestoreapi.com/products/categories");
    categoryNames.value = await data.json();
    categoryNames.value.forEach((element) => {
      categories.value.push({ name: element, clicked: false });
    });
    console.log(categories.value);
    isLoading.value = false;
  };

  const resetCategoryButtons = (categoryName) => {
    categories.value.forEach((obj) => {
      if (obj.name !== categoryName) obj.clicked = false;
    });
  };

  onMounted(() => {
    loadCategories();
  });
  return { categories, isLoading, resetCategoryButtons };
};

export default useCategories;
