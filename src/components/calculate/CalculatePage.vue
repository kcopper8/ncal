<template>
  <div>
    <v-list expand>
      <CalculateItem
        v-for="member in memberList"
        :key="member.id"
        v-if="!!calculate[member.id]"
        :member="member"
        :calculateItem="calculate[member.id]"
        
      />
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CalculateItem from './CalculateItem';

export default {
  computed: {
    ...mapGetters(['calculate', 'memberList'])
  },
  components: {
    CalculateItem
  }
}
</script>

<style>

</style>
