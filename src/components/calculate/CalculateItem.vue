<template>
  <div>
    {{member.name}} : {{fullCharge}}
    <ul>
      <li
        v-for="goods in calculateItem"
        :key="goods.id"
      >
        [{{goods.name}}]
        낼돈: {{goods.unitPrice * goods.count / goods.charges.length}}

        {{goods.unitPrice * goods.count}}
      </li>
    </ul>
  </div>
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
