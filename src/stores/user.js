import {ref, computed, reactive} from 'vue'
import { defineStore } from 'pinia'

const EXPIRY_HOURS = 1
// const createdAt = ref(new Date());

export const useDataUserStore = defineStore('User', () => {
    //state
     const user =ref({
       userName: localStorage.getItem('userName') || '',
       email: localStorage.getItem('email') || '',
       password: localStorage.getItem('email') || '',
       savedAt: localStorage.getItem('savedAt') || null // زمان ذخیره
     })
     const weather = ref();
    const current = ref({
        temperature: '',
        windSpeed: '',
        windDirection: '',
        windy:'',
    })

    //getter
    const getUserDate = computed(() => user.value);
    const getWeather = computed(() => weather.value);
    const getCurrent = computed(() => current.value);

    //actions
    function setUser(value){
         user.value.userName = value.userName;
         user.value.email = value.email;
         user.value.password = value.password;
         user.value.savedAt = value.savedAt || new Date();

         localStorage.setItem('user', JSON.stringify({
             userName: value.userName,
             email: value.email,
             password: value.password,
             savedAt: value.savedAt
         }))
     }

    function loadUser() {
        const raw = localStorage.getItem('user')
        if (raw) {
            const parsed = JSON.parse(raw)
            const now = new Date();
            const diffHours = (now - parsed.savedAt) / (1000 * 60 * 60)

            if (diffHours > EXPIRY_HOURS) {
                // اگر منقضی شده بود
                clearUser()
            } else {
                user.value.userName = parsed.userName
                user.value.email = parsed.email
                user.value.password= parsed.password
                user.value.savedAt = parsed.savedAt
            }
        }
    }

   function clearUser() {
       user.value.userName = '';
       user.value.email = '';
       user.value.password = '';
       user.value.savedAt = null;
        localStorage.removeItem('user')
   }

    const fetchWeather = async (city, cities) => {
        if (!city) return;
        const cityData = {
            lat: '',
            lng: '',
        }
        cities.map(item => {
            if(item.city === city) {
                cityData.lat = item.lat;
                cityData.lng = item.lng;
            }
        });

        if (!cityData)return;
        weather.value = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${Number(cityData.lat)}&longitude=${Number(cityData.lng)}&current_weather=true`
        );
        console.log(weather.value)
    }

    async function fetchCurrent(){
        if (weather.value) {
            const data = await weather.value.json();

            current.value.temperature = data.current_weather?.temperature;
            current.value.windSpeed = data.current_weather?.windspeed;
            current.value.windDirection = data.current_weather?.winddirection;

            if (data.current_weather?.windspeed < 10) current.value.windy = 'آرام'
            else if (data.current_weather?.windspeed < 25) current.value.windy = 'نسبتا باد خیز'
            else current.value.windy = 'باد خیز'
        }
    }



 return{
     //state
     user,
     weather,
     current,

     //getters
     getUserDate,
     getWeather,
     getCurrent,

     //action
     setUser,
     loadUser,
     clearUser,
     fetchWeather,
     fetchCurrent,
 }
})
