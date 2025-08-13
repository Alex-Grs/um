import * as types from '../store/modules/auth/types'
import appConfig from '~/config/config'

export default function({ app }) {
  app.$axios.interceptors.request.use((config) => {
    // Because of nuxt behaviour, there is no possibility to ensure that the auth plugin is fully awaited before first calls
    // To handle these cases, we set the Bearer the hard way if needed
    if (!config.headers.Authorization) {
      const userTokens = app.$cookies.get('TOKENS')

      if (userTokens) {
        config.headers.Authorization = 'Bearer ' + userTokens.accessToken
      }
    }
    config.baseURL = appConfig.API_BASE_URL

    if (process.server && process.env.NODE_ENV === 'development') {
      config.baseURL = appConfig.SERVER_API_BASE_URL
      config.headers = { ...config.headers, ...appConfig.AXIOS_SERVER_HEADERS }
    }

    return config
  })

  app.$axios.onResponseError(async (error) => {
    const code = parseInt(error.response && error.response.status)

    // on request error, we check if the code is 401 or 403. If it is, we try to refresh the token
    // if an error occured, we logout the current user and redirect to the login page
    // if a new token is received, we update informations in store and retry the original request
    if ([401, 403].includes(code)) {
      const originalRequest = error.config
      const requestPath = error.config.url.replace(error.config.baseURL, '')
      if (requestPath !== '/token/refresh') {
        app.$axios.setToken(false)

        try {
          const refreshTokenResponse = await app.$axios.post('token/refresh', {
            refresh_token: app.store.state.auth.tokens.refreshToken
          })

          const authUSer = {
            accessToken: refreshTokenResponse.data.token,
            refreshToken: refreshTokenResponse.data.refresh_token
          }

          await app.store.dispatch(types.AUTHENTICATE_USER, authUSer)

          originalRequest.headers.Authorization = `Bearer ${refreshTokenResponse.data.token}`

          return app.$axios(originalRequest)
        } catch (error) {
          console.error(error)
          // on error, we assume that the token is invalid, we redirect to the login page and flush the auth user
          app.store.dispatch(types.LOG_OUT)
          app.router.push('/login')
        }
      }
    }
  })
}
