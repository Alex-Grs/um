import * as types from './types'

export default {
  async [types.LOG_IN]({ dispatch }, { username, password, context }) {
    try {
      const response = await this.$axios.$post('token', {
        email: username,
        password
      })
      const userTokens = {
        accessToken: response.token,
        refreshToken: response.refresh_token
      }
      await dispatch(types.AUTHENTICATE_USER, { userTokens, context })

      this.$router.replace({ path: '/' })
    } catch (error) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('Bad credentials')
    }
  },
  [types.LOG_OUT]({ commit }, { context }) {
    commit(types.SET_TOKENS, null)
    context.$cookies.remove('TOKENS')
    this.$router.replace({ path: '/' })
  },
  [types.AUTHENTICATE_USER]({ commit }, { userTokens, context }) {
    if (context) {
      context.$cookies.set('TOKENS', userTokens)
    }

    this.$axios.setToken(userTokens.accessToken, 'Bearer')
    commit(types.SET_TOKENS, userTokens)
  }
}
