<template>
  <button v-on="$listeners" class="item-button">
    <img :src="`images/${image}.png`" :alt="image" />
  </button>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.item-button {
  background-color: transparent;
  margin: auto 5px;
  cursor: pointer;
  border: none;
  max-width: 55px;
}

.item-button img {
  display: inline-block;
  width: 100%;
}
</style>
