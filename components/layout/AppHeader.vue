<template>
  <header class="AppHeader container">
    <div class="containerInner">
      <nuxt-link to="/">
        <img class="AppHeader-logo" src="/logo-bd.jpg" alt="Union Matériaux" />
      </nuxt-link>
      <div class="AppHeader-content">
        <div class="AppHeader-top">
          <Search />
          <Geoloc />
        </div>
        <div class="AppHeader-bottom">
          <button @click="toggleMenuDisplay" class="AppHeader-burger">
            <template v-if="!displayBurgerMenu">
              <div class="AppHeader-burgerIcon">
                <span class="burger"></span>
                <span class="burger"></span>
                <span class="burger"></span>
              </div>
              <span>produits</span>
            </template>
            <template v-else>
              <svg-icon name="cross" />
              <span>Fermer</span>
            </template>
          </button>
          <BurgerMenu
            :isDisplayed="displayBurgerMenu"
            @togglemenu="toggleMenuDisplay"
            @BurgerMenu::Close="closeMenu"
          />
          <Navigation />
          <div class="AppHeader-actions">
            <template>
              <div v-if="userIsLoggedIn" class="AppHeader-actionsButton">
                <svg-icon name="user"></svg-icon>
                <div>
                  <nuxt-link to="/dashboard">Mon compte</nuxt-link>
                  <button @click="disconnectUser">Se déconnecter</button>
                </div>
              </div>
              <nuxt-link v-else class="AppHeader-actionsButton" to="/login">
                <svg-icon name="user"></svg-icon>
                Se connecter
              </nuxt-link>
            </template>

            <button class="AppHeader-actionsButton">
              <svg-icon name="cart"></svg-icon>
              Panier
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navigation from './Navigation'
import Search from './Search'
import Geoloc from '~/components/Geoloc'
import BurgerMenu from '~/components/layout/BurgerMenu'

import { LOG_OUT } from '~/store/modules/auth/types'

export default {
  name: 'AppHeader',
  components: {
    Geoloc,
    Search,
    Navigation,
    BurgerMenu
  },
  data() {
    return {
      displayBurgerMenu: false
    }
  },
  computed: {
    userIsLoggedIn() {
      return this.$store.state.auth.tokens
    }
  },
  methods: {
    disconnectUser() {
      this.$store.dispatch(LOG_OUT, { context: this })
    },
    toggleMenuDisplay() {
      this.displayBurgerMenu = !this.displayBurgerMenu
    },
    closeMenu() {
      this.displayBurgerMenu = false
    }
  }
}
</script>
