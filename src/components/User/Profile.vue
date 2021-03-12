<template>
    <h1>User Profile</h1>
    <p><strong>Name</strong> {{ user.name }}</p>
    <p><strong>Surname</strong> {{ user.surname }}</p>

    <div v-if="!showForm">
        <button @click="showForm = !showForm">Edit</button>
    </div>
    <div v-else>
        <profile-form :user="user" @save-user="saveUser" @cancel="showForm = false"></profile-form>
    </div>
</template>

<script>
import ProfileForm from "@/components/User/ProfileForm";
export default {
    name: "Profile",
    components: {ProfileForm},
    props: {
        // user: Object
        user: {
            type: Object,
            required: true
        }
        /*propD: {
          type: Number,
          default: 100,
        },
        propE: {
          type: Object,
          // Object or array defaults must be returned from
          // a factory function
          default: function() {
            return { message: 'hello' }
          }
        },
        propF: {
          validator: function(value) {
            // The value must match one of these strings
            return ['success', 'warning', 'danger'].indexOf(value) !== -1
          }
        }*/
    },
    data() {
        return {
            showForm: false
        }
    },
    methods: {
        saveUser(user) {
            this.$emit('save-user', user)
        }
    }
}
</script>

<style scoped>
</style>