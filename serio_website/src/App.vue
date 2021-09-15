<template>
  <div id="app">
    <Burger />
    <router-view />
    <Icons />
    <div id="footer">2021 © Bruno Sério</div>
  </div>
</template>

<script>

import Burger from './components/Burger.vue';
import Icons from './components/Icons.vue';

export default {
  name: "App",
  components: {
    Burger,
    Icons
  }
};
</script>


<style>
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: black;
  text-align: center;
} 
</style>