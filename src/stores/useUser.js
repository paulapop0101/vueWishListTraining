import { ref } from "vue";
import { defineStore } from "pinia";
import User from "../models/User";

export const useUserCredentials = defineStore("user", () => {
  const users = ref([]);
  const isLoggedIn = ref(false);
  function logUser(username_, password_) {
    users.value.forEach((user) => {
      if (
        user.username === username_.value &&
        user.password === password_.value
      )
        isLoggedIn.value = true;
    });
  }
  function addUser(username_, firstname_, lastname_, password_) {
    users.value.push(
      new User(
        firstname_.value,
        lastname_.value,
        username_.value,
        password_.value
      )
    );
  }
  function logoutUser() {
    isLoggedIn.value = false;
  }
  return { isLoggedIn, logUser, addUser, logoutUser };
});
