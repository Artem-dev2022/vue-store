<script>
import Header from './components/Header.vue'

export default {
  components: {Header}
}
</script>

<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1440px;
}
</style>
