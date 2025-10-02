import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles' // استایل‌های پایه

const vuetify = createVuetify({
  rtl: {
    fa: true,
    en: false
  },
  components,
  directives,
  theme: {
    defaultTheme: 'lightTheme', // حالت پیش‌فرض
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          primary: '#2c3e50',
          secondary: '#8e44ad',
          accent: '#e67e22',
          background: '#ffffff',
          surface: '#f5f5f5',
        },
      },
      darkTheme: {
        dark: true,
        colors: {
          primary: '#3498db',
          secondary: '#9b59b6',
          accent: '#f39c12',
          background: '#121212',
          surface: '#1e1e1e',
        },
      },
    },
  },
})

export default vuetify
