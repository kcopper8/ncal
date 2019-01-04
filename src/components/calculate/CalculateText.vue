<template>
  <ul>
    <CalculateTextMember
      v-for="item in memberItems"
      :key="item.member.id"
      :member="item.member"
      :calculateItem="item.calculateItem"
    />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import CalculateTextMember from './CalculateTextMember'
import CalculateTextItem from './CalculateTextItem'

export default {
  computed: {
    memberItems() {
      const calculate = this.$store.getters.calculate;
      return this.$store.getters.memberList.filter(member => calculate[member.id])
      .map(member => {
        return {
          member: member,
          calculateItem: calculate[member.id]
        }
      });
    }
  },
  components: {
    CalculateTextMember,
    CalculateTextItem
  }
}
</script>

<style>

</style>
