<template>
    <div class="menu">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav"
    style="background-image: linear-gradient(#1a237e, #1565c0); background-color: transparent !important;">
        <a class="navbar-brand js-scroll-trigger row" href="#page-top">
        <span class="d-block d-lg-none col-sm-12 mb-4">Jhonatan Matheus</span>
        <span class="d-none d-lg-block col-sm-12">
            <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="@/assets/profile.jpg" alt="">
        </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link js-scroll-trigger active" href="#about">Sobre</a>
            </li>
            <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experiência</a>
            </li>
            <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Educação</a>
            </li>
            <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Intereses</a>
            </li>
        </ul>
        </div>
        
        </nav>
  </div>
</template>

<script>
export default {
    name: "Menu",
}
</script>

<style scoped>
.nav-link:active {
    color: rgba(255, 255, 255, 0.75) !important;
}
</style>