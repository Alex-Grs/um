<template>
  <div class="container container--grey">
    <div class="containerInner">
      <div class="Dashboard GridL">
        <AsideDashboard class="GridL-3" />
        <div class="MainDashboard GridL-9">
          <h2 class="MainDashboard-title">Mes commandes</h2>

          <Loader v-if="isLoading" />
          <OrderOverview
            v-else
            v-for="order in orders"
            :key="order.code"
            :order="order"
          />

          <Pagination
            v-if="orders.length"
            :currentPage="currentPage"
            :itemsPerPage="itemsPerPage"
            :totalItems="totalItems"
            @Pagination::navigateTo="onPageChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AsideDashboard from '~/components/dashboard/AsideDashboard'
import Loader from '~/components/Loader'
import OrderOverview from '~/components/dashboard/OrderOverview'
import Pagination from '~/components/Pagination'

import dateMixin from '~/mixins/date'

export default {
  name: 'Order',
  middleware: 'authenticated',
  components: {
    AsideDashboard,
    Loader,
    OrderOverview,
    Pagination
  },
  mixins: [dateMixin],
  data() {
    return {
      isLoading: false,
      orders: [],
      totalItems: null,
      itemsPerPage: 3,
      currentPage: 1
    }
  },
  async created() {
    await this.loadCurrentPage()
  },
  methods: {
    async loadCurrentPage() {
      this.isLoading = true

      const response = await this.$axios.$get(
        `api/orders?[createdAt]=DESC&page=${this.currentPage}&itemsPerPage=${this.itemsPerPage}`
      )
      this.orders = response['hydra:member']
      this.totalItems = response['hydra:totalItems']

      this.isLoading = false
    },
    async onPageChange(newPage) {
      this.currentPage = newPage
      await this.loadCurrentPage()
    }
  }
}
</script>
