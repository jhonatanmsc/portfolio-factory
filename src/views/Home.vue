<template>
  <div id="home">

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
import { activeLi } from '@/assets/theme/js/resume.js'
import 'firebase/database'

export default {
  name: "home",
  components: {
    Intro,
    Exp,
    Edu,
    Skills,
    Interests
  },
  data() {
    return {
      exp: '',
      edu: '',
      skills: ''
    }
  },
  mounted: function() {
    activeLi()
  },
  methods: {
  }
}
</script>
