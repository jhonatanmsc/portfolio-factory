<template>
    <div class="intro">
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div class="w-100">
        <h1 class="mb-0 jmsc">Jhonatan<span class="text-primary">Msc</span></h1>
        <div class="subheading mb-5">Timon · Maranhão <br> 
            <a href="mailto:jhonmscosta@gmail.com">jhonmscosta@gmail.com</a>
        </div>
        
        <p class="lead mb-5">{{ intro }}</p>
            
        <div class="social-icons">
            <a href='https://github.com/jhonatanmsc'>
            <i class="fab fa-github"></i>
            </a>
            <a href='https://medium.com/@jhonmscosta'>
            <i class="fab fa-medium"></i>
            </a>
            <a href='https://linkedin.com/in/jhonatan-matheus-998182126'>
            <i class="fab fa-linkedin-in"></i>
            </a>
            <a href='https://www.facebook.com/jhonmscosta'>
            <i class="fab fa-facebook-f"></i>
            </a>
        </div>
        </div>
    </section>
    </div>
</template>
<script>
export default {
    name: 'intro',
    data(){
        return {
            'intro': ''
        }
    },
    mounted() {
        this.$db.ref('intro')
            .on('value', snapshot => {
                    this.intro = snapshot.val()
                })
    },
}
</script>
<style scoped>
.jmsc {
    font-size: 6rem;
    font-weight: 700;
}
</style>