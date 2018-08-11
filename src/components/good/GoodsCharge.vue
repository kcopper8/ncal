<template>
  <ul>
    <li
      v-for="member in memberList"
      :key="member.id"
    >
      <input type="checkbox" 
        :value="member.id" 
        v-model="localCharges"
      >{{member.name}}
    </li>

  </ul>
</template>

<script>
export default {
  props: ['memberList', 'charges'],
  data() {
    return {
      localCharges: Array.from(this.charges)
    }
  },
  watch: {
    localCharges() {
      this.$emit('changeCharges', this.localCharges)
    }
  }
}
</script>
