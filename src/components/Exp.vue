<template>
    <div class="exp">
        <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div class="w-100">
            <h2 class="mb-5 subtitle">Experiências</h2>
                <div v-for="item in items" :key="item.title" v-html="mountTemplate(item)">
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
        template: null
      }
    },
    computed: {
    },
    beforeMount: function() {
        this.$db.ref("template/post").on("value", snapshot => {
            this.template = snapshot.val()
        });
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
        mountTemplate(item) {
            return this.template.replace('item.title', item.title)
                                .replace('item.subtitle', item.subtitle)
                                .replace('item.descr', item.descr)
                                .replace('item.date', strDate(item));
        }
    }
}
</script>