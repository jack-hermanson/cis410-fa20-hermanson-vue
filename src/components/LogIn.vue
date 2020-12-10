<template>
  <div>
    <div class="alert alert-success" v-if="this.$route.query.signedup">
      <p class="mb-0">Thanks for signing up. Please log in.</p>
    </div>
    <h1>Log In</h1>
    <div class="row">
      <div class="col-12 col-lg-6">
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" id="email" type="email" class="form-control">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" class="form-control" id="password" type="password">
          </div>
          <div class="form-group mt-4">
            <button class="btn btn-success" type="submit">Log In</button>
          </div>
          <div class="form-group">
            <p v-if="credentialsError" class="text-danger form-text">Invalid credentials.</p>
            <p v-if="loginError" class="text-danger form-text">There was an error logging you in.</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        email: '',
        password: '',
        loginError: false,
        credentialsError: false
      }
    },
    methods: {
      onSubmit() {
        console.log('form submitted');

        const formData = {
          email: this.email,
          password: this.password
        };

        axios.post('/customers/login', formData)
          .then(res => {
            this.$store.commit('storeTokenInApp', res.data.token);
            this.$store.commit('storeUserInApp', res.data.user);

            // todo: redirect to user account page
            this.$router.replace('/account');
          })
          .catch(err => {
            console.log(err, err.response.data);

            if (err.response.status === 400) {
              this.credentialsError = true;
            } else {
              this.loginError = true;
            }
          });
      }
    }
  }

</script>

<style scoped>

</style>
