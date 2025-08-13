import * as types from './types'

import { isCacheValid } from '@/services/storeCache'

export default {
  async [types.FETCH_DISCOUNT_PRODUCTS]({ state, commit }) {
    try {
      if (isCacheValid(state, 'discountProducts', 1800)) {
        // 30 minutes
        return Promise.resolve()
      }

      const response = await this.$axios.$get(
        'api/products?categories=10101&page=1'
      )

      commit(types.SET_DISCOUNT_PRODUCTS, response['hydra:member'].slice(0, 8))
    } catch (error) {
      console.error(error)
      // todo
      // return Promise.reject('Bad credentials')
    }
  },
  async [types.FETCH_SLIDER_PRODUCTS]({ state, commit }) {
    try {
      if (isCacheValid(state, 'sliderProducts', 1800)) {
        // 30 minutes
        return Promise.resolve()
      }

      const response = await this.$axios.$get(
        'api/products?categories=10101&page=1'
      )

      commit(types.SET_SLIDER_PRODUCTS, response['hydra:member'].slice(0, 8))
    } catch (error) {
      // todo
      // return Promise.reject('Bad credentials')
    }
  }
}
