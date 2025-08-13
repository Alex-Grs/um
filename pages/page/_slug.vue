<template>
  <div class="container">
    <div class="containerInner">
      <Loader v-if="isLoading" />
      <div v-else class="Richtext">
        <h1>{{ page.title }}</h1>
        <div v-html="page.contents"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/Loader'
export default {
  name: 'Page',
  components: { Loader },
  data() {
    return {
      isLoading: true,
      page: null
    }
  },
  async mounted() {
    this.isLoading = true
    try {
      const response = await this.$axios.$get(
        `/api/page/${this.$route.params.slug}`
      )
      this.page = response
      console.log(response)
    } catch (error) {
      console.error(error)
    }
    this.isLoading = false
  }
}
</script>
