<template>
  <div class="home" id="home">
    <img src="../assets/me.jpg" class="img" alt="myself" id="myself" />
    <h1 id="nameH">Bruno Sério</h1>
    <h4 id="webH">{{ word }}</h4>
    <div id="icons">
      <a href="https://www.instagram.com/serio__14/">
        <img
          src="../assets/instagramIcon48.png"
          class="img"
          alt="Instagram Link"
          id="instagram"
        />
      </a>
      <a href="https://github.com/bms14">
        <img
          src="../assets/githubIcon48.png"
          class="img"
          alt="GitHub Link"
          id="github"
        />
      </a>
      <a
        href="https://www.facebook.com/people/Bruno-S%C3%A9rio/100004153157181/"
      >
        <img
          src="../assets/facebookIcon48.png"
          class="img"
          alt="Facebook Link"
          id="facebook"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",

  data: function () {
    return {
      word: "Student",
    };
  },

  methods: {
    updateWord: function () {
      if (this.word == "Student") {
        this.word = "Web Developer";
      } else {
        this.word = "Student";
      }
    },
  },

  mounted: function () {
    this.updateWord();
    setInterval(this.updateWord, 5000);
  },
};
</script>

<style>
#logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#home {
  position: absolute;
  height: 90%;
  top: 1%;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#myself {
  max-width: auto;
  max-height: 20%;
  border-radius: 20%;
}
#nameH {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15vw;
  color: #0071bc;
}
#webH {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 4vw;
}
#instagram {
    position: absolute;
    bottom: 40px;
    left: 52px;
  }
  #github {
    position: absolute;
    bottom: -5px;
    left: 52px;
  }
  #facebook {
    position: absolute;
    bottom: -50px;
    left: 52px;
  }
@media screen and (min-width: 775px) {
  #webH {
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 31px;
  }
  #nameH {
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 115px;
  }
  #instagram {
    position: absolute;
    bottom: 40px;
    left: 52px;
  }
  #github {
    position: absolute;
    bottom: -5px;
    left: 52px;
  }
  #facebook {
    position: absolute;
    bottom: -50px;
    left: 52px;
  }
  #instagram:hover,
  #github:hover,
  #facebook:hover {
    height: 51px;
    width: 51px;
    left: 51px;
  }
}
</style>
