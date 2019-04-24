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
      <v-subheader
        :key="'guide'"
      >
        이름을 클릭/터치하면 상세 내역이 펼쳐집니다.
      </v-subheader>
      <CalculateItem
        v-for="item in memberItems"
        :key="item.member.id"
        :member="item.member"
        :calculateItem="item.calculateItem"
        :fold.sync="folds[item.member.id]"
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
    ...mapGetters(['calculate', 'memberList']),
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
}</script>

<style>

</style>
