<template>
  <div>
    <h1>Goods Edit </h1>
    <div>
      <label> 상품명: 
        <input type="text" v-model="name" />
        
      </label>
    </div>
    <div>
      <label> 단가: 
        <input type="number" v-model="unitPrice" />
      </label>
      full: {{fullPrice}}
    </div>
    <GoodsCharge 
      :memberList="memberList"
      :charges="charges"
      @changeCharges="changeCharges($event)"
    />
    <div>
      <button @click="$emit('cancel')">cancel</button>
      <button @click="complete">Complete</button>
    </div>
  </div>
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
      return this.unitPrice * this.count;
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
