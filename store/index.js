import Vue from 'vue'
import Vuex from 'vuex'

import agency from './modules/agency/store'
import auth from './modules/auth/store'
import dashboard from './modules/dashboard/store'
import homepage from './modules/homepage/store'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    modules: {
      agency,
      auth,
      dashboard,
      homepage
    }
  })
}
