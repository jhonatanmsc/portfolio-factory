<template>
    <div class="skills">
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div class="w-100">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Limguagens de programação &amp; Ferramentas</div>
            <ul class="list-inline dev-icons">
                <li v-for="item in items" :key="item.title" class="list-inline-item">
                  <i :title="item.title" :class="item.icon" :style="'color: '+item.color" aria-hidden="true"></i>
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
      id: null
    }
  },
  mounted: function() {
    let self = this
    this.$db.ref('idSkills').on('value', snapshot => {
      self.id = snapshot.val()
    })
    this.$db.ref('skills')
      .on('value', function(snapshot) {
        self.items = JSON.parse(snapshot.val().replace(/'/g,"\""))
      })
  },
}
</script>

<style scoped>
</style>