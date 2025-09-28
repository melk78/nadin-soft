<template>
  <v-card class="language-switcher ma-4">
    <v-card-title class="text-h4">{{ t('message.hello') }}</v-card-title>
    <v-card-text>
      <p class="text-body-1">{{ t('message.welcome') }}</p>

      <v-card-subtitle class="mt-4">Select Language</v-card-subtitle>
      <v-btn-group class="my-4">
        <v-btn
          @click="changeLanguage('en')"
          :color="currentLocale === 'en' ? 'primary' : ''"
          variant="outlined"
          class="mr-2"
        >
          English
        </v-btn>
        <v-btn
          @click="changeLanguage('fa')"
          :color="currentLocale === 'fa' ? 'primary' : ''"
          variant="outlined"
        >
          فارسی
        </v-btn>
      </v-btn-group>

      <v-card outlined class="mt-4 pa-4">
        <v-list>
          <v-list-item>
            <v-list-item-title>{{ t('navigation.home') }}</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>{{ t('navigation.about') }}</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>{{ t('navigation.contact') }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>

      <v-card outlined class="mt-4 pa-4">
        <v-card-actions>
          <v-btn color="primary" class="mr-2">{{ t('buttons.submit') }}</v-btn>
          <v-btn color="error" class="mr-2">{{ t('buttons.cancel') }}</v-btn>
          <v-btn color="success">{{ t('buttons.save') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
const currentLocale = computed(() => locale.value)

function changeLanguage(lang: 'en' | 'fa') {
  locale.value = lang
}
</script>

<style scoped>
.language-switcher {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.language-buttons {
  margin: 20px 0;
}

.language-buttons button {
  margin-right: 10px;
  padding: 8px 16px;
  cursor: pointer;
}

.language-buttons button.active {
  background-color: #4CAF50;
  color: white;
}

.navigation-example, .buttons-example {
  margin-top: 20px;
  padding: 10px;
  border: 1px dashed #ccc;
}

.buttons-example button {
  margin-right: 10px;
  padding: 8px 16px;
}
</style>
