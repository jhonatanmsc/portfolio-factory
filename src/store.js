import Vue from "vue";
import Vuex from "vuex";
import { db } from '@/firebase'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    //   exp: [],
    //   edu: [],
    //   skills: []
  },
  getters: {
        // getExp: state => {
        //     return state.exp
        // },
        // getEdu: state => {
        //     return state.edu
        // },
        // getSkills: state => {
        //     return state.skills
        // }
  },
  mutations: {
    //   setExp (state, payload) {
    //       state.exp = payload
    //   },
    //   setEdu (state, payload) {
    //       state.edu = payload
    //   },
    //   setSkills (state, payload) {
    //       state.skills = payload
    //   }
  },
  actions: {
    //   loadExp ({commit}) {
    //     db.ref('exp')
    //     .on('value', function(snapshot) {
    //         commit('setExp', snapshot.val())
    //     })
    //   },
    //   loadEdu ({commit}) {
    //     db.ref('edu')
    //     .on('value', function(snapshot) {
    //         commit('setEdu', snapshot.val())
    //     })
    //   },
    //   loadSkills ({commit}) {
    //     db.ref('skills')
    //     .on('value', function(snapshot) {
    //         commit('setSkills', snapshot.val())
    //     })
    //   }
  }
});
