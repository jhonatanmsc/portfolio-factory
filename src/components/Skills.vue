<template>
    <div class="skills">
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div class="w-100">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Limguagens de programação &amp; Ferramentas</div>
            <ul class="list-inline dev-icons">
                <li v-for="item in items" :key="item.title" v-html="mountTemplate(item)" class="list-inline-item">
                </li>
            </ul>

            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
                <li>
                <i class="fa-li fa fa-check"></i>
                Design Patterns e reusabilidade de código</li>
                <li>
                <i class="fa-li fa fa-check"></i>
                MVC Design Pattern</li>
                <li>
                <i class="fa-li fa fa-check"></i>
                Agilidade no deploy de aplicações</li>
                <li>
                <i class="fa-li fa fa-check"></i>
                Desenvolvimento Ágil &amp; Scrum</li>
            </ul>
            </div>
        </section>
    </div>
</template>

<script>
import {ordByDate} from '@/assets/theme/js/dbmanager'

export default {
  data() {
    return {
      fields: ["title", "icon", "actions"],
      items: [],
      template: null
    }
  },
  beforeMount: function() {
    this.$db.ref("template/skills").on("value", snapshot => {
      this.template = snapshot.val()
    });
  },
  mounted: function() {
    this.$db.ref('skills')
      .on('value', snapshot => {
        this.items = snapshot.val()
      })
  },
  methods: {
    mountTemplate(item) {
      return this.template.replace('item.title', item.title)
                          .replace('item.color', item.color)
                          .replace('item.icon', item.icon);
    }
  }
}
</script>

<style>
</style>