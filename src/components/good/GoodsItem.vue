<template>
  <div>
    <div>
      <EditableValue
        :value="goods.name"
        @update:value="updateName($event)"
      />
      <span>￦{{goods.price}}</span>
      <button @click="deleteGoods(goods.id)">delete</button>
    </div>
    <div>
      <span>단가
        <EditableValue 
          :value="goods.unitPrice"
          @update:value="updateUnitPrice($event)"
        />
      </span>
      <span>수량{{goods.count}}
        <button @click="plusOneGoodsCount(goods.id)">plus</button>
        <button @click="minusOneGoodsCount(goods.id)">minus</button>
      </span>
    </div>
    <div>
      <h4>members</h4>
      <GoodsCharge 
        :memberList="memberList"
        :charges="goods.charges"
        @changeCharges="changeCharges(goods.id, $event)"
      />
    </div>
  </div>

</template>

<script>

import { mapGetters } from 'vuex';
import GoodsCharge from './GoodsCharge'
import Vue from 'vue';
import EditableValue from '../piece/EditableValue';

export default {
  props: ['goods'],
  computed: {
    ...mapGetters(['memberList'])
  },
  methods: {
    updateName(name) {
      this.$store.commit('updateGoodsProp', {
        id : this.goods.id,
        name: name
      });
    },
    updateUnitPrice(unitPrice) {
      this.$store.commit('updateGoodsProp', {
        id: this.goods.id,
        unitPrice: unitPrice
      });
    },
    plusOneGoodsCount(id) {
      this.$store.commit('updateGoodsProp', {
        id: this.goods.id,
        count: this.goods.count + 1
      });
    },
    minusOneGoodsCount(id) {
      this.$store.commit('updateGoodsProp', {
        id: this.goods.id,
        count: this.goods.count - 1
      });
    },
    changeCharges(id, charges) {
      this.$store.commit('updateGoodsProp', {
        id,
        charges: charges
      });
    },
    deleteGoods(id) {
      this.$store.commit('deleteGoods', id);
    },
  },
  components: {
    GoodsCharge,
    EditableValue
  }
}
</script>

<style scoped>
em {padding: 5px;}
span {padding: 5px;}
button {padding: 5px;}
</style>
