<template>
  <!-- For some obscure reason the linter doesn't work here -->
  <!-- eslint-disable  -->
  <component :is="type" :to="to" @click="$emit('Btn::Click')" class="Btn">
    {{ value }}
  </component>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    to: {
      required: false
    },
    value: {
      type: String
    }
  },
  data() {
    return {
      bigClass: 'Btn--big'
    }
  },
  computed: {
    type() {
      if (this.to) {
        return 'nuxt-link'
      }
      return 'button'
    }
  }
}
</script>
