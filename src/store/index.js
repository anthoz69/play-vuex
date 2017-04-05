import Vue from 'vue'
import Vuex from 'vuex'
import Counts from './counts'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Counts
  },
  strict: debug
})
