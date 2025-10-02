<script setup>
import { cities } from "@/api/cities.js";
import {computed, ref} from "vue";
import {useDataUserStore} from "@/stores/user.js";
import {useI18n} from "vue-i18n";

const storeData = useDataUserStore()
const selectedCity = ref(null);
const loading = ref(false);
const errorMsg = ref('');
const { t } = useI18n();
const getWeatherApi = async () => {
  try {
    loading.value = true;
    errorMsg.value= '';

    await storeData.fetchWeather(selectedCity.value, cities)
    await storeData.fetchCurrent();

  } catch (e) {
    errorMsg.value =  t('errors.noWeather');
  } finally {
    loading.value = false;
  }
}

const allCity = ref([]);
allCity.value = cities.map(item => item.city);
const current = computed(() => storeData.getCurrent);

const currentList = computed(() => [
  { id: 1, value: 'city', text: selectedCity.value || '', label: t('weather.city') },
  { id: 2, value: 'temperature', text: current.value.temperature || '', label: t('weather.temperature') },
  { id: 3, value: 'windDirection', text: current.value.windDirection || '', label: t('weather.windDirection') },
  { id: 4, value: 'windSpeed', text: current.value.windSpeed || '', label: t('weather.windSpeed') },
  { id: 5, value: 'windy', text: t(`weather.${current.value.windy}`) || '', label: t('weather.windy') }
])
</script>

<template>

  <v-card class="card">
    <v-autocomplete
        v-model="selectedCity"
        :items="allCity"
        item-title="name"
        variant="outlined"
        :label="$t('weather.labelCity')"
        :loading="loading"
        @update:model-value="getWeatherApi"
    />

    <div v-if="!errorMsg">
      <v-list>
        <v-list-item
            v-for="item in currentList"
            :key="item.id"
            class="card__item"
        >
          <v-list-item-title class="text-high-emphasis opacity-60">{{ item.label }}</v-list-item-title>

          <template v-slot:append>
            <v-list-item-action class="flex-column align-end">
              <strong>{{ item.text }}</strong>
            </v-list-item-action>
          </template>
        </v-list-item>

      </v-list>
    </div>
    <div v-else style="padding: 42px; text-align: center;">
      {{errorMsg}}
    </div>

  </v-card>
</template>
<style scoped lang="scss">
.card{
  padding: 8px 16px;

  &__item{
    border-top: 1px solid #e5e5e5;
    &:first-child{
      border-top: 1px solid transparent;
    }
  }
}
</style>
