<template>
  <div id="app">
    <NcHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import NcHeader from './components/layout/NcHeader';

export default {
  name: 'app',
  components: {
    NcHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 640px;
  margin: 60px auto 0;
}
</style>
