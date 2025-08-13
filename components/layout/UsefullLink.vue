<template>
  <div class="container container--grey">
    <div class="containerInner">
      <div class="UsefullLink">
        <nuxt-link to="/" class="UsefullLink-item">
          <img class="UsefullLink-image" src="/icon.png" alt="" />
          <div>
            <p class="UsefullLink-title">Nos agences</p>
            <p>Les stocks et prix de l'agence la plus proche de chez vous.</p>
          </div>
        </nuxt-link>

        <nuxt-link to="/" class="UsefullLink-item">
          <img class="UsefullLink-image" src="/icon.png" alt="" />
          <div>
            <p class="UsefullLink-title">Nos catalogues</p>
            <p>Retrouvez tous nos catalogues intéractifs.</p>
          </div>
        </nuxt-link>

        <nuxt-link to="/" class="UsefullLink-item">
          <img class="UsefullLink-image" src="/icon.png" alt="" />
          <div>
            <p class="UsefullLink-title">Newsletter</p>
            <p>Pour recevoir toutes nos promotions … abonnez vous</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsefullLink'
}
</script>
