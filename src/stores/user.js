import {ref, computed, watch} from 'vue'
import { defineStore } from 'pinia'
import { useTheme } from "vuetify";
import {useI18n} from "vue-i18n";


export const useDataUserStore = defineStore('User', () => {
    //state
    //---------user------
     const user =ref({
       userName: localStorage.getItem('userName') || '',
       email: localStorage.getItem('email') || '',
       password: localStorage.getItem('email') || '',
       savedAt: localStorage.getItem('savedAt') || null // زمان ذخیره
     })
    //---------profile----------
    const theme = ref("light"); // 'light' | 'dark'
    const locale = ref("fa");   // 'fa' | 'en'
    const { locale: i18nLocale } = useI18n({ useScope: "global" });
    const vuetifyTheme = useTheme();
    //-----------weather-----------
    const weather = ref();
    const current = ref({
        temperature: '',
        windSpeed: '',
        windDirection: '',
        windy:'',
    })
    //-----------todoList------------
    const todos = ref(JSON.parse(localStorage.getItem('todos') || []));

    //getter
    const isLoggedIn = computed(() => !!user.value.userName)
    const getUserDate = computed(() => user.value);
    const getWeather = computed(() => weather.value);
    const getCurrent = computed(() => current.value);
    const getTodos = computed(() => todos.value);

    //actions
    //-------------------------user------------------------------
    function setUser(value) {
        user.value.userName = value.userName
        user.value.email = value.email
        user.value.password = value.password
        user.value.savedAt = new Date()

        saveProfile() // ذخیره کل پروفایل در localStorage
    }

    // 📌 logout
    function clearUser() {
        user.value = { userName: '', email: '', password: '', savedAt: null }
        localStorage.removeItem("userProfile")
    }

    function loadUser() {
        const data = localStorage.getItem("userProfile")
        if (data) {
            const parsed = JSON.parse(data)
            const now = new Date()
            const diffHours = (now - new Date(parsed.savedAt)) / (1000 * 60 * 60)

            if (diffHours > 5) {
                clearUser() // منقضی شده
            } else {
                user.value = {
                    userName: parsed.userName,
                    email: parsed.email,
                    password: parsed.password,
                    savedAt: parsed.savedAt
                }
                theme.value = parsed.theme || "light"
                locale.value = parsed.locale || "fa"

                vuetifyTheme.global.name.value = theme.value
                i18nLocale.value = locale.value
            }
        }
    }

   //---------------------------weather---------------------------
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

            if (data.current_weather?.windspeed < 10) current.value.windy = 'Calm'
            else if (data.current_weather?.windspeed < 25) current.value.windy = 'RelativelyWindy'
            else current.value.windy = 'windy'
        }
    }

    //----------------------------todoList-------------------------
    watch(
        todos,
        (newVal) => {
            localStorage.setItem("todos", JSON.stringify(newVal));
        },
        { deep: true }
    );

    const addTodo = (text) => {
        if (!text.trim()) return;
        todos.value.push({ id: Date.now(), text, editing: false });
    };

    const removeTodo = (id) => {
        const index = todos.value.findIndex(t => t.id === id);
        if (index > -1) {
            todos.value.splice(index, 1);
        }
    };

    const startEdit = (todo) => {
        todo.editing = true;
    };

    // edite
    const saveEdit = (todo, newText) => {
        if (newText.trim()) {
            todo.text = newText;
            todo.editing = false;
        }
    };
    //-----------------------------profile------------------------------
    function saveProfile(newData) {
        if (newData) {
            user.value.userName = newData.userName || user.value.userName
            user.value.email = newData.email || user.value.email
            user.value.password = newData.password || user.value.password
            theme.value = newData.theme || theme.value
            locale.value = newData.locale || locale.value
        }

        localStorage.setItem("userProfile", JSON.stringify({
            userName: user.value.userName,
            email: user.value.email,
            password: user.value.password,
            savedAt: user.value.savedAt,
            theme: theme.value,
            locale: locale.value
        }))
    }

    watch(theme, (newTheme) => {
        vuetifyTheme.global.name.value = newTheme;
        saveProfile()
    });

    watch(locale, (newLocale) => {
        i18nLocale.value = newLocale;
        document.dir = newLocale === "fa" ? "rtl" : "ltr"
        saveProfile()
    });

    loadUser();
    return{
        //state
        user,
        weather,
        current,
        todos,
        theme,
        locale,

        //getters
        getUserDate,
        getWeather,
        getCurrent,
        getTodos,
        isLoggedIn,

        //action
        setUser,
        loadUser,
        fetchWeather,
        fetchCurrent,
        addTodo,
        removeTodo,
        startEdit,
        saveEdit,
        saveProfile,
    }
})
