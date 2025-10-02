<script setup>
import {ref} from "vue";
import {useI18n} from "vue-i18n";

const drawer = ref(true)
const {t} = useI18n();

const menuItems = [
  { title: t('navigation.dashbord'), route: '/' },
  { title: t('navigation.todo'), route: '/todo' },
  { title: t('navigation.weather'), route: '/weather' },
  { title: t('navigation.profile'), route: '/profile' },
]
</script>

<template>
  <v-navigation-drawer
      v-model="drawer"
      app
      permanent
      location="right"
      color="primary"
      style="padding: 0; margin: 0"
  >
    <v-col style="padding: 0">
      <v-list>
        <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.route"
            link
            style="width: 100%; text-align: right;"
        >
          <v-list-item-title >{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-col>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">

</style>
