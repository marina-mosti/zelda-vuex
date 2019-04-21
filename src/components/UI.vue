<template>
  <div class="ui">
    <div class="stats">

      <div class="life">
        <p>- LIFE -</p>
        <div class="hearts">
          <Heart />
          <Heart />
          <Heart />
          <Heart empty />
        </div>
      </div>

    </div>

    <slot></slot>
  </div>
</template>

<script>
import Heart from './Heart'
export default {
  components: {
    Heart
  }
}
</script>

<style>
.ui {
  width: 600px;
  height: 100%;
  margin: 0 auto;
}

.stats {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.life {
  text-align: right;
}

.life p {
  color: #a02a13;
}

.hearts {
  text-align: left;
  min-width: 100px;
  max-width: 150px;
}
</style>
