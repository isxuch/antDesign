<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/main.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
body,#app{
  height: 100%;
}
</style>
