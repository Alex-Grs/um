import * as types from './types'

export default {
  [types.SET_CURRENT_AGENCY]({ commit }, payload) {
    commit(types.SET_CURRENT_AGENCY, payload.agency)
  }
}
