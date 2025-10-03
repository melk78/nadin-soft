<script setup>
import {reactive, ref} from "vue";
import {useDataUserStore} from "@/stores/user.js";
import {useI18n} from "vue-i18n";
// store
const userStore = useDataUserStore()
// i18n
const { t } = useI18n();
// variable definition user
const DataUser = reactive({
  userName: '',
  email: '',
  password: '',
  savedAt: new Date(),
});
// defineModel to show dialog login
const isActive = defineModel('isActive');

const loading = ref(false)
const form = ref(false);

// register user
function onSubmit () {
  if (!form.value) return

  userStore.setUser(DataUser);

  loading.value = true
  setTimeout(() => (loading.value = false), 2000)

  isActive.value = false
}

// rules to
const rules = {
  required: value => !!value || t('errors.required'),
  min: v => v.length >= 8 || t('errors.min'),
}

const show = ref(false)
</script>

<template>
  <v-dialog v-model="isActive" persistent max-width="500">

    <template v-slot:default="{isActive}">
      <v-card :title="$t('login.title')">
        <v-card-text>
          <v-form @submit.prevent="onSubmit"  v-model="form">
            <!--            name           -->
            <v-text-field
                :placeholder="$t('login.userName')"
                v-model="DataUser.userName"
                variant="outlined"
                :readonly="loading"
                style="margin-top: 8px"
                :rules="[() => !!DataUser.userName || $t('errors.required')]"
            ></v-text-field>
            <!--            email           -->
            <v-text-field
                :placeholder="$t('login.email')"
                v-model="DataUser.email"
                variant="outlined"
                :readonly="loading"
                style="margin-top: 8px"
                :rules="[() => !!DataUser.email || $t('errors.required')]"
            ></v-text-field>
            <!--            password           -->
            <v-text-field
                v-model="DataUser.password"
                :append-icon="show ? 'icon-eye' : 'icon-eye-slash'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                :placeholder="$t('login.password')"
                variant="outlined"
                style="margin-top: 8px"
                :readonly="loading"
                counter
                @click:append="show = !show"
            ></v-text-field>
            <!--            btn           -->
            <v-btn
                :text="$t('buttons.confirmation')"
                :disabled="!form"
                :loading="loading"
                color="success"
                size="x-large"
                type="submit"
                style="margin-top: 24px"
                variant="elevated"
                block
            />
          </v-form>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>

</style>
