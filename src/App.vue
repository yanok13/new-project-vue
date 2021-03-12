<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <user-profile :user="user" @save-user="user = $event"></user-profile>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Profile from "@/components/User/Profile";
export default {
    name: 'App',
    components: {
        HelloWorld, 'user-profile': Profile
    },
    data() {
        return {
            user: {
                name: 'John',
                surname: 'Doe'
            },
            testData: 'Data From App'
        }
    },
    provide() {
        return {
            testData: this.testData
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
