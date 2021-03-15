<template>
    <div class="home">
        <navbar-menu/>
    </div>
</template>

<script>
import Navbar from "@/components/Menu/Navbar"


export default {
    name: 'Home',
    components: {
        'navbar-menu': Navbar,
        
    }
}
</script>

<style scoped>
* {
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 24px;
}
img {
    display: block;
    width: 100%;
    max-width: 100%;
}
</style>