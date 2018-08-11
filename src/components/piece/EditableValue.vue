<template>
  <div>
    <button
      v-if="!editMode"
      @click="startEditing"
    >{{value}}</button>
    <input 
      v-else
      ref="input"
      type="text" 
      v-model="editingValue"
      @blur="completeEditing"
    >
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  props: {
    value: String|Number,
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      editingValue: this.value,
      editMode : false
    }
  },
  methods: {
    startEditing() {
      this.editingValue = this.value;
      this.editMode = true;

      Vue.nextTick(() => {
        this.$refs.input.focus();
      });
    },
    completeEditing() {
      this.$emit('update:value', this.editingValue);
      this.editMode = false;
    }
  }
}
</script>

<style>

</style>
