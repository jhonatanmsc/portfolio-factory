<template>
    <div>
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="edit-exp">
            <div class="w-100">
                <h2> Editar Experiencia 
                    <b-button variant="outline-primary float-right">
                    <i class="far fa-plus-square"></i>
                    </b-button>
                </h2>
                <b-table striped hover :items="items" :fields="fields">
                  <template slot="[actions]">
                  <b-button size="sm" class="mr-2">
                    <i class="far fa-edit"></i>
                  </b-button>
                  <b-button size="sm" class="mr-2" variant="danger">
                    <i class="far fa-times-circle"></i>
                  </b-button>
                </template>
                </b-table>
            </div>
        </section>
    </div>
</template>

<script>

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