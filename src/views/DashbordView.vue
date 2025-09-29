<script setup>
import {ref} from "vue";

const date = new Date();
const hours = date.getHours();
const min = date.getMinutes();
const text = ref('Good Morning');
if (hours >= 12 && hours < 18) {
  text.value = 'Good Afternoon';
} else if (hours >= 18) {
  text.value = 'Good Evening';
}
</script>

<template>
    <v-card>
      <div>
        {{hours}}:{{min}}
      </div>
      <p>
        {{text}}
      </p>
    </v-card>
</template>

<style scoped>

</style>
