<template>
  <Slide
    :closeOnNavigation="true"
    :burgerIcon="true"
    :crossIcon="true" 
    width="250"
    right="true"
    id="navbar"
  >
    <router-link to="/"><img src="../assets/homeIcon.png" class="img" alt="Home"><span>Home</span></router-link>
    <router-link to="/about"><img src="../assets/aboutIcon.png" class="img" alt="About"><span>About </span></router-link>
    <router-link to="/studies"><img src="../assets/studiesIcon.png" class="img" alt="Studies"><span>Studies</span></router-link>
    <router-link to="/certificates"><img src="../assets/certificateIcon.png" class="img" alt="Certificate"><span>Certificates</span></router-link>
    <router-link to="/portfolio"><img src="../assets/portfolioIcon.png" class="img" alt="Portfolio"><span>Portfolio</span></router-link>
  </Slide>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
  name: "Burger",
  components: {
    Slide,
  },
};
</script>

<style>
.bm-menu {
  position: fixed;
  z-index: 1000;
  background-color: #0071BC;
  overflow-x: hidden;
  transition: 0.5s;
}
.bm-burger-bars {
  background-color: #0071BC;
}
.cross-style {
  position: absolute;
  top: 12px;
  left: 225px;
  cursor: pointer;
} 
.bm-cross {
  background: white;
}
.bm-item-list > * {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
</style>