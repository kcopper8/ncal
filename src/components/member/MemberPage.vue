<template>
  <v-card>
    <MemberList
      @editMember="startEditingMember($event)"
    ></MemberList>
    <v-layout row>
      <v-dialog v-model="isEditing" persistent max-width="500px">
        <v-btn v-if="!readonly" slot="activator" color="primary" dark>Add</v-btn>
        <MemberEdit 
          v-if="isEditing"
          :memberEditing="memberEditing"
          @cancel="endEditing"
          @complete="completeEditing($event)"
          ></MemberEdit>
      </v-dialog>
    </v-layout>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import MemberList from './MemberList';
import MemberEdit from './MemberEdit';

export default {
  data() {
    return {
      isEditing: false,
      memberEditing: null
    }
  },
  components: {
    MemberList,
    MemberEdit
  },
  computed: mapState(['readonly']),
  methods: {
    completeEditing(member) {
      if (this.memberEditing) {
        this.$store.commit('editMember', member);
      } else {
        this.$store.commit('addMember', member)
      }

      this.endEditing();
    },
    startEditingMember(id) {
      this.memberEditing = this.$store.state.members[id];
      this.isEditing = true;
    },
    endEditing() {
      this.memberEditing = null;
      this.isEditing = false;
    }
  }
}
</script>

<style>
h1 {text-align: center;}

</style>
