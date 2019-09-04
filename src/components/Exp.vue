<template>
    <div class="exp">
        <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div class="w-100">
            <h2 class="mb-5 subtitle">Experiências</h2>
                <div v-for="item in items" :key="item.title" class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0 subsubtitle">{{ item.title }}</h3>
                        <div class="subheading mb-3">{{ item.subtitle }}</div>
                        <p>{{ item.descr }}</p>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">{{ item.date_end }}</span>
                    </div>
                </div>
                <!-- <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="resume-content">
                    <h3 class="mb-0 subsubtitle">Estagiário Backend (Python)</h3>
                    <div class="subheading mb-3">INFOG2</div>
                    <p>Desenvolvimento e manutenção de sistema legado de seguros usando o framework django.</p>
                </div>
                <div class="resume-date text-md-right">
                    <span class="text-primary">Outubro 2018 - Dezebro 2018</span>
                </div>
                </div> -->
                <!-- <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0 subsubtitle">Estagiário Redes</h3>
                        <div class="subheading mb-3">Drogarias Globo</div>
                        <p>Suporte ao sistema, a rede interna de internet das várias lojas e aos colaboradores.</p>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">Fevereiro 2018 - Dezembro 2018</span>
                    </div>
                </div> -->

            </div>
        </section>
    </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
    data() {
      return {
        fields: ["title", "subtitle", "actions"],
        items: []
      }
    },
    computed: {
    },
    mounted: function() {
      let self = this
      this.$db.ref('exp')
        .on('value', function(snapshot) {
            console.log(snapshot.val().replace(/'/g,"\""))
            self.items = JSON.parse(snapshot.val().replace(/'/g,"\""))
            console.log(self.items)
        })
    }
}
</script>