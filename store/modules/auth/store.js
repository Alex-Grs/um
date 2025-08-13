import * as types from './types'
import actions from './actions'

const state = {
  tokens: null
}

const mutations = {
  [types.SET_TOKENS](state, tokens) {
    state.tokens = tokens
  }
}

export default {
  state,
  mutations,
  actions
}
