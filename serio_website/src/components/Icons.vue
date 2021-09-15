<template>
  <div>
    <router-link to="/"
      ><img src="../assets/logo.png" class="img" alt="Logo" id="logo"
    /></router-link>
    <div id="icons">
      <a href="https://www.instagram.com/serio__14/">
        <img
          src="../assets/instagramIcon.png"
          class="img"
          alt="Instagram Link"
        />
      </a>
      <a href="https://github.com/bms14">
        <img src="../assets/githubIcon.png" class="img" alt="GitHub Link" />
      </a>
      <a
        href="https://www.facebook.com/people/Bruno-S%C3%A9rio/100004153157181/"
      >
        <img src="../assets/facebookIcon.png" class="img" alt="Facebook Link" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icons",
};
</script>

<style>
#logo {
  width: auto;
  height: auto;
  max-width: 50px;
  max-height: 50px;
  position: fixed;
  top: 25px;
  left: 50px;
}
#icons {
    position: absolute;
    bottom: 15px;
    left: 50px;
    width: 30px;
}
</style>