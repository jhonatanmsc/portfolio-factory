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
                        <span class="text-primary">{{ labelDateEnd(item) }}</span>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
    data() {
      return {
        items: []
      }
    },
    computed: {
    },
    mounted: function() {
      let self = this
      this.$db.ref('exp')
        .on('value', function(snapshot) {
            self.items = JSON.parse(snapshot.val().replace(/'/g,"\""))
        })
    },
    methods: {
        labelDateEnd(item) {
            let dateEnd;
            let dateStart = new Date(item.date_start);
            var options = { year: 'numeric', month: 'long' };
            if (!item.date_end) {
                dateEnd = 'Atualmente';
            } else {
                dateEnd = new Date(item.date_end);
                dateEnd = dateEnd.toLocaleDateString('pt-BR', options);
                dateEnd = dateEnd.split(' de ');
                dateEnd = `${dateEnd[0].charAt(0).toUpperCase()+dateEnd[0].slice(1)} ${dateEnd[1]}`;
            }
            dateStart = dateStart.toLocaleDateString('pt-BR', options);
            dateStart = dateStart.split(' de ');
            dateStart = `${dateStart[0].charAt(0).toUpperCase()+dateStart[0].slice(1)} ${dateStart[1]}`;
            
            return `${dateStart}${dateEnd ? ' - ' + dateEnd : ''}`;
        }
    }
}
</script>