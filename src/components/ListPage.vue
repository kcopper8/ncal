<template>
<div>
  <h1>list page</h1>
  <ul>
    <li 
      v-for="item in list"
      :key="item.id"
    ><router-link :to="{name: 'dutch', params: {id: item.id}}">
    {{item.title}} ( {{item.date}} )</router-link></li>
  </ul>
</div>

</template>

<script>
import {mapState} from 'vuex';
export default {
  computed: {
    ...mapState({
      list: state => state.dutch.list
    })
  }
}
</script>

<style>

</style>
