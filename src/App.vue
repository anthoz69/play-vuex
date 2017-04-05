<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Display></Display>
    <Inc></Inc>
  </div>
</template>

<script>
import Display from './components/Display'
import Inc from './components/Inc'
export default {
  components: {
    Display,
    Inc
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
