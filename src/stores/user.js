import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataUserStore = defineStore('User', () => {
 const user =ref({
   userName: localStorage.getItem('userName') || '',
   email: localStorage.getItem('email') || '',
   password: localStorage.getItem('email') || '',
 })
    const getUserName = computed(() => user.value);

 function setUser(value){
     user.value.userName = value.userName;
     user.value.email = value.email;
     user.value.password = value.password;

     localStorage.setItem('userName', value.userName)
     localStorage.setItem('email', value.email)
     localStorage.setItem('password', value.password)
 }
 return{
     //state
     user,

     //getters
      getUserName,

     //action
     setUser,
 }
})
