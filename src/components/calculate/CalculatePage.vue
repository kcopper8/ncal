<template>
  <div>
    <v-btn @click="viewType = 'widget'">widget</v-btn>
    <v-btn @click="viewType = 'text'">text</v-btn>

    <CalculateWidget v-if="viewType==='widget'"/>
    <CalculateText v-if="viewType==='text'"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CalculateWidget from './CalculateWidget';
import CalculateText from './CalculateText';

export default {
  data() {
    return {
      viewType : 'widget'
    }
  },
  computed: {
    ...mapGetters(['calculate', 'memberList'])
  },
  methods: {
  },
  components: {
    CalculateWidget,
    CalculateText
  }
}
</script>

<style>

</style>
