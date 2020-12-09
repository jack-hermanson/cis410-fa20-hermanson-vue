<template>
  <div>
    <div class="row">
        <div class="col">
            <h1 class="mb-3">Sign Up</h1>
        </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6">
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input v-model="firstName" type="text" name="firstName" id="first-name" class="form-control">
          </div>
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input v-model="lastName" type="text" name="lastName" id="last-name" class="form-control">
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input v-model="phone" type="tel" name="phone" id="phone" class="form-control">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" type="email" name="email" id="email" class="form-control">
            <small v-if="dupEmail" class="form-text text-danger">Please choose a different email.</small>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" type="password" name="password" id="password" class="form-control">
          </div>
          <div class="form-group mt-4">
            <button type="submit" class="btn btn-success">Sign Up</button>  
          </div>
          <p class="text-danger">{{errorMessage}}</p>
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
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        errorMessage: '',
        dupEmail: false
      }
    },
    methods: {
      onSubmit() {
        const formData = {
          firstName: this.firstName,
          lastName: this.lastName,
          phone: this.phone,
          email: this.email,
          password: this.password
        };
        // console.log(formData);
        axios.post('/customers', formData)
          .then(res => {
            this.$router.replace('/login?signedup=true');
          })
          .catch(err => {
            if (err.response.status === 409) {
              this.dupEmail = true;
            } else {
              this.errorMessage = 'There was an error signing you up.';
              console.log(err);
            }
          });
      }
    }
  }

</script>

<style scoped>

</style>
