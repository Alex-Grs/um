<template>
  <div v-show="isDisplayed" class="BurgerMenu">
    <button @click="$emit('togglemenu')" class="BurgerMenu-close">
      <svg-icon name="cross" />
    </button>
    <div class="BurgerMenu-mainCat">
      <ul>
        <li
          v-for="(mainCat, index) in categories"
          :key="index"
          :class="{ 'is-active': itemToShow === index }"
          class="BurgerMenu-mainCatItem"
        >
          <button @click="itemToShow = index">{{ mainCat.label }}</button>
        </li>
      </ul>
    </div>
    <div class="BurgerNav-secondaryContent">
      <div
        v-for="(mainCat, index) in categories"
        v-show="itemToShow === index"
        :key="index"
        class="BurgerMenu-secondaryCat"
      >
        <div
          v-for="(secondCat, index) in mainCat.children"
          :key="index"
          class="BurgerMenu-section"
        >
          <nuxt-link to="/" class="BurgerMenu-sectionTitle">
            {{ secondCat.label }}
          </nuxt-link>
          <ul>
            <li
              v-for="(secondCatChildren, index) in secondCat.children"
              :key="index"
            >
              <nuxt-link
                :to="{
                  name: 'categories-code',
                  params: { code: secondCatChildren.code }
                }"
                class="BurgerMenu-sectionItem"
              >
                {{ secondCatChildren.label }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="BurgerMenu-push">
        <div class="BurgerMenu-pushItem"></div>
        <div class="BurgerMenu-pushItem"></div>
        <div class="BurgerMenu-pushItem"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu',
  props: {
    isDisplayed: {
      type: Boolean
    }
  },
  data() {
    return {
      categories: [],
      itemToShow: '1'
    }
  },
  watch: {
    $route(event) {
      this.$emit('BurgerMenu::Close')
    }
  },
  mounted() {
    this.$axios.$get('/api/categories_tree').then((response) => {
      this.categories = response
    })
  }
}
</script>
