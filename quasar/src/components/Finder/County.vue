<template>
  <table>
    <tr v-for='bird in recentNeeded'>
      <td>
        <router-link :to="'/finder/' + countyID + '/bird/' + bird.sciName">{{ bird.comName }}</router-link>
      </td>
      <td>
        <router-link :to="'/finder/' + countyID + '/hotspot/' + bird.locID">{{ bird.locName }}</router-link>
      </td>
      <td>{{ bird.obsDt }}</td>
    </tr>
  </table>
</template>

<script>
  export default {
    name: 'county',
    data () {
      return {
        countyID: ''
      }
    },
    computed: {
      recentNeeded () {
        return this.$store.state.recentNeeded
      }
    },
    created () {
      console.log('created')
      this.getRecentBirds(this.$route.params.countyID)
    },
    updated () {
      console.log('updated')
    },
    methods: {
      getRecentBirds (countyID) {
        this.loading = true
        this.$store.dispatch('GET_RECENT', countyID).then(() => {
          this.loading = false
        })
        this.countyID = countyID
      }
    }
  }
</script>
