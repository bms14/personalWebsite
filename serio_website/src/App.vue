<template>
  <div id="app">
    <Burger />
    <router-view />
    <!-- <div id="footer">Footer</div> -->
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
/* #footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
} */
</style>