<template>
  <div id="app">
    
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: "app",
  data() {
    return {
    }
  },
  components: {
    Menu
  },
  methods: {
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
.CodeMirror { min-height: 50px; border: 1px solid #ddd; }
.CodeMirror pre { padding-left: 7px; line-height: 1.25; }
.banner { background: #ffc; padding: 6px; border-bottom: 2px solid silver;  }
.banner div { margin: 0 auto; max-width: 700px; text-align: center; }
</style>
