<template>
  <button @click="geolocate" class="Geoloc">
    <div class="Geoloc-content">
      <svg-icon name="marker"></svg-icon>
      <div v-if="!geoLocOk">
        <span>Trouver l'agence</span>
        <p>la plus proche</p>
      </div>
      <div v-if="geoLocOk">
        <span>Mon agence</span>
        <p>{{ nearestAgency.name }}</p>
      </div>
    </div>
  </button>
</template>

<script>
import { SET_CURRENT_AGENCY } from '~/store/modules/agency/types'

export default {
  name: 'Geoloc',
  data() {
    return {
      agencies: null,
      nearestAgency: null,
      geoLocOk: false
    }
  },
  methods: {
    geolocate() {
      // Get the browser position
      navigator.geolocation.getCurrentPosition((position) => {
        this.$axios.$get('/api/agencies').then((response) => {
          this.agencies = response['hydra:member']
          this.getNearestAgency(position, this.agencies)
        })
      })
    },
    // Compare position to select the nearest agency
    getNearestAgency(position, agencies) {
      let newDistance = ''
      let oldDistance = null
      agencies.forEach((agency) => {
        newDistance = this.calDistance(
          position.coords.longitude,
          position.coords.latitude,
          agency.gpsLongitude,
          agency.gpsLatitude
        )

        if (newDistance < oldDistance || oldDistance === null) {
          this.nearestAgency = agency
          oldDistance = newDistance
        }
      })
      // Commit the result to the store
      this.$store.dispatch(SET_CURRENT_AGENCY, {
        agency: this.nearestAgency
      })
      this.geoLocOk = true
    },
    // Calcule distance between two coordonate
    calDistance(lon1, lat1, lon2, lat2) {
      console.log(lon1, lat1, lon2, lat2)
      const R = 6371 // Radius of the earth in km
      const dLat = this.deg2rad(lat2 - lat1) // deg2rad below
      const dLon = this.deg2rad(lon2 - lon1)
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) *
          Math.cos(this.deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2)
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      const d = R * c // Distance in km
      return d
    },
    deg2rad(deg) {
      return deg * (Math.PI / 180)
    }
  }
}
</script>
