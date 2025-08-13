<template>
  <div>
    <FullSlider />
    <Promo />
    <ProductSlider />
    <Map />
    <Reassurance />
  </div>
</template>

<script>
import FullSlider from '~/components/FullSlider'
import Map from '~/components/Map'
import ProductSlider from '~/components/ProductSlider'
import Promo from '~/components/Promo'
import Reassurance from '~/components/Reassurance'

import {
  FETCH_DISCOUNT_PRODUCTS,
  FETCH_SLIDER_PRODUCTS
} from '@/store/modules/homepage/types'

export default {
  name: 'Homepage',
  components: {
    FullSlider,
    Map,
    ProductSlider,
    Promo,
    Reassurance
  },
  data() {
    return {}
  },
  async fetch({ store }) {
    // we fetch data from store for Promo and ProductSlider
    if (process.server) {
      await store.dispatch(FETCH_DISCOUNT_PRODUCTS)
      await store.dispatch(FETCH_SLIDER_PRODUCTS)
    }
  }
}
</script>
