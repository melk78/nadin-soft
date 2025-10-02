<script setup>
import { reactive } from "vue";
import { useDataUserStore } from "@/stores/user";

const userStore = useDataUserStore();

const form = reactive({
  userName: userStore.user.userName,
  email: userStore.user.email,
  password: userStore.user.password,
  theme: userStore.theme,
  locale: userStore.locale,
});

const save = () => {
  const save = userStore.saveProfile(form);
  console.log(save, 'save');
 const load =  userStore.loadProfile();
  console.log(load, 'load');
};
function itemProps (item) {
  return {
    title: item.text,
    subtitle: item.value,
  }
}
</script>

<template>
  <v-container class="d-flex justify-center pa-10">
    <v-card width="400" outlined class="pa-6">
      <v-card-text>
        <v-text-field
            v-model="form.userName"
            :label="$t('login.userName')"
            variant="outlined"
            dense
        />
        <v-text-field
            v-model="form.email"
            :label="$t('login.email')"
            variant="outlined"
            dense
        />
        <v-text-field
            v-model="form.password"
            :label="$t('login.password')"
            variant="outlined"
            dense
        />

        <v-select
            v-model="form.theme"
            :item-props="itemProps"
            :items="[
            { text: $t('login.light'), value: 'light' },
            { text: $t('login.dark'), value: 'dark' },
          ]"
            :label="$t('login.theme')"
            variant="outlined"
            dense
        />

        <v-select
            v-model="form.locale"
            :item-props="itemProps"
            :items="[
            { text: $t('login.farsi'), value: 'fa' },
            { text: $t('login.english'), value: 'en' },
          ]"
            :label="$t('login.language')"
            variant="outlined"
            dense
        />
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="success" variant="flat" size="large" @click="save" block >Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

