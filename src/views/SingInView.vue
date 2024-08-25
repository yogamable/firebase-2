<template>
    <div class="sign-in">
        <!--formulario de registro-->
        <div class="row d-flex justify-content-center p-3 ps-5 pe-5">
            <h1 class="text-center p-3 text-info">Regístrate aquí</h1>
        </div>
        <form class="row p-3 ps-5 pe-5" @submit.prevent="register">
            <div class="row d-flex justify-content-center">
                <label for="staticEmail2" class="form-label text-center">Email:</label>
                <input v-model="email" type="email" class="form-control" id="staticEmail2" placeholder="Ingresa aquí tu email" style="width: 300px; text-align: center">
            </div>
            <div class="row d-flex justify-content-center pt-3">
                <label for="staticEmail2" class="form-label text-center">Contraseña:</label>
                <input v-model="password" type="password" class="form-control" id="inputPassword2" placeholder="Escribe aquí tu contraseña" style="width: 300px; text-align: center">
            </div>
            <div class="row d-flex justify-content-center pt-3">
                <label for="staticEmail2" class="form-label text-center">Confirma contraseña:</label>
                <input v-model="passwordConfirm" type="password" class="form-control" id="inputPassword2" placeholder="Escribe aquí tu contraseña" style="width: 300px; text-align: center">
            </div>
            <div class="row d-flex justify-content-center pt-4">
                <button type="submit" class="btn btn-success text-white text-center" style="width: 300px;" >
                  <span class="spinner-border text-success" role="status" aria-hidden="true" v-if="loadingRegister"></span>
                  <p class="m-0" v-if="!loadingRegister" >Registrarse</p>
                </button>
            </div>
            <div>
              <p v-if="errorMessage" class="text-info">{{ errorMessage }}</p>
            </div>
        </form>
    </div>
  </template>
  
  <script>
    import { auth, createUserWithEmailAndPassword } from '@/auth'
  
    export default {
        name: 'SignIn',
        data() {
            return {
                email: '',
                password: '',
                passwordConfirm: '',
                loadingRegister: false,
                errorMessage: '',
            };
        },
        methods: {
            async register(){
                if(!this.email || !this.password || !this.passwordConfirm){
                    return this.errorMessage = 'Debes rellenar todos los campos'
                }
                if (this.password !== this.passwordConfirm){
                    return this.errorMessage = 'Las contraseñas no coinciden'
                }

                this.loadingRegister = true
                try {
                    let result = await createUserWithEmailAndPassword(auth, this.email, this.password);
                    let user = result;
                    alert(`Usuario ${user.email} registrado correctamente`)
                    this.$router.push('/restricted')
                } catch (error) {
                    this.errorMessage = error.message;
                } finally {
                    this.loadingRegister = false;
                }
            },
        }
    }
  </script>
  
  <style scoped>
  
  </style>