<script setup>
import { RouterView } from 'vue-router'
import {useI18n} from "vue-i18n";
import { ref } from 'vue'
import LoginView from "@/views/LoginView.vue";
import {useDataUserStore} from "@/stores/user.js";

const drawer = ref(true)
const t = useI18n();
// آیتم‌های منو با مسیرهای Vue Router
const menuItems = [
  { title: 'داشبورد', route: '/' },
  { title: 'todo', route: '/todo' },
  { title: 'آب و هوا', route: '/weather' },
  { title: 'پروفایل', route: '/profile' },
]
const isActive = ref(true);
const userDate = useDataUserStore();
const getData = userDate.getUserName;

console.log(getData);
if(getData.userName.length > 0){
  isActive.value = false;
}
</script>

<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>داشبورد من</v-toolbar-title>
    </v-app-bar>

     <v-main>
      <v-container>
        <v-navigation-drawer
            v-model="drawer"
            app
            permanent
            location="right"
            color="primary"
            style="padding: 0; margin: 0"
        >
        <v-col style="padding: 0">
            <v-list style="background: #2c3e50">
              <v-list-item
                  v-for="item in menuItems"
                  :key="item.title"
                  :to="item.route"
                  link
                  style="width: 100%; text-align: right; background: #2c3e50"
              >
                <v-list-item-title style="color: white">{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
        </v-col>
        </v-navigation-drawer>
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
