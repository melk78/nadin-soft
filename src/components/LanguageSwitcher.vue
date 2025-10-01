<template>
  <v-btn @click="toggleLang" color="primary">
    {{ $t("switch") }}
  </v-btn>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function toggleLang() {
  locale.value = locale.value === 'fa' ? 'en' : 'fa'
}
</script>
