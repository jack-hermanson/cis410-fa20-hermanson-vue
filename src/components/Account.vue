<template>
  <div>
    <h1>Account</h1>
    <div class="row">
      <div class="col-12 col-lg-8">
        <h4>Purchases</h4>
        <p>{{ data }}</p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
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
        data: 'test'
      };
    },
    methods: {
      getData() {
        this.data = axios.get('/account');
      }  
    }
  }

</script>

<style scoped>

</style>
