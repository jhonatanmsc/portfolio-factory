<template>
  <div id="home">

    <!-- <Menu :debug="debugMode" />
    
    <button v-if="DEBUG" type="button" class="btn btn-secondary float-right" style="margin: 0.6rem;" @click="toggleMode">
      <i class="fas fa-cogs"></i>
    </button> -->

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
import Intro from '@/components/Intro'
import Exp from '@/components/Exp'
import Edu from '@/components/Edu'
import Skills from '@/components/Skills'
import Interests from '@/components/Interests'
// import Menu from '@/components/Menu'
import { activeLi } from '@/assets/theme/js/resume.js'
import 'firebase/database'

export default {
  name: "home",
  components: {
    Intro,
    Exp,
    Edu,
    Skills,
    Interests,
    // Menu
  },
  data() {
    return {
      exp: null,
      edu: null,
      skills: null,
      // DEBUG: false,
      // debugMode: false
    }
  },
  mounted: function() {
    activeLi()
    // this.DEBUG = process.env.VUE_APP_DEBUG == "true" ? true : false
    // if(this.DEBUG)
    //   this.debugMode = true
  },
  methods: {
    // toggleMode() {
    //   if(this.debugMode) {
    //     this.debugMode = false
    //     this.$router.push('/')
    //   } else {
    //     this.debugMode = true
    //     this.$router.push('dev')
    //   }
    // }
  }
}
</script>
