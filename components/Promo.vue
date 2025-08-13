<template>
  <div class="container Promo">
    <div class="containerInner">
      <Title
        :center="true"
        :white="true"
        title="Les <strong>promos</strong> du moment"
      />

      <Loader v-if="loading" />
      <div v-if="!loading" class="Promo-content GridL">
        <div v-for="(product, index) in products" :key="index" class="GridL-3">
          <ProductTeaser
            :title="product.label"
            :flag="true"
            :reference="product.code"
            :img="product.images.length ? product.images[0].originalUri : ''"
            :price="product.price"
            :packaging="product.unit.singular"
            flag-title="Promo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/Loader'
import Title from '~/components/Title'
import ProductTeaser from '~/components/ProductTeaser'

import { FETCH_DISCOUNT_PRODUCTS } from '@/store/modules/homepage/types'

export default {
  name: 'Promo', // TODO: Rename this
  components: {
    Loader,
    Title,
    ProductTeaser
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    products() {
      return this.$store.state.homepage.discountProducts
    }
  },
  async mounted() {
    this.loading = true
    await this.$store.dispatch(FETCH_DISCOUNT_PRODUCTS)
    this.loading = false
  }
}
</script>
