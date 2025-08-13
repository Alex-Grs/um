import * as types from './types'

import { isCacheValid } from '@/services/storeCache'

export default {
  async [types.FETCH_LAST_ORDERS]({ state, commit }) {
    try {
      if (isCacheValid(state, 'lastOrders', 300)) {
        // 5 minutes
        return Promise.resolve()
      }

      const response = await this.$axios.$get(
        'api/orders?order[createdAt]=DESC'
      )

      commit(types.SET_LAST_ORDERS, response['hydra:member'])
    } catch (error) {
      console.error(error)
      // todo
      // return Promise.reject('Bad credentials')
    }
  },
  async [types.FETCH_LAST_BILLS]({ state, commit }) {
    try {
      if (isCacheValid(state, 'lastBills', 300)) {
        // 5 minutes
        return Promise.resolve()
      }

      const response = await this.$axios.$get('api/bills?order[createdAt]=DESC')

      commit(types.SET_LAST_BILLS, response['hydra:member'])
    } catch (error) {
      console.error(error)
      // todo
      // return Promise.reject('Bad credentials')
    }
  },
  async [types.FETCH_LAST_DELIVERY_NOTES]({ state, commit }) {
    try {
      if (isCacheValid(state, 'lastDeliveryNotes', 300)) {
        // 5 minutes
        return Promise.resolve()
      }

      const response = await this.$axios.$get(
        'api/delivery-notes?order[createdAt]=DESC'
      )

      commit(types.SET_LAST_DELIVERY_NOTES, response['hydra:member'])
    } catch (error) {
      console.error(error)
      // todo
      // return Promise.reject('Bad credentials')
    }
  },
  async [types.FETCH_LAST_QUOTATIONS]({ state, commit }) {
    try {
      if (isCacheValid(state, 'lastQuotations', 300)) {
        // 5 minutes
        return Promise.resolve()
      }

      const response = await this.$axios.$get(
        'api/quotations?order[createdAt]=DESC'
      )

      commit(types.SET_LAST_QUOTATIONS, response['hydra:member'])
    } catch (error) {
      console.error(error)
      // todo
      // return Promise.reject('Bad credentials')
    }
  }
}
