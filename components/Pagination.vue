<template>
  <div v-if="pagesTotal > 1" class="Pagination">
    <button
      @click="$emit('Pagination::navigateTo', currentPage - 1)"
      :disabled="!canPrev"
      class="Pagination-prev"
    >
      Page précédente
    </button>
    <button
      v-for="(page, index) in pagesTotal"
      :key="index"
      @click="$emit('Pagination::navigateTo', page)"
      :class="[currentPage === index + 1 ? 'Pagination-page--current' : '']"
      class="Pagination-page"
    >
      {{ page }}
    </button>
    <button
      @click="$emit('Pagination::navigateTo', currentPage + 1)"
      :disabled="!canNext"
      class="Pagination-next"
    >
      Page suivante
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    itemsPerPage: {
      type: Number,
      default: 16
    },
    totalItems: {
      type: Number,
      default: 16
    }
  },
  computed: {
    canPrev() {
      return this.currentPage > 1
    },
    canNext() {
      return this.itemsPerPage * this.currentPage < this.totalItems
    },
    pagesTotal() {
      return Math.ceil(this.totalItems / this.itemsPerPage)
    }
  }
}
</script>

<style>
.Pagination {
  margin: 50px 0;
}
.Pagination-page {
  display: inline-block;
  padding: 5px;
}
.Pagination-page--current {
  font-weight: 700;
}
.Pagination-prev:disabled {
  opacity: 0.2;
}
.Pagination-next:disabled {
  opacity: 0.2;
}
</style>
