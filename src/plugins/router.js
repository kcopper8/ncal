import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage';
import ListPage from '../components/ListPage';
import DutchPage from '../components/DutchPage';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: MainPage },
  { name: 'dutch', path: '/dutch/:id', component: DutchPage, props: true },
  { path: '/list', component: ListPage }
]

export default new VueRouter({
  routes
});