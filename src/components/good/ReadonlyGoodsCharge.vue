<template>
  <div>
    <v-chip
      v-for="chargeMember in localCharges"
      :key="chargeMember.id"
    >{{chargeMember.name}}</v-chip>
  </div>
</template>

<script>
export default {
  props: ['charges'],
  data() {
    return {
      localCharges: this.charges.map(charge => this.$store.state.members[charge])
    }
  }
}
</script>
