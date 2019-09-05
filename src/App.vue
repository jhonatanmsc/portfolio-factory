<template>
  <div id="app">
    
    <Menu :debug="DEBUG" />

    <button type="button" class="btn btn-secondary float-left" style="margin: 0.6rem;" @click="toggleMode">
      <i class="fas fa-cogs"></i>
    </button>
    <div v-if="DEBUG" id="nav" style="text-align: right; padding: 1rem;">
      <router-link to="/">PROD</router-link> |
      <router-link to="/dev">DEV</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: "app",
  data() {
    return {
      DEBUG: false
    }
  },
  components: {
    Menu
  },
  mount: function() {},
  methods: {
    toggleMode() {
      if(this.DEBUG)
        this.DEBUG = false
      else
        this.DEBUG = true
    }
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
