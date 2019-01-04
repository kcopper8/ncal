<template>
  <li>
      <h2>{{member.name}} : {{fullCharge}}</h2>
      <ul>
        <CalculateTextItem
          v-for="goods in calculateItem"
          :key="goods.id"
          :goods="goods"
        />
      </ul>
  </li>
</template>

<script>
import formatCurrency from '@/utils/formatCurrency';
import CalculateTextItem from './CalculateTextItem'

export default {
  props: ['member', 'calculateItem'],
  computed: {
    fullCharge() {
      return formatCurrency(this.calculateItem.reduce((chargeSum, goods) => {
        const currentCharge = goods.unitPrice * goods.count / goods.charges.length;

        return chargeSum + currentCharge;
      }, 0));
    }
  },
  components: {
    CalculateTextItem
  },

}
</script>

<style>

</style>
