<template>
    <ul class="header-block">
        <div class="container flex">
            <li><router-link to="/faq">FAQ</router-link></li>
            <li><router-link to="/regulations">Правила</router-link></li>
        </div>
        
    </ul>
</template>

<script>
import FAQ from "@/components/PagesHeader/FAQ"
import Regulations from "@/components/PagesHeader/Regulations"

export default {
    components: {
        'faq-page': FAQ,
        'regulations-page': Regulations,
    }
}
</script>

<style scoped>
.header-block {
    background-color: #4f2d01;
    padding: 20px 0px;
}

.flex {
    display: flex;
}

ul {
    list-style-type: none;
    margin: 0;
}

ul li {
    padding: 5px;
}

a {
    text-decoration: underline;
    color: #fff;
}

ul a:hover {
    text-decoration: none;
    color: #fff;
}
</style>