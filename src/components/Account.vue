<template>
  <div>
    <h1>Account</h1>
    <div class="row">
      <div class="col-12">
        <div v-if="accountError" class="alert alert-danger">
          <p class="mb-0">
            You are not logged in or there was an error.
            Try <router-link to="/login">logging in</router-link> again.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-8">
        <h4>Purchases</h4>
        <table v-if="purchases" class="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Strain</th>
              <th>Potency</th>
              <th>Amount (grams)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="purchase in purchases" :key="purchase.PurchaseId">
              <td>{{ purchase.DateOfPurchase }}</td>
              <td>{{ purchase.Name }}</td>
              <td>{{ purchase.Potency }}</td>
              <td>{{ purchase.Amount }}</td>
            </tr>
          </tbody>
        </table>
        <p v-if="!purchases" class="text-danger">No purchases.</p>
      </div>
      <div class="col-12 col-lg-4">
        <h4>My Info</h4>
        <table class="table table-striped">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{{ user.FirstName }}&nbsp;{{ user.LastName }}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{{ user.Email }}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{{ user.Phone }}</td>
            </tr>
            <tr>
              <th>Purchases</th>
              <td>{{ purchases.length }}</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';

  export default {

    data() {
      return {
        user: null,
        purchases: null,
        accountError: false
      }
    },
    created() {
      axios.get("/account", {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`
          }
        })
        .then((response) => {
          this.purchases = response.data.purchases;
          this.user = response.data.user;
          console.log("here is the /account response:", response);
        })
        .catch(() => {
          this.accountError = true;
        });
    }
  }

</script>

<style scoped>

</style>
