<template>
  <ul>
    <li
      v-for="member in memberList"
      :key="member.id"
    >
      [{{member.id}}] {{member.name}} 
      <button @click="$emit('editMember', member.id)">edit</button>
      <button @click="$emit('deleteMember', member.id)">delete</button>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'memberList'
    ])
  }
}
</script>

<style>

</style>
