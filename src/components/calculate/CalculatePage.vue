<template>
  <div>
    <v-btn @click="unfoldAll">
      <v-icon>expand_more</v-icon>
      Unfold All
    </v-btn>
    <v-btn @click="foldAll">
      <v-icon>expand_less</v-icon>
      Fold All
    </v-btn>
    <v-list expand>
      <CalculateItem
        v-for="member in memberList"
        :key="member.id"
        v-if="!!calculate[member.id]"
        :member="member"
        :calculateItem="calculate[member.id]"
        :fold.sync="folds[member.id]"
      />
    </v-list>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import CalculateItem from './CalculateItem';

export default {
  data() {
    return {
      folds: {}
    }
  },
  computed: {
    ...mapGetters(['calculate', 'memberList'])
  },
  methods: {
    foldAll() {
      this.memberList.forEach(member => {
        Vue.set(this.folds, member.id, false);
      });
    },

    unfoldAll() {
      this.memberList.forEach(member => {
        Vue.set(this.folds, member.id, true);
      });
    }
  },
  components: {
    CalculateItem
  }
}
</script>

<style>

</style>
