<template>
  <NavComponent />
  <router-view />
</template>

<script>
import NavComponent from '@/components/navComponent.vue';

export default {
  name: "App",
  components: {
    NavComponent,
  },
  methods: {
    // register(user) {
    //   console.log('Evento recibido', user);
    // }
  }
}
</script>

<style>

</style>
