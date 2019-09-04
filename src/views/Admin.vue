<template>
  <div id="admin">
    <div class="container-fluid p-0">

      <ExpEdit />
      <hr class="m-0">

      <EduEdit />
      <hr class="m-0">

      <SkillsEdit />
      <hr class="m-0">

    </div>
  </div>
</template>

<script>
import SkillsEdit from '@/components/SkillsEdit'
import ExpEdit from '@/components/ExpEdit'
import EduEdit from '@/components/EduEdit'
import { activeLi } from '@/assets/theme/js/resume.js'

export default {
  name: 'admin',
  components: {
    SkillsEdit,
    ExpEdit,
    EduEdit
  },
  mount: function() {
    activeLi()
  }
}
</script>
