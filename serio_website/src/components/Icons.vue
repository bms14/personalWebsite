<template>
  <div>
    <router-link to="/"
      ><img src="../assets/logo.png" class="img" alt="Logo" id="logo"
    /></router-link>
    
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
  top: 30px;
  left: 40px;
}

</style>