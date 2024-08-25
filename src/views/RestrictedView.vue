<template>
    <div class="restricted">
        <h1  v-if="currentUser" >Bienvenido al área restringida {{ currentUser.email }}</h1>
    </div>
</template>

<script>
import {auth} from '@/auth'

export default {
    name: "RestrictedView",
    data(){
        return {
            currentUser: '',
        }
    },
    
    mounted(){
        console.log(auth)
        this.currentUser = auth.currentUser
    }
}
</script>

<style scoped>

</style>