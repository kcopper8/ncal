<template>
<v-list>
  <MemberItem 
    v-for="member in memberList"
    :key="member.id"
    :member="member"
  />
</v-list>
</template>

<script>
import { mapGetters } from 'vuex'
import MemberItem from './MemberItem';

export default {
  computed: {
    ...mapGetters([
      'memberList'
    ])
  },
  components: {
    MemberItem
  }
}
</script>

<style>

</style>
