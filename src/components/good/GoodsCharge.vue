<template>
  <v-combobox
          v-model="localCharges"
          :items="memberList"
          chips
          deletable-chips
          hide-no-data
          hide-selected
          item-text="name"
          item-value="id"
          multiple
          label="멤버를 선택하세요"
        ></v-combobox>
</template>

<script>
export default {
  props: ['memberList', 'charges'],
  data() {
    return {
      localCharges: this.charges.map(charge => this.$store.state.members[charge])
    }
  },
  watch: {
    localCharges() {
      this.$emit('changeCharges', this.localCharges.map(m => m.id));
    }
  }
}
</script>
