<template>
  <v-card>
    <v-card-title>
      <span class="headline" v-if="memberEditing">멤버 수정</span>
      <span class="headline" v-else>멤버 추가</span>
    </v-card-title>
    <v-card-text>
      <v-text-field label="이름" required v-model="name" autofocus></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" flat @click="$emit('cancel')">닫기</v-btn>
      <v-btn color="blue darken-1" flat @click="completeEditing">저장</v-btn>
    </v-card-actions>
  </v-card>
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
    // this.$refs.nameInput.focus();
  }
}
</script>

<style>

</style>
