<template>
  <div>
    <h1>Strain Details</h1>
    <div class="row">
      <div class="col-12 col-lg-4">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title mb-0">{{ strain.Name }}</h5>
          </div>
          <div class="card-body mb-0">
            <dl class="pb-0">
              <dt>Name</dt>
              <dd>{{ strain.Name }}</dd>

              <dt>Potency</dt>
              <dd>{{ strain.Potency }}%</dd>

              <dt>Ounce Price</dt>
              <dd>${{ strain.OuncePrice }}</dd>

              <dt>Half-Ounce (Half) Price</dt>
              <dd>${{ strain.HalfPrice }}</dd>

              <dt>1/4 Ounce (Quad) Price</dt>
              <dd>${{ strain.QuadPrice }}</dd>

              <dt>1/8 Ounce (Eighth) Price</dt>
              <dd>${{ strain.EighthPrice }}</dd>

              <dt>Gram Price</dt>
              <dd>${{ strain.GramPrice }}</dd>

              <dt>Shelf Strain ID</dt>
              <dd>{{ strain.ShelfStrainId }}</dd>
            </dl>
            <hr>
            <router-link class="btn btn-success" v-if="auth" :to="`/strains/${this.$route.params.pk}/sale`">Buy this
              Strain</router-link>
            <router-link class="btn btn-outline-success" v-else to="/login">Log In to Buy</router-link>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <router-view :shelfStrainId="strain.ShelfStrainId"></router-view>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    computed: {
      strain() {
        let strains = this.$store.state.strains;
        let strain = strains.find(strain => strain.StrainId == this.$route.params.pk);
        console.log('strain', strain)
        return strain;
      },
      auth() {
        return this.$store.state.token;
      }
    }
  }

</script>

<style scoped>

</style>
