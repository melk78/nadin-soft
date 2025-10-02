<script setup>
import { RouterView } from 'vue-router'
import {onMounted, ref} from 'vue'
import LoginView from "@/views/LoginView.vue";
import {useDataUserStore} from "@/stores/user.js";
import MenuBar from "@/views/MenuBar.vue";

const isActive = ref(true);
const userDate = useDataUserStore();
const getData = userDate.getUserDate;

if(getData.userName.length > 0){
  isActive.value = false;
}

onMounted( () => {
  userDate.loadUser();
})
</script>

<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>app bar</v-toolbar-title>
    </v-app-bar>

     <v-main>
      <v-container>
       <menu-bar></menu-bar>
        <RouterView />
      </v-container>
      <login-view v-model:isActive="isActive"></login-view>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);

    &.router-link-exact-active {
      color: var(--color-text);

      &:hover {
        background-color: transparent;
      }
    }

    &:first-of-type {
      border: 0;
    }
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);

    .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
