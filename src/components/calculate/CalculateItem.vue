<template>
  <v-list-group :value="true">
    <v-list-tile slot="activator">
      <v-list-tile-content>
        <v-list-tile-title>{{member.name}}</v-list-tile-title>
        <v-list-tile-sub-title>￦{{fullCharge}}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile
      no-action
      v-for="goods in calculateItem"
      :key="goods.id"
    >
      <v-list-tile-content>
        <v-list-tile-title>
          <span class="subheading">[{{goods.name}}]</span> 개인 부담: ￦{{goods.unitPrice * goods.count / goods.charges.length}}
        </v-list-tile-title>
        <v-list-tile-sub-title>
          메뉴 전체: ￦{{goods.unitPrice * goods.count}}
        </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>

</v-list-group>
</template>

<script>
export default {
  props: ['member', 'calculateItem'],
  computed: {
    fullCharge() {
      return this.calculateItem.reduce((chargeSum, goods) => {
        const currentCharge = goods.unitPrice * goods.count / goods.charges.length;

        return chargeSum + currentCharge;
      }, 0);
    }
  }
}
</script>

<style>

</style>
