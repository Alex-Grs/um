<template>
  <div class="NumberSelect">
    <button @click="minusClick" class="NumberSelect-button">
      -
    </button>
    <div class="NumberSelect-content">
      <input v-model.number="value" type="text" class="NumberSelect-value" />
      <p class="NumberSelect-unit">{{ unit }}</p>
    </div>
    <button @click="plusClick" class="NumberSelect-button">
      +
    </button>
  </div>
</template>

<script>
export default {
  name: 'NumberSelect',
  props: {
    initialValue: {
      type: Number
    },
    defaultValue: {
      type: Number
    },
    unit: {
      type: String
    }
  },
  data() {
    return {
      value: this.initialValue
    }
  },
  methods: {
    minusClick() {
      if (this.value - this.$props.defaultValue > 0) {
        this.value -= this.$props.defaultValue
      }
    },
    plusClick() {
      this.value += this.$props.defaultValue
    }
  }
}
</script>
