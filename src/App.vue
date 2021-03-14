<template>
    <header-component/>
    <router-view/>
    <footer-component/>
</template>

<script>
import Header from "@/components/Menu/Header"
import Footer from "@/components/Menu/Footer"

export default {
    name: 'App',
    components: {
        'header-component': Header,
        'footer-component': Footer
    }
}
</script>
