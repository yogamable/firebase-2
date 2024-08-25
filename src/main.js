import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import {auth, onAuthStateChanged} from './auth';

let app;

//onAuthStateChange es un observador que dispara una función que cambia el estado de autenticación del usuario

onAuthStateChanged(auth, async(user)=>{
    if(user){
        store.commit("AUTH_USER", user)
    } else {
        store.commit("CLEAR_USER");
    }
});

// Para que al actualizar la pagina no se pierda el estado de autenticación

if(!app){
    app  = createApp(App).use(store).use(router).mount('#app');
}
