<template>
  <div id="app">
    <UI>
      <div class="screen" v-if="!$store.getters.isGameOver">
        <OldManContainer />

        <div>
          <ItemButton image="full-heart" @click="increaseHealth(2)" />
          <ItemButton image="empty-heart" @click="increaseHeartContainers" />
          <ItemButton image="stalfos" @click="stalfosAttack(1,3)" />
        </div>

        <Link />
      </div>

      <div class="game-over" v-else>
        <p>Game Over</p>
      </div>
    </UI>
  </div>
</template>

<script>
import UI from './components/UI'
import OldManContainer from './components/OldManContainer'
import Link from './components/Link'
import ItemButton from './components/ItemButton'

import { mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    Link,
    UI,
    OldManContainer,
    ItemButton
  },
  methods: {
    ...mapMutations([
      'increaseHealth', // Dont worry, it will also add the param that were passing on the click
      'increaseHeartContainers'
    ]),
    stalfosAttack (min, max) {
      this.$store.dispatch('stalfosAttack', {
        minDmg: min,
        maxDmg: max
      })
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body, html {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: black;
}

#app {
  height: 100%;
}

.screen {
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.game-over {
  color: white;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  letter-spacing: 8px;
}
</style>
