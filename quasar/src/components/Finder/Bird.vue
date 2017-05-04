<template>
  <!-- TODO: if there is no species and county, allow user to select one? -->
  <div class="layout-padding">
    <!--Hello Bird {{ data.test }}-->
    county {{ county }}
    <!--Hello Bird {{ $route.params.species }}-->
  </div>
</template>

<script>
  export default {
    name: 'bird',
    computed: {
      county () {
        return this.$store.state.activeCounty
      }
    },
    // data () {
    //   return {
    //     countyNumber: '',
    //     species: '',
    //     test: 'test'
    //   }
    // },
    mounted () {
      console.log('mounted')
    },
    methods: {
      getSightings () {
        this.loading = true
        var params = {
          countyNumber: this.data.countyNumber,
          species: this.data.species
        }
        this.$store.dispatch('GET_SPECIES', params)
      }
    }
  }
</script>
