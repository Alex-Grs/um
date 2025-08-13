import { AUTHENTICATE_USER } from '@/store/modules/auth/types'

// on start up, we check if we have a user in cookie, and set up it in the store
window.onNuxtReady((app) => {
  const userTokens = app.$cookies.get('TOKENS')
  if (userTokens) {
    app.$store.dispatch(AUTHENTICATE_USER, { userTokens, context: app })
  }
})
