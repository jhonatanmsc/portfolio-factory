<template>
    <div>
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="edit-edu">
        <div class="w-100">
            <h2> Editar Educação 
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
            <b-modal
              id="modal-add-edu"
              ref="modal"
              title="Novo post"
            >
              <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                  label="Título"
                  label-for="title-input"
                  invalid-feedback="Título é obrigatório"
                >
                  <b-form-input
                    id="title-input"
                    v-model="title"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Subtitulo"
                  label-for="subtitle-input"
                  invalid-feedback="Subtitulo é obrigatório"
                >
                  <b-form-input
                    id="title-input"
                    v-model="subtitle"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-row>
                  <b-col sm="6">
                    <b-form-group
                      label="Data de saida"
                      label-for="date-end-input"
                    >
                      <b-form-input
                        id="date-end-input"
                        v-model="date_end"
                        placeholder="12/2019"
                        v-mask="'##/####'"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="6">
                    <b-form-group
                    label="Data de saida"
                    label-for="date-end-input"
                    >
                      <b-form-input
                        id="date-end-input"
                        v-model="date_end"
                        placeholder="12/2019"
                        v-mask="'##/####'"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row class="mt-2">
                  <b-col sm="12">
                    <label for="textarea-default">Descrição:</label>
                  </b-col>
                  <b-col sm="12">
                    <b-form-textarea
                      id="textarea-default"
                      placeholder="Default textarea"
                    ></b-form-textarea>
                  </b-col>
                </b-row>
                
              </form>
            </b-modal>
        </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
      return {
        fields: ["title", "subtitle", "actions"],
        items: [],
        title: '',
        subtitle: '',
        descr: '',
        date_end: ''
      }
    },
    mounted: function() {
      let self = this
      this.$db.ref('edu')
        .on('value', function(snapshot) {
            self.items = JSON.parse(snapshot.val().replace(/'/g,"\""))
        })
    },
    methods: {
      ok() {
        console.log("OK")
      },
      cancel() {
        console.log("cancel")
      },
      add(item) {
        this.items.push(item)
        this._store()
      },
      remove(item) {
        let i = this.items.indexOf(item)
        this.items.splice(i, 1)
        this._store()
      },
      update(item) {
        let i = this.items.indexOf(item)
        this.items[i] = item
        this._store()
      },
      _store() {
        let self = this
        this.$db.ref('exp')
          .set(self.items.replace(/\"/g,"'"))
      }
    }
}
</script>