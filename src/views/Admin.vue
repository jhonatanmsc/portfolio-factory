<template>
  <div id="admin">

    <!-- <Menu :debug="debugMode" />
    
    <button v-if="DEBUG" type="button" class="btn btn-secondary float-right" style="margin: 0.6rem;" @click="toggleMode">
      <i class="fas fa-cogs"></i>
    </button> -->

    <div class="container-fluid p-0">

      <ExpEdit />
      <hr class="m-0">

      <EduEdit />
      <hr class="m-0">

      <SkillsEdit />
      <hr class="m-0">

    </div>
  </div>
</template>

<script>
import SkillsEdit from '@/components/SkillsEdit'
import ExpEdit from '@/components/ExpEdit'
import EduEdit from '@/components/EduEdit'
// import Menu from '@/components/Menu'
import { activeLi } from '@/assets/theme/js/resume.js'

export default {
  name: 'admin',
  data() {
    return {
      // DEBUG: false,
      // debugMode: false
    }
  },
  components: {
    SkillsEdit,
    ExpEdit,
    EduEdit,
    // Menu
  },
  mount: function() {
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
