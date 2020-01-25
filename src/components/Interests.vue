<template>
    <div class="interests">
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
            <div class="w-100">
                <h2 class="mb-5">Interesses</h2>
                <p>{{ interests }}</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'interests',
    data(){
        return {
            'interests': ''
        }
    },
    mounted() {
        this.$db.ref('interests')
            .on('value', snapshot => {
                    this.interests = snapshot.val()
                })
    }
}
</script>