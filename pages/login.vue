<template>
  <div class="container">
    <div class="containerInner">
      <h2>Login</h2>
      <form @submit.prevent="handleLoginForm">
        <label for="username">Username</label>
        <input id="username" v-model="username" type="text" />

        <br />

        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" />

        <br />

        <p v-if="errorMessage">{{ errorMessage }}</p>

        <button>Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { LOG_IN } from '~/store/modules/auth/types'

export default {
  name: 'Homepage',
  middleware: 'notAuthenticated',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: null
    }
  },
  methods: {
    async handleLoginForm() {
      try {
        await this.$store.dispatch(LOG_IN, {
          username: this.username,
          password: this.password,
          context: this
        })
      } catch (error) {
        this.errorMessage = error
      }
    }
  }
}
</script>
