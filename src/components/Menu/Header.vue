<template>
    <ul class="header-block flex">
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Правила</a></li>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header-block {
    background-color: #4f2d01;
}

.flex {
    display: flex;
}

ul {
    list-style-type: none;
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