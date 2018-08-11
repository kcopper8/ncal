<template>
  <div>
    <h1 v-if="memberEditing">Member Edit</h1>
    <h1 v-else>Member Add</h1>
    <p>
      <label>이름 <input type="text" v-model="name" ref="nameInput"></label>
    </p>
    <div>
      <button @click="$emit('cancel')">취소</button>
      <button @click="completeEditing">완료</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['memberEditing'],
  data() {
    if (!this.memberEditing) {
      return {
        id: null,
        name: ''
      };
    } else {
      return {
        id: this.memberEditing.id,
        name: this.memberEditing.name
      }
    }
  },
  methods: {
    completeEditing() {
      this.$emit('complete', {
        id : this.id,
        name : this.name
      });
    }
  },
  mounted() {
    this.$refs.nameInput.focus();
  }
}
</script>

<style>

</style>
