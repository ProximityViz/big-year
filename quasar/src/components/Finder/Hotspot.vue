<template>
  <div style="layout-padding">
    <h1>Needed for hotspot: {{ hotspotName }}</h1>
    <table>
      <tr v-for='bird in hotspotNeeded'>
        <td v-on:click='changeMode("species")'>{{ bird.comName }}</td>
        <td v-on:click='changeMode("hotspot", bird, active)'>{{ bird.locName }}</td>
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
  data () {
    return {
      active: '',
      activeID: '',
      mode: 'all'
    }
  },
  methods: {
    getRecentBirds (countyNumber, countyName) {
      this.loading = true
      this.$store.dispatch('GET_RECENT', countyNumber).then(() => {
        this.loading = false
      })
      this.active = countyName
      this.activeID = countyNumber
    },
    changeMode (mode, data) {
      this.loading = true
      this.mode = mode
      if (mode === 'hotspot') {
        var params = {
          locID: data.locID,
          locName: data.locName,
          countyID: this.activeID
        }
        this.$store.dispatch('GET_HOTSPOT', params).then(() => {
          this.loading = false
        })
      }
    }
  }
}
</script>

<style scoped>
</style>
