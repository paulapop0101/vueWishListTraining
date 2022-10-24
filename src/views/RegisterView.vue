<script setup>
import CredentialsComponent from "../componentsSlots/CredentialsComponent.vue";
import { ref } from "vue";
import { useUserCredentials } from "../stores/useUser";
const username = ref("");
const firstname = ref("");
const lastname = ref("");
const password = ref("");
const checkPassword = ref("");
const store = useUserCredentials();
const register = () => {
  if (password.value === checkPassword.value)
    store.addUser(username, firstname, lastname, password);
};
</script>
<template>
  <div>
    <CredentialsComponent>
      <template #title> Register </template>
      <template #inputs>
        <form>
          <input type="text" placeholder="firstname" v-model="firstname" />
          <input type="text" placeholder="lastname" v-model="lastname" />
          <input type="text" placeholder="username" v-model="username" />
          <input type="password" placeholder="password" v-model="password" />
          <input
            type="password"
            placeholder="check password"
            v-model="checkPassword"
          />
          <router-link to="/login"
            ><input type="submit" @click="register()"
          /></router-link>
        </form>
        <span
          >Have an account? <router-link to="/login"> Log in</router-link></span
        ></template
      >
    </CredentialsComponent>
  </div>
</template>
<style scoped>
form {
  display: inline-grid;
}
input {
  margin: 0.5em;
  height: 2.3em;
  width: 20em;
}
input[type="submit"] {
  background-color: black;
  color: white;
  cursor: pointer;
}
a {
  color: black;
}
</style>
