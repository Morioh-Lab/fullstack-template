import Vue from "vue";
import Vuex from "vuex";

import Member from './modules/member';
import Post from './modules/post';


Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    member: Member,
    post: Post,
  
  }
});