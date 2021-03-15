<template>
    <header-component/>
    <router-view/>
    <footer-component/>
</template>

<script>
import Header from "@/components/Menu/Header"
import Footer from "@/components/Menu/Footer"
import FAQ from "@/components/PagesHeader/FAQ"

export default {
    name: 'App',
    components: {
        'header-component': Header,
        'footer-component': Footer,
        'faq-page': FAQ,
    }
}
</script>
