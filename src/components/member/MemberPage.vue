<template>

  <div>
    <h1>member page</h1>
    <MemberList
      @editMember="startEditingMember($event)"
      @deleteMember="deleteMember($event)"
    ></MemberList>
    <div>
      <button @click="isEditing = true">add</button>
      <MemberEdit 
        v-if="isEditing"
        :memberEditing="memberEditing"
        @cancel="isEditing = false"
        @complete="completeEditing($event)"
        ></MemberEdit>
    </div>
  </div>
</template>

<script>
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
  methods: {
    completeEditing(member) {
      if (this.memberEditing) {
        this.$store.commit('editMember', member);
      } else {
        this.$store.commit('addMember', member)
      }

      this.memberEditing = null;
      this.isEditing = false;
    },
    startEditingMember(id) {
      this.memberEditing = this.$store.state.members[id];
      this.isEditing = true;
    },
    deleteMember(id) {
      this.$store.commit('deleteMember', id)
    }
  }
}
</script>

<style>
h1 {text-align: center;}

</style>
