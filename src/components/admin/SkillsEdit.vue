<template>
  <div>
    <section
      class="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="edit-edu"
    >
      <div class="w-100">
        <h2>
          Editar Skills
          <b-button
            v-b-modal="`modal[skills][add]`"
            variant="outline-primary float-right"
          >
            <i class="far fa-plus-square"></i>
          </b-button>
          <b-button
            class="mr-2"
            v-b-modal="`modal[skills][temp-edit]`"
            variant="outline-primary float-right"
          >
            <i class="fas fa-puzzle-piece"></i>&nbsp;Editar Template
          </b-button>
        </h2>
        <table class="table table-hover table-striped">
          <thead>
            <tr style="text-transform: capitalize; font-size: 1.2rem;">
              <th v-for="(field, i) in fields" :key="`${field}-${i}-thead-skills`" scope="col">
                {{ field }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in items" :key="`${item.id}-${i}-tbody-skills`">
              <td>{{ item.title }}</td>
              <td :style="`color: ${item.color}`" v-html='mountTemplate(item)'>
              </td>
              <td>
                <b-button
                  v-b-modal="`modal[skills][upd][${i}]`"
                  size="sm"
                  class="mr-2"
                  variant="warning"
                >
                  <i class="far fa-edit"></i>
                </b-button>
                <b-button
                  v-b-modal="`modal[skills][del][${i}]`"
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
        <div v-for="(item, i) in items" :key="`${item.id}-${i}-skills-edit`">
          <b-modal
            :id="`modal[skills][upd][${i}]`"
            ref="modal"
            title="Edit post"
            @show="loadItem(item)"
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
                label="icon"
                label-for="icon-input"
                invalid-feedback="Icon é obrigatório"
              >
                <b-form-input
                  id="icon-input"
                  v-model="icon"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label="color"
                label-for="color-input"
                invalid-feedback="Color é obrigatório"
              >
                <b-form-input
                  id="color-input"
                  v-model="color"
                  required
                ></b-form-input>
              </b-form-group>
            </form>
          </b-modal>
        </div>
        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX End Edit Modal XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->

        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX Init Del Modal XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
        <div v-for="(item, i) in items" :key="`${item.id}-${i}-skills-del`">
          <b-modal
            :id="`modal[skills][del][${i}]`"
            ref="modal"
            title="Delete post"
            @show="loadItem(item)"
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
                label="icon"
                label-for="icon-input"
                invalid-feedback="Icon é obrigatório"
              >
                <b-form-input
                  id="icon-input"
                  v-model="icon"
                  readonly
                ></b-form-input>
              </b-form-group>
              <b-form-group
                label="color"
                label-for="color-input"
                invalid-feedback="Color é obrigatório"
              >
                <b-form-input
                  id="color-input"
                  v-model="color"
                  type="color"
                  readonly
                ></b-form-input>
              </b-form-group>
            </form>
          </b-modal>
        </div>
        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX End Del Modal XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->

        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX Init Add Modal XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
        <b-modal
          id="modal[skills][add]"
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
              label="icon"
              label-for="icon-input"
              invalid-feedback="Icon é obrigatório"
            >
              <b-form-input
                id="icon-input"
                v-model="icon"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="color"
              label-for="color-input"
              invalid-feedback="Color é obrigatório"
            >
              <b-form-input
                id="color-input"
                v-model="color"
                required
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX End Add Modal XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX Init temp-edit Modal XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
        <b-modal
          id="modal[skills][temp-edit]"
          ref="modal"
          title="Editar Template Skills"
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
      fields: ["title", "icon", "actions"],
      items: [],
      key: null,
      title: null,
      icon: null,
      color: null,
      template: null,
    };
  },
  components: {},
  computed: {},
  beforeMount: function() {
    this.$db.ref("template/skills").on("value", snapshot => {
      this.template = snapshot.val()
    });
  },
  mounted: function() {
    this.$db.ref("skills").on("value", snapshot => {
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
      this.key = "";
      this.title = "";
      this.icon = "";
      this.color = "";
    },
    loadItem(item, key) {
      this.key = key
      this.title = item.title;
      this.icon = item.icon;
      this.color = item.color;
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
    handleTemplateOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.saveTemplate();
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
    onReady(cm) {
      setTimeout(() => {
        cm.refresh();
      }, 200);
    },
    add() {
      let item = {
        title: this.title,
        icon: this.icon,
        color: this.color
      };
      this.$db.ref("skills").push(item);
      this.$nextTick(() => {
        this.$bvModal.hide(`modal[skills][add]`)
      });
    },
    remove() {
      this.$db.ref(`skills/${this.key}`).remove()
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    update() {
      let item = {
        title: this.title,
        subtitle: this.subtitle,
        descr: this.descr,
        date_start: this.date_start,
        date_end: this.date_end
      };
      let up = {}
      up[`/skills/${this.key}`] = item;
      this.$db.ref().update(up);
      this.$nextTick(() => {
        this.$bvModal.hide(`modal[skills][upd][${this.key}]`)
      });
    },
    saveTemplate() {
      this.$db.ref("template/skills").set(this.template, function(error) {
        if (error) {
          console.log(error);
        } else {
          console.log("Ok");
        }
      });
      this.$nextTick(() => {
        this.$bvModal.hide(`modal[skills][temp-edit]`)
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
