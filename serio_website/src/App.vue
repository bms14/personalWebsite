<template>
  <div id="app">
    <Burger />
    <router-view />
  </div>
</template>

<script>

import Burger from './components/Burger.vue';

export default {
  name: "App",
  components: {
    Burger
  }
};
</script>


<style>

</style>