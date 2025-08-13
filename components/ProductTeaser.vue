<template>
  <div class="ProductTeaser">
    <div class="ProductTeaser-image">
      <span v-if="flag" class="ProductTeaser-flag">{{ flagTitle }}</span>
      <img :src="DisplayImage" alt="" />
    </div>
    <p class="ProductTeaser-ref">Référence {{ reference }}</p>
    <p class="ProductTeaser-title">{{ title }}</p>
    <p class="ProductTeaser-price">
      <span>{{ price }}€</span> / {{ packaging }}
    </p>
    <Btn
      :to="{ name: 'boutique-id', params: { id: reference } }"
      value="Acheter"
    />
  </div>
</template>

<script>
import Btn from './Btn'
export default {
  name: 'ProductTeaser',
  components: { Btn },
  props: {
    title: {
      type: String,
      default: ''
    },
    img: String,
    reference: String,
    price: Number,
    packaging: String,
    flag: Boolean,
    flagTitle: String
  },
  computed: {
    DisplayImage() {
      return this.img
        ? 'http://api.dev.union-materiaux.sf' + this.img
        : '/logo-grey.jpg'
    }
  }
}
</script>
