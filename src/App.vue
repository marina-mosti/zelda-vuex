<template>
  <div id="app">
    <UI>
      <div class="screen">
        <div class="old-man-container">
          <p class="old-man-text">IT'S DANGEROUS TO GO ALONE, TAKE THIS!</p>
          <OldMan />
        </div>

        <Link />
      </div>
    </UI>
  </div>
</template>

<script>
import UI from './components/UI'
import OldMan from './components/OldMan'
import Link from './components/Link'

export default {
  name: 'app',
  components: {
    OldMan,
    Link,
    UI
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
