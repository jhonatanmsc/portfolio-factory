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
        </h2>
        <table class="table table-hover table-striped">
          <thead>
            <tr style="text-transform: capitalize; font-size: 1.2rem;">
              <th v-for="field in fields" :key="field" scope="col">
                {{ field }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.title">
              <td>{{ item.title }}</td>
              <td :style="`color: ${item.color}`">
                <i style="font-size: 2rem;" :title="item.title" :class="item.icon" aria-hidden="true"></i>
              </td>
              <td>
                <b-button
                  v-b-modal="`modal[skills][upd][${item.title}]`"
                  size="sm"
                  class="mr-2"
                  variant="warning"
                >
                  <i class="far fa-edit"></i>
                </b-button>
                <b-button
                  v-b-modal="`modal[skills][del][${item.title}]`"
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
        <div v-for="item in items" :key="item.date_end">
          <b-modal
            :id="`modal[skills][upd][${item.title}]`"
            ref="modal"
            title="Edit post"
            @show="loadItem(item)"
            @hidden="resetModal"
            @ok="handleUpdateOk"
          >
            <form ref="form" @submit.stop.prevent="update(item)">
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
        <div v-for="item in items" :key="item.date_end">
          <b-modal
            :id="`modal[skills][del][${item.subtitle}]`"
            ref="modal"
            title="Delete post"
            @show="loadItem(item)"
            @hidden="resetModal"
            @ok="handleDeleteOk"
          >
            <form ref="form" @submit.stop.prevent="remove">
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
      title: null,
      icon: null,
      color: null
    };
  },
  components: {},
  computed: {},
  mounted: function() {
    let self = this;
    this.$db.ref("skills").on("value", function(snapshot) {
      self.items = JSON.parse(snapshot.val().replace(/'/g, "\""))
    });
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid ? "valid" : "invalid";
      return valid;
    },
    resetModal() {
      this.title = "";
      this.icon = "";
      this.color = "";
    },
    loadItem(item) {
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
    add() {
      let item = {
        title: this.title,
        icon: this.icon,
        color: this.color
      };
      this.items.push(item);
      this._store();
    },
    remove() {
      let index;
      this.items.forEach((el, i, list) => {
        if (list[i].title == this.title) {
          index = i;
        }
      });
      this.items.splice(index, 1);
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
      this._store();
    },
    update() {
      this.items.forEach((el, i, list) => {
        if (list[i].title == this.title) {
          list[i] = {
            title: this.title,
            icon: this.icon,
            color: this.color,
          };
        }
      });
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
      this._store();
    },
    _store() {
      let self = this;
      this.$db.ref("skills").set(JSON.stringify(self.items).replace(/"/g, "'"));
    }
  }
};
</script>

<style>
.navbar {
  padding: 0.5rem 0.1rem !important;
}
</style>
