export default function({ store, redirect }) {
  if (store.state.auth.tokens) {
    redirect('/')
  }
}
