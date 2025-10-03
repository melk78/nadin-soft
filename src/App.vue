<script setup>
import { RouterView } from 'vue-router'
import {onMounted, ref, computed} from 'vue'
import LoginView from "@/views/LoginView.vue";
import {useDataUserStore} from "@/stores/user.js";
import {useDisplay} from "vuetify/framework";
import {useI18n} from "vue-i18n";

const isActive = ref(true);
const {t} = useI18n();
// store
const userDate = useDataUserStore();
const getData = computed(() => userDate.getUserDate);

if(getData.value.userName.length > 0){
  isActive.value = false;
}
// Get display information (for mobile/desktop detection)
const display = useDisplay();
const isMobile = computed(() => display.mobile.value);

const drawer = ref(true);

const menuItems = ref([
  { title: t('navigation.dashbord'), route: '/' },
  { title: t('navigation.todo'), route: '/todo' },
  { title: t('navigation.weather'), route: '/weather' },
  { title: t('navigation.profile'), route: '/profile' },
])

const closeDrawer = () => {
  if (display.mobile.value) drawer.value = false;
};
onMounted( () => {
  userDate.loadUser();
})
</script>

<template>
  <v-app>
    <!--    app bar   -->
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon
          icon="icon-bars"
          v-if="isMobile"
          @click="drawer = !drawer"
      />
      <v-toolbar-title>app bar</v-toolbar-title>
    </v-app-bar>

     <v-main>
      <v-container>
       <!--        menu        -->
        <v-navigation-drawer
            v-model="drawer"
            app
            :width="!isMobile ? '250': '200'"
            location="left"
            color="primary"
            style="padding: 0; margin: 0;"
            temporary
            :permanent="!isMobile"
        >
          <v-col style="padding: 0">
            <v-list>
              <v-list-item
                  v-for="item in menuItems"
                  :key="item.title"
                  :to="item.route"
                  link
                  style="width: 100%; text-align: center;"
                  @click="closeDrawer"
              >
                <v-list-item-title >{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-navigation-drawer>
        <RouterView />
      </v-container>
      <!--       login      -->
      <login-view v-model:isActive="isActive"></login-view>
    </v-main>
  </v-app>
</template>
