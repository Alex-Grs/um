<template>
  <div class="Breadcrumb container container--grey">
    <div class="Breadcrumb-content containerInner">
      <div class="Breadcrumb-item">
        <nuxt-link to="/">Home</nuxt-link>
        <svg-icon name="angle" class="Breadcrumb-separator" />
      </div>
      <div
        v-for="(category, index) in categoriesArray"
        :key="index"
        class="Breadcrumb-item"
      >
        <nuxt-link
          :to="{
            name: 'categories-code',
            params: { code: category.code }
          }"
        >
          {{ category.label }}
          <svg-icon
            v-if="index != Object.keys(categoriesArray).length - 1"
            name="angle"
            class="Breadcrumb-separator"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    categories: {
      type: Array
    }
  },
  data() {
    return {
      categoriesArray: []
    }
  },
  mounted() {
    this.populateArray(this.categories[0])
  },
  methods: {
    populateArray(item) {
      this.categoriesArray.unshift({
        label: item.label,
        code: item.code
      })
      if (item.parent) {
        this.populateArray(item.parent)
      }
    }
  }
}
</script>
