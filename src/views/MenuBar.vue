<!--<script setup>-->
<!--import {computed, ref, watch} from "vue";-->
<!--import {useI18n} from "vue-i18n";-->
<!--import {useDisplay} from "vuetify/framework";-->
<!--// define model-->
<!--const drawer = defineModel('drawer')-->
<!--const display = useDisplay();-->
<!--const isMobile = computed(() => display.mobile.value)-->
<!--const mdAndUp = computed(() => display.mdAndUp.value);-->

<!--// i18n-->
<!--const {t} = useI18n();-->
<!--// menu list-->
<!--const menuItems = [-->
<!--  { title: t('navigation.dashbord'), route: '/' },-->
<!--  { title: t('navigation.todo'), route: '/todo' },-->
<!--  { title: t('navigation.weather'), route: '/weather' },-->
<!--  { title: t('navigation.profile'), route: '/profile' },-->
<!--]-->

<!--const closeDrawer = () => {-->
<!--  if (display.mobile.value) drawer.value = false;-->
<!--};-->

<!--watch(mdAndUp, () => {-->
<!--  if(mdAndUp === true) drawer.value = false;-->
<!--  else drawer.value = true;-->
<!--})-->
<!--</script>-->

<!--<template>-->
<!--  <v-navigation-drawer-->
<!--      v-model="drawer"-->
<!--      app-->
<!--      permanent-->
<!--      location="right"-->
<!--      color="primary"-->
<!--      style="padding: 0; margin: 0"-->
<!--      temporary-->
<!--  >-->
<!--    <v-col style="padding: 0">-->
<!--      <v-list>-->
<!--        <v-list-item-->
<!--            v-for="item in menuItems"-->
<!--            :key="item.title"-->
<!--            :to="item.route"-->
<!--            link-->
<!--            style="width: 100%; text-align: right;"-->
<!--            @click="closeDrawer"-->
<!--        >-->
<!--          <v-list-item-title >{{ item.title }}</v-list-item-title>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-col>-->
<!--  </v-navigation-drawer>-->
<!--</template>-->

<!--<style scoped lang="scss">-->

<!--</style>-->
