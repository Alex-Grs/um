<template>
  <div
    :class="{ 'Title--center': center, 'Title--white': white }"
    class="Title"
  >
    <h2 v-html="title" class="Title-name" />
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: String,
    center: Boolean,
    white: Boolean
  }
}
</script>
