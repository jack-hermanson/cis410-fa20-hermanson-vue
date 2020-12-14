<template>
  <div>
    <h1>Strains</h1>
    <div class="row">
      <div class="col-12 col-lg-3">
        <div class="jumbotron p-3 my-3 my-lg-0 sticky-top">
          <form>
            <h5>Filter</h5>
            <div class="form-group">
              <label for="search-text">Search</label>
              <input placeholder="Strain name..." class="form-control" type="text" name="searchText" id="search-text">
            </div>
          </form>
        </div>
      </div>
      <div class="col-12 col-lg-9">
        <div class="alert alert-warning d-block d-lg-none">
          <p class="mb-0">
            On mobile screen sizes, not all price points are displayed.
          </p>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Potency</th>
              <th>$/Ounce</th>
              <th class="d-none d-lg-table-cell">$/Half-OZ</th>
              <th class="d-none d-lg-table-cell">$/Quad-OZ</th>
              <th class="d-none d-lg-table-cell">$/Eighth-OZ</th>
              <th class="d-none d-lg-table-cell">$/Gram</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="strain in strains" :key="strain.StrainId">
              <td><router-link :to="`/strains/${strain.StrainId}`">{{ strain.Name }}</router-link></td>
              <td>{{ strain.Potency }}%</td>
              <td>${{ strain.OuncePrice }}</td>
              <td class="d-none d-lg-table-cell">${{ strain.HalfPrice }}</td>
              <td class="d-none d-lg-table-cell">${{ strain.QuadPrice }}</td>
              <td class="d-none d-lg-table-cell">${{ strain.EighthPrice }}</td>
              <td class="d-none d-lg-table-cell">${{ strain.GramPrice }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    computed: {
      strains() {
        return this.$store.state.strains;
      }
    }
  }

</script>

<style scoped>

</style>
