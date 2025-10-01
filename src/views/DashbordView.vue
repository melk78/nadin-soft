<script setup>
import {ref} from "vue";
import {useDataUserStore} from "@/stores/user.js";

const userName = useDataUserStore().getUserDate.userName;
const date = new Date();
const hours = date.getHours();
const min = date.getMinutes();
const text = ref('روز بخیر خوش‌آمدید');

if (hours >= 12 && hours < 18) {
  text.value = 'عصر بخیر خوش آمدید';
} else if (hours >= 18) {
  text.value = 'شب بخیر خوش آمدید';
}
</script>

<template>
    <v-card style="display: flex;flex-flow: column;  padding: 16px; text-align: center; gap: 16px">
      <h1>
        {{hours}}:{{min}}
      </h1>
      <h2>
        {{text}} <strong>{{userName}}</strong>
      </h2>
    </v-card>
</template>

<style scoped>

</style>
