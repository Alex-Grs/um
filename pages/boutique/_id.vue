<template>
  <div class="Full">
    <div class="container">
      <div class="containerInner">
        <Loader v-if="isLoading" />
      </div>
    </div>
    <div v-if="!isLoading">
      <Breadcrumb :categories="item.categories" />
      <div class="Full-content container">
        <div class="containerInner">
          <div class="GridL">
            <div class="Full-medias GridL-7">
              <div class="Full-images">
                <img
                  v-if="item.images.length"
                  :src="
                    'http://api.dev.union-materiaux.sf' +
                      item.images[displayedImage].originalUri
                  "
                  alt=""
                />
              </div>
              <div class="Full-vignettes">
                <button
                  v-for="(img, index) in item.images"
                  :key="index"
                  @click="displayedImage = index"
                  :style="{
                    'background-image':
                      'url(http://api.dev.union-materiaux.sf' +
                      img.originalUri +
                      ')'
                  }"
                  class="Full-vignette"
                ></button>
                <!-- TODO: Dispay this only if we have a video -->
                <button class="Full-vignette Full-vignette--video">
                  <svg-icon name="play" />
                </button>
              </div>
              <!-- TODO: Dispay this only if we have a notice -->
              <div>
                <button class="Full-notice">
                  <svg-icon name="download" />
                  Notice d'utilisation
                </button>
              </div>
            </div>
            <div class="Full-infos GridL-5">
              <p class="Full-category">{{ item.categories[0].label }}</p>
              <h1 class="Full-title">{{ item.label }}</h1>
              <p class="Full-reference">Référence {{ item.code }}</p>
              <div class="Full-avis"></div>
              <p class="Full-price">
                <span>{{ item.price }} €</span>
                HT / {{ item.unit.label }}
              </p>
              <p class="Full-subPrice">Soit 24,50 € le carton</p>
              <div class="Full-numberSelect">
                <NumberSelect
                  :initialValue="firstNumberValue"
                  :defaultValue="firstNumberDefaultValue"
                  unit="m2"
                />
                <span> ou </span>
                <NumberSelect
                  :initialValue="secondNumberValue"
                  :defaultValue="secondNumberDefaultValue"
                  unit="cartons"
                />
              </div>
              <div class="Full-stock">
                <Loader v-if="isStockLoading" />
                <template v-if="!isStockLoading">
                  <p
                    v-if="available.stockQty > 0"
                    class="Full-stockStatus Full-stockStatus--success"
                  >
                    <svg-icon name="check"></svg-icon>
                    en stock
                  </p>
                  <p v-else class="Full-stockStatus Full-stockStatus--error">
                    <svg-icon name="error"></svg-icon>
                    Pas en stock
                  </p>
                  <p class="Full-stockAgency">(JUVIGNAC)</p>
                  <a class="Full-stockLink" href="">Voir stock autre agence</a>
                </template>
              </div>
              <Btn
                :click="addToCart"
                value="Ajouter au panier"
                class="Btn--big"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb'
import Btn from '~/components/Btn'
import Loader from '~/components/Loader'
import NumberSelect from '~/components/NumberSelect'
export default {
  name: 'Boutique',
  components: {
    Breadcrumb,
    Btn,
    Loader,
    NumberSelect
  },
  data() {
    return {
      isLoading: true,
      isStockLoading: true,
      item: null,
      available: null,
      displayedImage: 0,
      firstNumberValue: 0.5,
      firstNumberDefaultValue: 0.5,
      secondNumberValue: 1,
      secondNumberDefaultValue: 1
    }
  },
  computed: {
    agencyName() {
      return this.$store.state.agency.currentAgency.agency.name || ''
    }
  },
  mounted() {
    this.$axios
      .$get(`/api/products/${this.$route.params.id}`)
      .then((response) => {
        this.isLoading = false
        this.item = response
        console.log(this.item)
        if (this.$store.agency.currentAgency != null) {
          const agencyCode = this.$store.state.agency.currentAgency.code
          this.$axios
            .$get(
              `/api/products-availability?agency=${agencyCode}&products[]=${this.id}`
            )
            .then((response) => {
              this.isStockLoading = false
              this.available = response
            })
            .catch((error) => {
              console.error(error)
            })
        } else {
          console.error('no agency !')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  },
  methods: {
    addToCart: () => {
      console.log('add to cart')
    }
  }
}
</script>
