<template>
    <div class="login">
      <div class="row d-flex justify-content-center p-3 ps-5 pe-5">
            <h1 class="text-center p-3 text-success">Inicia sesión</h1>
        </div>
        <form class="row p-3 ps-5 pe-5" @submit.prevent="login">
            <div class="row d-flex justify-content-center">
                <label for="staticEmail2" class="form-label text-center">Email:</label>
                <input v-model="email" type="email" class="form-control text-center" id="staticEmail2" placeholder="Ingresa aquí tu email" style="width: 300px;">
            </div>
            <div class="row d-flex justify-content-center pt-3">
                <label for="staticEmail2" class="form-label text-center">Contraseña:</label>
                <input v-model="password" type="password" class="form-control text-center" id="inputPassword2" placeholder="Escribe aquí tu contraseña" style="width: 300px;">
            </div>
            <div class="row d-flex justify-content-center pt-4">
                <button type="submit" class="btn btn-success text-white text-center" style="width: 300px;" >
                  <span class="spinner-border text-success" role="status" aria-hidden="true" v-if="loadingLogin"></span>
                  <p class="m-0" v-if="!loadingLogin" >Iniciar sesión</p>
                </button>
            </div>
            <div>
              <p v-if="errorMessage" class="text-info">{{ errorMessage }}</p>
            </div>
        </form>
    </div>
  </template>
  
  <script>
  import {auth, signInWithEmailAndPassword} from '@/auth'

  export default {
    name: 'LoginView',
    data () {
      return {
        email: '',
        password: '',
        loadingLogin: false,
        errorMessage: '',

      }
    },
    methods: {
      async login(){
        if(!this.email || !this.password){
          return this.errorMessage = 'Debes completar todos los campos'
        }
        this.loadingLogin = true;

        try {
          let results = await signInWithEmailAndPassword(auth, this.email, this.password)
          
          //propiedad destructiring es para esconder los datos del usuario y que no se muestren en consola

          let {user} = results;

          console.log(`Usuario ${user.email} inicia sesión exitosamente`);
          this.$router.push('/restricted')
        } catch (error) {
          this.errorMessage = error.message;
          alert('error');
        } finally {
          this.loadingLogin = false;
        }
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>