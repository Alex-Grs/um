import * as types from './types'
import actions from './actions'

const state = {
  currentAgency: null
}

const mutations = {
  [types.SET_CURRENT_AGENCY](state, agency) {
    state.currentAgency = agency
  }
}

export default {
  state,
  mutations,
  actions
}
