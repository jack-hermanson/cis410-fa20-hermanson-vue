<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid">
    <router-link class="navbar-brand" to="/">Jack's Dispensary</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/strains">Strains</router-link>
        </li>
        <li class="nav-item" v-if="!auth">
          <router-link class="nav-link" to="/login">Log In</router-link>
        </li>
        <li class="nav-item" v-if="!auth">
          <router-link class="nav-link" to="/signup">Sign Up</router-link>
        </li>
        <li class="nav-item" v-if="auth">
          <router-link class="nav-link" to="/account">My Account</router-link>
        </li>
        <li class="nav-item" v-if="auth">
          <a @click="onLogout" href="#" class="nav-link">Log Out</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      auth() {
        return this.$store.state.token;
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout');
      }
    }
  }

</script>

<style scoped>

</style>
