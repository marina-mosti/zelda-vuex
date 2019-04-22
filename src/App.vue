<template>
  <div id="app">
    <UI>
      <div class="screen">
        <OldManContainer />

        <div>
          <ItemButton image="full-heart" />
          <ItemButton image="empty-heart" />
          <ItemButton image="stalfos" />
        </div>

        <Link />
      </div>
    </UI>
  </div>
</template>

<script>
import UI from './components/UI'
import OldManContainer from './components/OldManContainer'
import Link from './components/Link'
import ItemButton from './components/ItemButton'

export default {
  name: 'app',
  components: {
    Link,
    UI,
    OldManContainer,
    ItemButton
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
</style>
