import * as types from './types'
import actions from './actions'

import { createCachableState, setCachableState } from '@/services/storeCache'

const state = {
  ...createCachableState('discountProducts'),
  ...createCachableState('sliderProducts')
}

const mutations = {
  [types.SET_DISCOUNT_PRODUCTS](state, discountProducts) {
    setCachableState(state, 'discountProducts', discountProducts)
  },
  [types.SET_SLIDER_PRODUCTS](state, sliderProducts) {
    setCachableState(state, 'sliderProducts', sliderProducts)
  }
}

export default {
  state,
  mutations,
  actions
}
