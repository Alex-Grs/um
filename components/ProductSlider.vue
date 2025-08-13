<template>
  <div class="ProductSlider container container--grey">
    <div class="containerInner">
      <Title title="<strong>Les meilleures ventes</strong>" />
      <Loader v-if="isLoading" />

      <div v-if="!isLoading" class="GridL">
        <div v-for="(product, index) in products" :key="index" class="GridL-3">
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
</template>

<script>
import Loader from '~/components/Loader'
import ProductTeaser from '~/components/ProductTeaser'
import Title from '~/components/Title'

import { FETCH_SLIDER_PRODUCTS } from '@/store/modules/homepage/types'

export default {
  name: 'ProductSlider',
  components: {
    Loader,
    ProductTeaser,
    Title
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    products() {
      return this.$store.state.homepage.sliderProducts
    }
  },
  async mounted() {
    this.isLoading = true
    await this.$store.dispatch(FETCH_SLIDER_PRODUCTS)
    this.isLoading = false
  }
}
</script>
