<template>
  <v-container pa-0 grid-list-xl>
    <v-layout row wrap>
      <v-flex
        xs12
        v-for="goods in goodsList"
        :key="goods.id"
      >
        <GoodsItem
          :goods="goods"
        />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-dialog v-model="isEditing" persistent max-width="500px">
        <v-btn v-if="!readonly" slot="activator" color="primary" dark>Add</v-btn>
          <GoodsEdit v-if="isEditing"
            :editingGoods="editingGoods"
            :memberList="memberList"
            @complete="completeEditing($event)"
            @cancel="isEditing = false"
          />
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import GoodsList from './GoodsList';
import GoodsEdit from './GoodsEdit';
import GoodsItem from './GoodsItem';


export default {
  data() {
    return {
      isEditing: false,
      editingGoods: null
    }
  },
  computed: {
    ...mapState(['readonly']),
    ...mapGetters(['memberList', 'goodsList'])
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
    GoodsEdit,
    GoodsItem
  }
}
</script>

<style>

</style>
