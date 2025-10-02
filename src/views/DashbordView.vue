<script setup>
import {computed} from "vue";
import {useDataUserStore} from "@/stores/user.js";
import {useI18n} from "vue-i18n";

const { t } = useI18n();
const userName = useDataUserStore().getUserDate.userName;
const date = new Date();
const hours = date.getHours();
const min = date.getMinutes();

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
    <v-card style="display: flex;flex-flow: column;  padding: 16px; text-align: center; gap: 16px">
      <h1>
        {{hours}}:{{min}}
      </h1>
      <h2>
        <strong>{{userName}}</strong> {{massege}}
      </h2>
    </v-card>
</template>
