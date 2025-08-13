<template>
  <div class="container container--grey">
    <div class="containerInner FullSlider">
      <client-only>
        <carousel
          :items="1"
          :margin="20"
          :loop="false"
          :nav="false"
          :dots="false"
          class="FullSlider-slider"
        >
          <template slot="prev">
            <span class="FullSlider-button FullSlider-button--prev prev">
              <svg-icon name="arrow" />
            </span>
          </template>
          <div
            :style="{
              backgroundImage:
                'url(\'' + 'https://picsum.photos/1170/420' + '\')'
            }"
            class="FullSlider-slide"
          >
            <div class="FullSlider-content">
              <span class="FullSlider-flag">Promotion</span>
              <p class="FullSlider-cat">Parquet</p>
              <p class="FullSlider-title">Les mois de la renovation</p>
              <p class="FullSlider-subtitle">
                du 15 octobre au 20 décembre 2019
              </p>
              <p class="FullSlider-price"><span>5€/</span>m2</p>
            </div>
            <Btn to="/" value="Voir la vente"></Btn>
            <p class="FullSlider-notice">
              * Dans la limite des stocks disponible
            </p>
          </div>
          <div
            :style="{
              backgroundImage:
                'url(\'' + 'https://picsum.photos/1171/420' + '\')'
            }"
            class="FullSlider-slide"
          >
            <div class="FullSlider-content">
              <span class="FullSlider-flag">Promotion</span>
              <p class="FullSlider-cat">Parquet</p>
              <p class="FullSlider-title">Les mois de la renovation</p>
              <p class="FullSlider-subtitle">
                du 15 octobre au 20 décembre 2019
              </p>
              <p class="FullSlider-price"><span>5€/</span>m2</p>
            </div>
            <Btn to="/" value="Voir la vente"></Btn>
            <p class="FullSlider-notice">
              * Dans la limite des stocks disponible
            </p>
          </div>
          <template slot="next">
            <span class="FullSlider-button FullSlider-button--next next">
              <svg-icon name="arrow" />
            </span>
          </template>
        </carousel>
      </client-only>
    </div>
  </div>
</template>

<script>
import Btn from '~/components/Btn'
// See https://github.com/s950329/vue-owl-carousel#readme for Carousel doc
export default {
  name: 'FullSlider',
  components: {
    Btn
  }
}
</script>
