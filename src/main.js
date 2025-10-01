// Import styles
import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import vuetify from './plugins/vuetify.js'
import {watch} from "node:fs";

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(vuetify)

// تغییر جهت بر اساس زبان
watch(
    () => i18n.global.locale.value,
    (lang) => {
        document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr')
        document.documentElement.setAttribute('lang', lang)
    },
    { immediate: true }
)

app.mount('#app')
