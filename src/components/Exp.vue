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
                        <span class="text-primary">{{ strDateExp(item) }}</span>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
import {ordByDate, strDate} from '@/assets/theme/js/dbmanager'

export default {
    data() {
      return {
        items: [],
      }
    },
    computed: {
    },
    mounted: function() {
        this.$db.ref('exp')
            .on('value', snapshot => {
                this.items = []
                for(let key in snapshot.val()) {
                    this.items.push(snapshot.val()[key])
                }
                this.items = ordByDate(this.items)
            })
    },
    methods: {
        strDateExp(item) {
            return strDate(item)
        }
    }
}
</script>