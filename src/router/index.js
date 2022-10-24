import { createRouter, createWebHistory } from "vue-router";
import { useUserCredentials } from "../stores/useUser";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: () => import("../views/WishlistView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdministrationView.vue"),
      beforeEnter() {
        const store = useUserCredentials();
        if (store.isLoggedIn) return true;
        else {
          alert("Please login first");
          return "/";
        }
      },
    },
  ],
});

export default router;
