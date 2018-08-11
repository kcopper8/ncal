<template>
  <ul>
    <li
      v-for="goods in goodsList"
      :key="goods.id"
    >
      <GoodsItem
        :goods="goods"
      />
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
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
