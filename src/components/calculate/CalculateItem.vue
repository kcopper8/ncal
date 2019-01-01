<template>
  <v-list-group :value="true">
    <v-list-tile slot="activator">
      <v-list-tile-content>
        <v-list-tile-title>{{member.name}} : {{fullCharge}}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile
      no-action
      v-for="goods in calculateItem"
      :key="goods.id"
    >
      <v-list-tile-content>
        <v-list-tile-title>
          <span class="subheading">[{{goods.name}}]</span> 개인 부담: {{getIndividualCharge(goods.unitPrice , goods.count , goods.charges.length)}}
        </v-list-tile-title>
        <v-list-tile-sub-title>
          메뉴 전체: {{getFullMenuPrice(goods.unitPrice, goods.count)}}
        </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>

</v-list-group>
</template>

<script>
function formatCurrency(number) {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'KRW'
  }).format(Math.round(number))
}
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
  methods: {
    getIndividualCharge(unitPrice, count, chargesCount) {
      return formatCurrency(unitPrice * count / chargesCount);
    },
    getFullMenuPrice(unitPrice, goodsCound) {
      return formatCurrency(unitPrice * goodsCound)
    }
  }
}
</script>

<style>

</style>
