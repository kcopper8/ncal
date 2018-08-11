<template>
  <div>
    <h1>Goods Page</h1>
    <GoodsList />
    <div>
      <button @click="isEditing = true;">Add</button>
      <GoodsEdit v-if="isEditing"
        :editingGoods="editingGoods"
        :memberList="memberList"
        @complete="completeEditing($event)"
        @cancel="isEditing = false"
      />

    </div>
  </div>
</template>

<script>
import GoodsList from './GoodsList.vue';
import GoodsEdit from './GoodsEdit.vue';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      isEditing: false,
      editingGoods: null
    }
  },
  computed: {
    ...mapGetters(['memberList'])
  },
  methods: {
    completeEditing(goods) {
      if (this.editingGoods) {
        this.$store.commit('editGoodsBasic', goods);
        this.editingGoods = null;
      } else {
        this.$store.commit('addGoods', goods);
      }

      this.isEditing = false;
    },
    startEditingGoods(id) {
      this.editingGoods = this.$store.getters.getGoods(id);
      this.isEditing = true;
    }
  },
  components: {
    GoodsList,
    GoodsEdit
  }
}
</script>

<style>

</style>
