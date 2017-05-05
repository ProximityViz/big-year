<template>
  <div style="layout-padding">
    <h1>Needed for hotspot: {{ hotspotNeeded[0].locName }}</h1>
    <table>
      <tr v-for='bird in hotspotNeeded'>
        <td v-on:click='changeMode("species")'>{{ bird.comName }}</td>
        <td>{{ bird.sciName }}</td>
        <td>{{ bird.howMany }}</td>
        <td>{{ bird.obsDt }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'hotspot',
  loading: false,
  computed: {
    hotspotNeeded () {
      return this.$store.state.hotspotNeeded
    },
    hotspotName () {
      return this.$store.state.activeHotspot
    }
  },
  created () {
    this.getHotspotData(this.$route.params.countyID, this.$route.params.hotspotID)
  },
  methods: {
    getHotspotData (countyID, hotspotID) {
      this.loading = true
      let params = {
        countyID: countyID,
        hotspotID: hotspotID
      }
      this.$store.dispatch('GET_HOTSPOT', params).then(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
</style>
