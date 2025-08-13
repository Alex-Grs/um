<template>
  <div class="DocumentSummary">
    <div class="DocumentSummary-head">
      <div>
        <div class="DocumentSummary-icon">
          <svg-icon :name="icon" />
        </div>
        <h3 class="DocumentSummary-title">{{ title }}</h3>
      </div>
      <nuxt-link :to="{ path: seeMoreLink }" class="DocumentSummary-seeMore">
        Voir plus
        <svg-icon name="plus" />
      </nuxt-link>
    </div>
    <div class="DocumentSummary-content">
      <Loader v-if="isLoading" />
      <template v-else-if="items && items.length > 4">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="DocumentSummary-item"
        >
          <slot :item="item" name="renderItem"></slot>
        </div>
      </template>
      <p v-else>Aucun document disponible</p>
    </div>
  </div>
</template>

<script>
import Loader from '../Loader'

import {
  FETCH_LAST_ORDERS,
  FETCH_LAST_BILLS,
  FETCH_LAST_DELIVERY_NOTES,
  FETCH_LAST_QUOTATIONS
} from '~/store/modules/dashboard/types'

export default {
  name: 'DocumentSummary',
  components: { Loader },
  props: {
    type: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    seeMoreLink: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    items() {
      // eslint-disable-next-line standard/computed-property-even-spacing
      return this.$store.state.dashboard[
        {
          orders: 'lastOrders',
          bills: 'lastBills',
          deliveryNotes: 'lastDeliveryNotes',
          quotations: 'lastQuotations'
        }[this.type]
      ]
    }
  },
  async mounted() {
    this.isLoading = true
    await this.$store.dispatch(
      {
        orders: FETCH_LAST_ORDERS,
        bills: FETCH_LAST_BILLS,
        deliveryNotes: FETCH_LAST_DELIVERY_NOTES,
        quotations: FETCH_LAST_QUOTATIONS
      }[this.type]
    )
    this.isLoading = false
  }
}
</script>
