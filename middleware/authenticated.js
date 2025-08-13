// export default function({ store, redirect }) {
//   if (!process.server) {
//     if (!store.state.auth.tokens) {
//       redirect('/login')
//     }
//   }
// }
import { AUTHENTICATE_USER } from '~/store/modules/auth/types'

// export default async function({ store, redirect, $cookies }) {
export default async function({ store, redirect, app }) {
  const userTokens = app.$cookies.get('TOKENS')
  if (!userTokens) {
    redirect('/login')
  } else {
    try {
      await store.dispatch(AUTHENTICATE_USER, {
        userTokens
      })
    } catch (error) {
      console.error(error)
    }
  }
}
