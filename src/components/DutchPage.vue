<template>
  <div>
    <h1>dutch {{id}}</h1>
    <MainPage />
  </div>
</template>

<script>
import MainPage from './MainPage';

export default {
  props: ['id'],
  mounted() {
    const dutchInfo = this.$store.state.dutch.list.find(id => this.id);
    this.$store.commit('loadDutchData', dutchInfo.data)
  },
  components: {
    MainPage
  }
}
</script>

<style>

</style>
