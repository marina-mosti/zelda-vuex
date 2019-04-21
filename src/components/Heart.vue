<template>
  <img class="heart" :src="src" alt="Heart">
</template>

<script>
export default {
  props: {
    empty: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    src () {
      return `images/${this.empty ? 'empty' : 'full'}-heart.png`
    }
  }
}
</script>

<style>
.heart {
  width: 25px;
}
</style>
