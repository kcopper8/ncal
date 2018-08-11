<template>
  <div>
    <h1>Calculate Page</h1>
      <ul>
        <li
          v-for="member in memberList"
          :key="member.id"
        >
          <CalculateItem 
            :member="member"
            :calculateItem="calculate[member.id]"
          />
        </li>
      </ul>
    
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
