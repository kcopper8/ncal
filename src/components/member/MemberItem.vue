<template>
  <v-list-tile>
    <v-list-tile-content>
      <v-list-tile-title>
        <template v-if="readonly">{{member.name}}</template>
        <v-text-field
          v-if="!readonly"
          :value="member.name"
          @input="updateName"
        ></v-text-field>
      </v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-icon v-if="!readonly" @click="deleteMember" color="red">delete</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['member'],
  computed: mapState(['readonly']),
  methods: {
    updateName(name) {
      this.$store.commit('editMember', {
        id: this.member.id,
        name
      })
    },
    deleteMember() {
      this.$store.commit('deleteMember', this.member.id);
    },
  }
}
</script>

<style>

</style>
