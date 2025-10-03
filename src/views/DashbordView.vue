<script setup>
import {computed} from "vue";
import {useDataUserStore} from "@/stores/user.js";
import {useI18n} from "vue-i18n";

const { t } = useI18n();
// get user name from store
const userName = useDataUserStore().getUserDate.userName;
// date
const date = new Date();
const hours = date.getHours();
const min = date.getMinutes();

// set data for windly
const massege = computed(() => {
  if (hours >= 12 && hours < 18) {
   return t('message.evening');
  } else if (hours >= 18) {
   return t('message.night');
  } else {
    return t('message.morning')
  }
})
</script>

<template>
  <v-container class="d-flex justify-center pa-10">
    <v-card width="600" outlined class="pa-6" align="center">
      <h1>
        {{hours}}:{{min}}
      </h1>
      <h2>
        <strong>{{userName}}</strong> {{massege}}
      </h2>
    </v-card>
  </v-container>

</template>
