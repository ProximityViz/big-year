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
      <router-link to="/finder/067">Get Cobb Birds</router-link>&nbsp;&nbsp;&nbsp;
      <router-link to="/finder/089">Get DeKalb Birds</router-link>&nbsp;&nbsp;&nbsp;
      <router-link to="/finder/121">Get Fulton Birds</router-link>&nbsp;&nbsp;&nbsp;
      <router-link to="/finder/135">Get Gwinnett Birds</router-link>&nbsp;&nbsp;&nbsp;
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'finder',
    data () {
      return {
        active: '',
        activeID: '',
        loading: false,
        mode: 'all'
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
