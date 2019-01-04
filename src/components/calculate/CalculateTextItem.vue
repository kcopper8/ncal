<template>
<li>
  <span class="subheading">[{{goods.name}}]</span> 개인 부담: {{individualCharge}}
  메뉴 전체: {{fullMenuPrice}}
</li>
</template>

<script>
import formatCurrency from '@/utils/formatCurrency';

export default {
  props: ['goods'],
  computed: {
    individualCharge() {
      return formatCurrency(this.goods.unitPrice * this.goods.count / this.goods.charges.length);
    },
    fullMenuPrice() {
      return formatCurrency(this.goods.unitPrice * this.goods.count);
    }
  }
}
</script>