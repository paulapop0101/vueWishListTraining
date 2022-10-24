<script setup>
import CredentialsComponent from "../components/CredentialsComponent.vue";
import { ref } from "vue";
import { useUserCredentials } from "../stores/useUser";
const username = ref("");
const password = ref("");
const store = useUserCredentials();

const login = () => {
  store.logUser(username, password);
  console.log(store.isLoggedIn);
};
</script>
<template>
  <div>
    <CredentialsComponent>
      <template #title> Log in </template>
      <template #inputs>
        <form class="formm" style="display: inline-grid !important">
          <input type="text" placeholder="username" v-model="username" />
          <input type="password" placeholder="password" v-model="password" />
          <router-link to="/"
            ><input type="submit" @click="login()"
          /></router-link>
        </form>
        <span
          >No account?<router-link to="/register"> Sign up</router-link></span
        ></template
      >
    </CredentialsComponent>
  </div>
</template>
<style scoped>
.formm {
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
