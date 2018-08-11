import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/components/MainPage'
import MemberPage from '@/components/member/MemberPage'
import GoodsPage from '@/components/good/GoodsPage'
import CalculatePage from '@/components/calculate/CalculatePage'

Vue.use(VueRouter)

export default new VueRouter({
  routes : [
    { path: '/', component: MainPage },
    { path: '/members', component: MemberPage },
    { path: '/goods', component: GoodsPage },
    { path: '/calculate', component: CalculatePage },
  ]
})
