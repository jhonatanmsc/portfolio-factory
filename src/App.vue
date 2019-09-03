<template>
  <div id="app">
    <Menu />

    <div class="container-fluid p-0">

      <Intro />
      <hr class="m-0">

      <Exp />
      <hr class="m-0">

      <Edu />
      <hr class="m-0">

      <Skills />
      <hr class="m-0">

      <Interests />
      <hr class="m-0">

    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Intro from '@/components/Intro'
import Exp from '@/components/Exp'
import Edu from '@/components/Edu'
import Skills from '@/components/Skills'
import Interests from '@/components/Interests'
import { activeLi } from '@/assets/theme/js/resume.js'

export default {
  name: "app",
  components: {
    Menu,
    Intro,
    Exp,
    Edu,
    Skills,
    Interests
  },
  mounted: function() {
    activeLi()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700');
@import url('https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.min.css');
@import './assets/theme/css/resume.min.css';

body {
  color: #868e96 !important;
  font-family: Muli !important;
}

nav {
  font-family: Muli;
}

h1{
  font-size: 6rem;
}
@media (max-width: 320px) {
  h1 {
    font-size: 3rem;
  }
}
.subtitle {
  font-size: 3.5rem;
  font-weight: 700;
}
.subsubtitle {
  font-size: 2rem;
}
</style>
