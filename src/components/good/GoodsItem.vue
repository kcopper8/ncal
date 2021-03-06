<template>
  <v-card flat>
    <v-card-title class="pa-0">
      <div class="headline">
        <template v-if="readonly">{{goods.name}}</template>
        <EditableValue
          v-if="!readonly"
          :value="goods.name"
          @update:value="updateName($event)"
        />
      </div>
      <span class="grey--text">{{goodsPrice}}</span>
    </v-card-title>
    <v-card-actions class="pa-0" v-if="!readonly">
      <v-btn
        icon
        @click="deleteGoods(goods.id)"><v-icon>delete</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="showDetail = !showDetail">
        <v-icon>{{ showDetail ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-text class="pa-0" v-show="showDetail">
      <v-container pa-0>
        <v-layout row wrap>
          <v-flex xs4>
            <v-text-field
              label="단가를 입력하세요."
              type="number"
              :value="goods.unitPrice"
              @input="updateUnitPrice($event)"
            />
          </v-flex>
          <v-flex xs8>
            <span class="subheading">X {{goods.count}} 개</span>

            <v-btn icon
              @click="plusOneGoodsCount(goods.id)"
            >
              <v-icon>exposure_plus_1</v-icon>
            </v-btn>
            <v-btn icon
              @click="minusOneGoodsCount(goods.id)"
            >
              <v-icon>exposure_neg_1</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-text class="pa-0">
      <ReadonlyGoodsCharge v-if="readonly"
        :charges="goods.charges"
      />
      <GoodsCharge 
        v-if="!readonly"
        :memberList="memberList"
        :charges="goods.charges"
        @changeCharges="changeCharges(goods.id, $event)"
      />
    </v-card-text>
  </v-card>
</template>

<script>

import { mapState, mapGetters } from 'vuex';
import GoodsCharge from './GoodsCharge'
import ReadonlyGoodsCharge from './ReadonlyGoodsCharge'
import EditableValue from '../piece/EditableValue';
import formatCurrency from '@/utils/formatCurrency';

export default {
  props: ['goods'],
  data() {
    return {
      showDetail: false
    }
  },
  computed: {
    goodsPrice: function() {
      return formatCurrency(this.goods.price);
    },
    ...mapState(['readonly']),
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
    plusOneGoodsCount() {
      this.$store.commit('updateGoodsProp', {
        id: this.goods.id,
        count: this.goods.count + 1
      });
    },
    minusOneGoodsCount() {
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
    ReadonlyGoodsCharge,
    EditableValue
  }
}
</script>

<style scoped>
em {padding: 5px;}
span {padding: 5px;}
button {padding: 5px;}
</style>
