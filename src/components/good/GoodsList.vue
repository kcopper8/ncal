<template>
  <div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GoodsItem from './GoodsItem';


export default {
  computed: {
    ...mapGetters(['goodsList'])
  },
  components: {
    GoodsItem
  }
}
</script>
