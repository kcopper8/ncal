import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import {doDecompress} from "../service/compress";

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

const dutchModule = {
  state: { 
    list: [
      {
        id: '1',
        title: '누구랑 뭐뭐',
        date: '2019-12-13',
        data: {"members":{"1":{"id":"1","name":"member1"}},"goods":[{"name":"fewg","unitPrice":"1234","count":2,"charges":["1","2"],"id":"1"}]}
      },
      {
        id: '2',
        title: '누구랑 뭐뭐',
        date: '2019-12-13',
        data: {"members":{"1":{"id":"1","name":"member1"}},"goods":[{"name":"fewg","unitPrice":"1234","count":2,"charges":["1","2"],"id":"1"}]}
      },
      {
        id: '3',
        title: '누구랑 뭐뭐',
        date: '2019-12-13',
        data: {"members":{"1":{"id":"1","name":"member1"}},"goods":[{"name":"fewg","unitPrice":"1234","count":2,"charges":["1","2"],"id":"1"}]}
      },
      {
        id: '4',
        title: '누구랑 뭐뭐',
        date: '2019-12-13',
        data: {"members":{"1":{"id":"1","name":"member1"}},"goods":[{"name":"fewg","unitPrice":"1234","count":2,"charges":["1","2"],"id":"1"}]}
      },

    ] 
  },
  mutations: {
  }
}

const store = new Vuex.Store({
  modules: {
    dutch: dutchModule
  },
  state: {
    readonly: true,
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
    },
    fullData: state => {
      return JSON.parse(JSON.stringify({
        members: state.members,
        goods: state.goods
      }));
    }
  },
  mutations: {
    changeReadonly(state, payload) {
      state.readonly = !!payload;
    },
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
    },
    loadFullData(state, payload) {
      state.members = payload.members;
      state.goods = payload.goods;
      state.readonly = payload.readonly;
    },
    loadDutchData(state, payload) {
      state.members = payload.members;
      state.goods = payload.goods;
    }
  }
});

if (global.location.search.length > 1) {
  doDecompress(global.location.search.substr(1)).then(data => {
    store.commit('loadFullData', {
      readonly: true,
      ...data
    });
  });
}

window.changeReadonly = function(payload) {
  store.commit('changeReadonly', payload);
}

export default store;