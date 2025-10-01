<script setup>
import { cities } from "@/api/cities.js";
import {computed, ref} from "vue";
import {useDataUserStore} from "@/stores/user.js";

const storeData = useDataUserStore()
const selectedCity = ref('');
const loading = ref(false);
const errorMsg = ref('');

const getWeatherApi = async () => {
  try {
    loading.value = true;
    errorMsg.value= '';

    await storeData.fetchWeather(selectedCity.value, cities)
    await storeData.fetchCurrent();


  } catch (e) {
    errorMsg.value =  'خطا در دریافت اطلاعات آب و هوا ';
  } finally {
    loading.value = false;
  }
}

const allCity = ref([]);
allCity.value = cities.map(item => item.city);

const current = computed(() => storeData.getCurrent);

</script>

<template>

  <v-autocomplete
      v-model="selectedCity"
      :items="allCity"
      item-title="name"
      variant="outlined"
      label="انتخاب شهر"
      :loading="loading"
      @update:model-value="getWeatherApi"
  />
  <v-card>
    <div v-if="!errorMsg">
      <v-card-text>
        شهر: {{selectedCity}}
      </v-card-text>
      <v-card-text>
        دما: {{current.temperature}} °C
      </v-card-text>
      <v-card-text>
        جهت باد: {{current.windDirection}}
      </v-card-text>
      <v-card-text>
        سرعت باد: {{current.windSpeed}} km/h
      </v-card-text>
      <v-card-text>
        بادخیز: {{current.windy}}
      </v-card-text>
    </div>
    <div v-else style="padding: 42px; text-align: center;">
      {{errorMsg}}
    </div>

  </v-card>
</template>

<style scoped>

</style>
