<script setup>
import {reactive, ref} from "vue";
import {useDataUserStore} from "@/stores/user.js";

const stateDataUser = useDataUserStore()

const DataUser = reactive({
  userName: '',
  email: '',
  password: '',
  savedAt: new Date(),
});

const isActive = defineModel('isActive');

const loading = ref(false)
const form = ref(false);

function onSubmit () {
  if (!form.value) return

  stateDataUser.setUser(DataUser);

  loading.value = true
  setTimeout(() => (loading.value = false), 2000)

  isActive.value = false
}


const rules = {
  required: value => !!value || 'این فیلد ضروری است.',
  min: v => v.length >= 8 || 'رمز وارد شده باید بیش از ۸ حرف باشد',
}

const show = ref(false)
</script>

<template>
  <v-dialog v-model="isActive" persistent max-width="500">

    <template v-slot:default="{ isActive }">
      <v-card title="ثبت نام" style="background: white">
        <v-card-text>
          <v-form @submit.prevent="onSubmit"  v-model="form">
            <v-text-field
                placeholder="نام کاربری"
                v-model="DataUser.userName"
                variant="outlined"
                class="mt--8px"
                :readonly="loading"
                style="margin-top: 8px"
                :rules="[() => !!DataUser.userName || 'این فیلد ضروری است']"
            ></v-text-field>

            <v-text-field
                placeholder="ایمیل"
                v-model="DataUser.email"
                class="mt--8px"
                variant="outlined"
                :readonly="loading"
                style="margin-top: 8px"
                :rules="[() => !!DataUser.email || 'این فیلد ضروری است']"
            ></v-text-field>

            <v-text-field
                v-model="DataUser.password"
                :append-icon="show ? 'icon-eye' : 'icon-eye-slash'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                placeholder="رمز عبور"
                variant="outlined"
                style="margin-top: 8px"
                :readonly="loading"
                counter
                @click:append="show = !show"
            ></v-text-field>
            <v-btn
                text="تایید"
                :disabled="!form"
                :loading="loading"
                color="success"
                size="large"
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
