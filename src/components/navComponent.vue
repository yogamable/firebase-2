<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-3 ps-5 pe-5">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">App</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link v-if="user" class="nav-link active" aria-current="page" to="/restricted">Restricted</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link v-if="!user" class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link v-if="!user" class="nav-link" to="/sing-in">Sign in</router-link>
                    </li>
                    <li class="nav-item">
                    <button @click="logout" v-if="user" class="nav-link">Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import {auth, signOut} from '@/auth'
//para que se muestre el logout solo cuando el usuario esté logueado agregamos mapstate
import {mapState} from 'vuex'

export default {
    name: "NavComponent",
    data(){
        return{}
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        async logout(){
            try {
                await signOut(auth)
                console.log('Usuario ha cerrado sesión')
                this.$router.push('/login');
                
            } catch (error) {
                console.log(error)
            }
        }
    }
}

</script>

<style scoped>

</style>