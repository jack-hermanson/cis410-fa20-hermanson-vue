<template>
  <div id="app">
    <app-header />
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'app-header': Header
  }
}
</script>

<style>

</style>
