<template>
  <div>
    <AppHeader />
    <nuxt />
    <UsefullLink />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader'
import AppFooter from '~/components/layout/AppFooter'
import UsefullLink from '~/components/layout/UsefullLink'

export default {
  name: 'Default',
  components: {
    AppHeader,
    AppFooter,
    UsefullLink
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.1s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
