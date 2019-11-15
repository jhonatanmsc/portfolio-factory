<template>
  <div>
    <section
      class="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="edit-exp"
    >
      <div class="w-100">
        <h2>
          Editar Experiencia
          <b-button
            v-b-modal="`modal[exp][add]`"
            variant="outline-primary float-right"
          >
            <i class="far fa-plus-square"></i>
          </b-button>
          <b-button
            class="mr-2"
            v-b-modal="`modal[exp][temp-edit]`"
            variant="outline-primary float-right"
          >
            <i class="fas fa-puzzle-piece"></i>&nbsp;Editar Template
          </b-button>
        </h2>
        <table class="table table-hover table-striped">
          <thead>
            <tr style="text-transform: capitalize; font-size: 1.2rem;">
              <th v-for="(field, i) in fields" :key="`${field}-${i}-thead-exp`" scope="col">
                {{ field }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in items" :key="`${item.id}-${i}-tbody-exp`">
              <td>{{ item.title }}</td>
              <td>{{ item.subtitle }}</td>
              <td>
                <b-button
                  v-b-modal="`modal[exp][upd][${i}]`"
                  size="sm"
                  class="mr-2"
                  variant="warning"
                >
                  <i class="far fa-edit"></i>
                </b-button>
                <b-button
                  v-b-modal="`modal[exp][del][${i}]`"
                  size="sm"
                  class="mr-2"
                  variant="danger"
                >
                  <i class="far fa-times-circle"></i>
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX Init Edit Modal XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
        <div v-for="(item, i) in items" :key="`${item.id}-${i}-exp-edit`">
          <b-modal
            :id="`modal[exp][upd][${i}]`"
            ref="modal"
            title="Edit post"
            @show="loadItem(item, i)"
            @hidden="resetModal"
            @ok="handleUpdateOk"
          >
            <form ref="form">
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
                  id="subtitle-input"
                  v-model="subtitle"
                  required
                ></b-form-input>
              </b-form-group>
              <b-row>
                <b-col sm="6">
                  <b-form-group
                    label="Data de início"
                    label-for="date-start-input"
                  >
                    <b-form-input
                      id="date-start-input"
                      v-model="date_start"
                      placeholder="12-2019"
                      v-mask="'##-####'"
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
                      placeholder="12-2019"
                      v-mask="'##-####'"
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
                    v-model="descr"
                  ></b-form-textarea>
                </b-col>
              </b-row>
            </form>
          </b-modal>
        </div>
        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX End Edit Modal XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->

        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX Init Del Modal XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
        <div v-for="(item, i) in items" :key="`${item.id}-${i}-exp-del`">
          <b-modal
            :id="`modal[exp][del][${i}]`"
            ref="modal"
            title="Delete post"
            @show="loadItem(item, i)"
            @hidden="resetModal"
            @ok="handleDeleteOk"
          >
            <form ref="form">
              <b-form-group
                label="Título"
                label-for="title-input"
                invalid-feedback="Título é obrigatório"
              >
                <b-form-input
                  id="title-input"
                  v-model="title"
                  readonly
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label="Subtitulo"
                label-for="subtitle-input"
                invalid-feedback="Subtitulo é obrigatório"
              >
                <b-form-input
                  id="subtitle-input"
                  v-model="subtitle"
                  readonly
                ></b-form-input>
              </b-form-group>
              <b-row>
                <b-col sm="6">
                  <b-form-group
                    label="Data de início"
                    label-for="date-start-input"
                  >
                    <b-form-input
                      id="date-start-input"
                      v-model="date_start"
                      placeholder="12-2019"
                      v-mask="'##-####'"
                      readonly
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
                      placeholder="12-2019"
                      v-mask="'##-####'"
                      readonly
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
                    v-model="descr"
                    readonly
                  ></b-form-textarea>
                </b-col>
              </b-row>
            </form>
          </b-modal>
        </div>
        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX End Del Modal XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->

        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX Init Add Modal XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
        <b-modal
          id="modal[exp][add]"
          ref="modal"
          title="Novo post"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form ref="form">
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
                id="subtitle-input"
                v-model="subtitle"
                required
              ></b-form-input>
            </b-form-group>
            <b-row>
              <b-col sm="6">
                <b-form-group
                  label="Data de início"
                  label-for="date-start-input"
                >
                  <b-form-input
                    id="date-start-input"
                    v-model="date_start"
                    placeholder="12-2019"
                    v-mask="'##-####'"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group label="Data de saida" label-for="date-end-input">
                  <b-form-input
                    id="date-end-input"
                    v-model="date_end"
                    placeholder="12-2019"
                    v-mask="'##-####'"
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
                  v-model="descr"
                ></b-form-textarea>
              </b-col>
            </b-row>
          </form>
        </b-modal>
        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX End Add Modal XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
       
        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX Init temp-edit Modal XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
        <b-modal
          id="modal[exp][temp-edit]"
          ref="modal"
          title="Editar Template Post"
          @ok="handleTemplateOk"
        >
          <form ref="form">
            <codemirror ref="myCm"
                :value="template"
                @ready="onReady"
                @input="onCodeChange">
            </codemirror>
            <textarea rows="4" name="template" class="code-editor d-none" id="code-editor"></textarea>
          </form>
        </b-modal>
        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX End temp-edit Modal XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
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
      key: null,
      title: null,
      subtitle: null,
      descr: null,
      date_start: null,
      date_end: null,
      template: null,
    };
  },
  components: {},
  computed: {},
  beforeMount: function() {
    this.$db.ref("template/post").on("value", snapshot => {
      this.template = snapshot.val()
    });
  },
  mounted: function() {
    this.$db.ref("exp").on("value", snapshot => {
      this.items = snapshot.val()
    });
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid ? "valid" : "invalid";
      return valid;
    },
    resetModal() {
      this.key = null;
      this.title = "";
      this.subtitle = "";
      this.descr = "";
      this.date_start = "";
      this.date_end = "";
    },
    loadItem(item, key) {
      this.key = key
      this.title = item.title;
      this.subtitle = item.subtitle;
      if(item.date_end)
        this.date_end = item.date_end
      this.date_start = item.date_start
      this.descr = item.descr;
    },
    handleUpdateOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.update();
    },
    handleDeleteOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.remove();
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.add();
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    onCodeChange(newTemplate) {
      this.template = newTemplate;
    },
    handleTemplateOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.saveTemplate();
    },
    onReady(cm) {
      setTimeout(() => {
        cm.refresh();
      }, 200);
    },
    add() {
      let str = `${this.date_end.split('-')[1]}-${this.date_end.split('-')[0]}-01`;
      let item = {
        title: this.title,
        subtitle: this.subtitle,
        date_start: `${this.date_start.split('-')[1]}-${this.date_start.split('-')[0]}-01`,
        date_end: this.date_end ? str : '',
        descr: this.descr
      };
      this.$db.ref("exp").push(item);
      this.$nextTick(() => {
        this.$bvModal.hide(`modal[exp][add]`)
      });
    },
    remove() {
      this.$db.ref(`exp/${this.key}`).remove()
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    update() {
      let str = `${this.date_end.split('-')[1]}-${this.date_end.split('-')[0]}-01`;
      let item = {
        title: this.title,
        subtitle: this.subtitle,
        date_start: `${this.date_start.split('-')[1]}-${this.date_start.split('-')[0]}-01`,
        date_end: this.date_end ? str : '',
        descr: this.descr
      };
      let up = {}
      up[`/exp/${this.key}`] = item;
      this.$db.ref().update(up);
      this.$nextTick(() => {
        this.$bvModal.hide(`modal[exp][upd][${this.key}]`)
      });
    },
    saveTemplate() {
      this.$db.ref("template/post").set(this.template, function(error) {
        if (error) {
          console.log(error);
        } else {
          console.log("Ok");
        }
      });
      this.$nextTick(() => {
        this.$bvModal.hide(`modal[exp][temp-edit]`)
      });
    },
    mountTemplate(item) {
      return this.template.replace('item.title', item.title)
                        .replace('item.icon', item.icon);
    }
  }
};
</script>

<style>
.navbar {
  padding: 0.5rem 0.1rem !important;
}
</style>
