<template>
  <v-card>
    <v-card-title>
      <span class="headline">상품 추가</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
         <v-layout wrap>
          <v-flex xs12>
            <v-text-field label="상품명" required v-model="name" autofocus></v-text-field>
          </v-flex>
          <v-flex xs8>
            <v-text-field label="단가" required v-model="unitPrice"></v-text-field>
          </v-flex>
          <v-flex xs4>
            full: {{fullPrice}}
          </v-flex>
          <v-flex xs12>
            <GoodsCharge 
              :memberList="memberList"
              :charges="charges"
              @changeCharges="changeCharges($event)"
            />
          </v-flex>
         </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" flat @click="$emit('cancel')">닫기</v-btn>
      <v-btn color="blue darken-1" flat @click="complete">저장</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import GoodsCharge from './GoodsCharge';

export default {
  props:['editingGoods', 'memberList'],
  data() {
    if (this.editingGoods) {
      return Object.assign({}, this.editingGoods)
    } else {
      return {
        id : undefined,
        name : '',
        unitPrice : undefined,
        count : 1,
        charges: []
      }
    }
  },
  computed: {
    fullPrice() {
      return this.unitPrice * this.count || undefined;
    }
  },
  methods : {
    changeCharges(charges) {
      this.charges = charges;
      this.count = charges.length;
    },
    complete() {
      this.$emit('complete', {
        id: this.id,
        name: this.name,
        unitPrice: this.unitPrice,
        count : this.count,
        charges: this.charges
      });
    }
  },
  components: {
    GoodsCharge
  }
}
</script>
