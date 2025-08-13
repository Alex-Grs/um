<template>
  <nav class="Navigation">
    <nuxt-link class="Navigation-link" to="/">Home</nuxt-link>
    <nuxt-link class="Navigation-link" to="/dashboard">Dashboard</nuxt-link>
    <nuxt-link class="Navigation-link" to="/page/test-page"
      >Page Test</nuxt-link
    >
    <nuxt-link class="Navigation-link" to="/login">Login</nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
