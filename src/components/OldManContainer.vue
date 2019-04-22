<template>
  <div class="old-man-container">
    <p class="old-man-text">IT'S DANGEROUS TO GO ALONE, TAKE THIS!</p>
    <OldMan />
  </div>
</template>

<script>
import OldMan from './OldMan'

export default {
  components: { OldMan }
}
</script>

<style>
.old-man-text {
  color: white;
  text-align: center;
  font-size: 30px;
  letter-spacing: 8px;
}

.old-man-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
