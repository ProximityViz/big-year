<template>
  <div class="layout-padding">
    <div v-if="loading === true" class="spinner-container">
      <div class="spinner-inner">
        <spinner name="puff"></spinner>
      </div>
    </div>
    <!-- TODO: FAB for importing data -->
    <div v-if="mode === 'all'">
      <h1>Birds spotted in {{ active }} county in last 7 days</h1>
      <div>Note: only returns one record per species</div>
      <button v-on:click='getRecentBirds("067", "Cobb")'>Get Cobb Birds</button>
      <button v-on:click='getRecentBirds("089", "DeKalb")'>Get DeKalb Birds</button>
      <button v-on:click='getRecentBirds("121", "Fulton")'>Get Fulton Birds</button>
      <button v-on:click='getRecentBirds("135", "Gwinnett")'>Get Gwinnett Birds</button>
      <table>
        <tr v-for='bird in recentNeeded'>
          <td>
            <router-link :to="'finder/bird/' + bird.sciName">{{ bird.comName }}</router-link>
          </td>
          <td>
            <router-link to="/finder/hotspot">{{ bird.locName }}</router-link>
          </td>
          <td>{{ bird.obsDt }}</td>
        </tr>
      </table>
    </div>
    <button v-if="mode !== 'all'" v-on:click='changeMode("all")'>Back</button>
    <div v-if="mode === 'species'">
      <button v-on:click='changeMode("all")'>Back</button>
      <h1>Species</h1>
    </div>
    <Hotspot v-if="mode === 'hotspot'">
    </Hotspot>
  </div>
</template>

<script>
  export default {
    name: 'finder',
    computed: {
      recentNeeded () {
        return this.$store.state.recentNeeded
      }
    },
    data () {
      return {
        active: '',
        activeID: '',
        loading: false,
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
  .spinner-container {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .spinner-inner {
    top: calc(50% - 32px);
    position: relative;
    margin: 0 auto;
    width: 64px;
    height: 64px;
  }
</style>
