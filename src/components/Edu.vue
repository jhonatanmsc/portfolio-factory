<template>
    <div class="edu">
        <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="education">
            <div class="w-100">
            <h2 class="mb-5 subtitle">Educação</h2>
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

            </div>
        </section>
    </div>
</template>

<script>
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
      this.$db.ref('edu')
        .on('value', function(snapshot) {
            self.items = JSON.parse(snapshot.val().replace(/'/g,"\""))
        })
    }
}
</script>