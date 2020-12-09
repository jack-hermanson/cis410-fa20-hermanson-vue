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
        <li class="nav-item">
          <router-link class="nav-link" to="/sales">Sales</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">
            <button class="btn btn-warning">Log In</button>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {

  }

</script>

<style scoped>

</style>
