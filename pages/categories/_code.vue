<template>
  <div class="container">
    <div class="containerInner">
      <Pagination
        :currentPage="currentPage"
        :itemsPerPage="itemsPerPage"
        :totalItems="totalItems"
        @Pagination::navigateTo="onNavigate"
      />
      <Loader v-if="isLoading" />
      <div v-else-if="products">
        <h1 v-if="category">{{ category.label }}</h1>
        Nombre de produits par page :
        <select
          id=""
          v-model.number="itemsPerPage"
          @change="onItemsPerPageChange"
          name=""
        >
          <option value="16">16</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <div class="GridL">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="GridL-3"
          >
            <ProductTeaser
              :title="product.label"
              :flag="false"
              :reference="product.code"
              :img="product.images.length ? product.images[0].originalUri : ''"
              :price="product.price"
              :packaging="product.unit.singular"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/Loader'
import Pagination from '~/components/Pagination'
import ProductTeaser from '~/components/ProductTeaser'

export default {
  name: 'Code',
  components: {
    Loader,
    Pagination,
    ProductTeaser
  },
  data() {
    return {
      isLoading: false,
      category: null,
      products: null,
      currentPage: Number(this.$route.query.page) || 1,
      itemsPerPage: Number(this.$route.query.itemsPerPage) || 16,
      totalItems: null
    }
  },
  mounted() {
    this.fetchCategory()
    this.updatePageUrlAndLoadProducts()
  },
  methods: {
    updatePageUrlAndLoadProducts() {
      this.$router.push({
        query: { page: this.currentPage, itemsPerPage: this.itemsPerPage }
      })
      this.fetchProducts()
    },
    async fetchProducts() {
      this.isLoading = true
      try {
        const response = await this.$axios.$get(
          `/api/products?categories=${this.$route.params.code}&page=${this.currentPage}&itemsPerPage=${this.itemsPerPage}`
        )
        this.products = response['hydra:member']
        this.totalItems = response['hydra:totalItems']
      } catch (error) {
        console.error(error)
      }
      this.isLoading = false
    },
    async fetchCategory() {
      this.isLoading = true
      try {
        const response = await this.$axios.$get(
          `/api/categories/${this.$route.params.code}`
        )
        this.category = response
      } catch (error) {
        console.error(error)
      }
      this.isLoading = false
    },
    onItemsPerPageChange() {
      this.currentPage = 1
      this.updatePageUrlAndLoadProducts()
    },
    onNavigate(page) {
      this.currentPage = page
      this.updatePageUrlAndLoadProducts()
    }
  }
}
</script>
