<template>
  <v-list-tile>
    <v-list-tile-content>
      <v-list-tile-title>
        <v-text-field
          :value="member.name"
          @input="updateName"
        ></v-text-field>
      </v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-icon @click="deleteMember" color="red">delete</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
  props: ['member'],
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
