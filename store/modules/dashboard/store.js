import * as types from './types'
import actions from './actions'

import { createCachableState, setCachableState } from '@/services/storeCache'

const state = {
  ...createCachableState('lastOrders'),
  ...createCachableState('lastBills'),
  ...createCachableState('lastDeliveryNotes'),
  ...createCachableState('lastQuotations')
}

const mutations = {
  [types.SET_LAST_ORDERS](state, orders) {
    setCachableState(state, 'lastOrders', orders)
  },
  [types.SET_LAST_BILLS](state, bills) {
    setCachableState(state, 'lastBills', bills)
  },
  [types.SET_LAST_DELIVERY_NOTES](state, deliveryNotes) {
    setCachableState(state, 'lastDeliveryNotes', deliveryNotes)
  },
  [types.SET_LAST_QUOTATIONS](state, quotations) {
    setCachableState(state, 'lastQuotations', quotations)
  }
}

export default {
  state,
  mutations,
  actions
}
