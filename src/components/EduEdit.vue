<template>
    <div>
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="edit-edu">
        <div class="w-100">
            <h2> Editar Educação 
                <b-button variant="outline-primary float-right">
                <i class="far fa-plus-square"></i>
                </b-button>
            </h2>
            <b-table striped hover :items="items"></b-table>
        </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
}
</script>