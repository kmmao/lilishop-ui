/*
 * @Author: liukai liukai@quanwu.info
 * @Date: 2022-10-08 20:19:21
 * @LastEditors: liukai liukai@quanwu.info
 * @LastEditTime: 2023-03-01 00:07:23
 * @FilePath: /lilishop-ui/buyer/src/vuex/store.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
import storage from '@/plugins/storage.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navList: [], // 首页快捷导航
    cartNum: storage.getItem('cartNum') || 0,
    logoImg: storage.getItem('logoImg') || require('@/assets/images/logo2.png'),
    siteName:storage.getItem('siteName')|| 'zmddgshop',
    hotWordsList: storage.getItem('hotWordsList'),
    category: JSON.parse(localStorage.getItem('category'))
  },
  getters,
  actions,
  mutations
});
