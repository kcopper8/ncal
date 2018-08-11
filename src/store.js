import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

function getNewIdOfIds(ids) {
  if (ids.length <= 0) {
    return '1'
  }
  
  return (Math.max.apply(Math, ids) + 1) + '';
}

function getNextIdOfMember(obj) {
  const ids = Object.keys(obj).map(idStr => parseInt(idStr));
  return getNewIdOfIds(ids);
}

function getNextIdOfGoods(goodsList) {
  const ids = goodsList.map(goods => parseInt(goods.id));
  return getNewIdOfIds(ids);
}

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    members: {},
    goods: []
  },
  getters: {
    memberList: state => {
      return Object.values(state.members);
    },
    goodsList: state => {
      return state.goods.map(goods => {
        return Object.assign({
          price : goods.unitPrice * goods.count
        }, goods)
      })
    },
    getGoods: state => id => {
      return state.goods.find(item => item.id === id);
    },
    calculate: state => {
      const chargeMembers = {};
      
      state.goods.forEach(goods => {
        goods.charges.forEach(charge => {
          if (!chargeMembers[charge]) {
            chargeMembers[charge] = [];
          }

          chargeMembers[charge].push(Object.assign({}, goods));
        })
      })

      return chargeMembers;
    }
  },
  mutations: {
    addMember(state, member) {
      const nextId = getNextIdOfMember(state.members);

      Vue.set(state.members, nextId, {
        id: nextId,
        name: member.name
      });
    },
    editMember(state, member) {
      state.members[member.id].name = member.name;
    },
    deleteMember(state, id) {
      Vue.delete(state.members, id);
    },
    ///////////////
    addGoods(state, goods) {
      state.goods.push(Object.assign({
        name : '',
        unitPrice : 0,
        count: 1,
        charges: []
      }, goods, {
        id : getNextIdOfGoods(state.goods),
      }));
    },
    editGoodsBasic(state, attrs) {
      const goods = state.goods.find(item => item.id === attrs.id)
      if (!goods) {
        return;
      }

      goods.name = attrs.name;
      goods.unitPrice = attrs.unitPrice;
      goods.count = attrs.count;
      goods.charges = attrs.charges;
    },
    updateGoodsProp(state, attrs) {
      const goods = state.goods.find(item => item.id === attrs.id)
      if (!goods) {
        return;
      }

      Object.assign(goods, attrs);
    },
    deleteGoods(state, id) {
      const idx = state.goods.findIndex(item => item.id === id);
      state.goods.splice(idx, 1);
    }
  }
})