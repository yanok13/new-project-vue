<template>
    <div>
        <label for="name">Name</label>
        <input type="text" v-model="name" id="name">
    </div>
    <div>
        <label for="surname">Surname</label>
        <input type="text" v-model="surname" id="surname">
    </div>
    <div>
        <button @click="save">Save</button>
        <button @click="cancel">Cancel</button>
    </div>

    <p>{{ testData }}</p>
</template>

<script>
export default {
    name: "ProfileForm",
    props: ['user'],
    data() {
        return {
            name: '',
            surname: ''
        }
    },
    inject: ['testData'],
    methods: {
        save() {
            let name = this.name
            let surname = this.surname
            this.$emit('save-user', {name, surname})
            this.cancel()
        },
        cancel() {
            this.$emit('cancel')
        }
    },
    created() {
        this.name = this.user.name
        this.surname = this.user.surname
    }
}
</script>

<style scoped>
</style>