<template>
    <div class="navbar-menu flex">
        <ul class="flex">
            <li><a href="/"><i class="fa fa-home fa-1x"></i></a></li>
            <!-- <li><a href="#">Фанфики</a></li>
            <li><a href="#">Авторы</a></li> -->
            <li @click="addBook"><a href="#"><i class="fa fa-plus-circle"></i>Добавить фанфик</a></li>
        </ul>
        <div class="social-links flex">
            <div class="social vk">
                <a href="https://vk.com/ficbooknet" target="_blank"><i class="fa fa-vk fa-1x"></i></a>
            </div>
            <div class="social twitter">
                <a href="https://twitter.com/ficbooknet" target="_blank"><i class="fa fa-twitter fa-1x"></i></a>
            </div>
            <div class="social facebook">
                <a href="https://www.facebook.com/ficbook.net/" target="_blank"><i class="fa fa-facebook fa-1x"></i></a>
            </div>
            <div class="social instagram">
                <a href="https://www.instagram.com/ficbook.net.official/" target="_blank"><i class="fa fa-instagram fa-1x"></i></a>
            </div>
            <div class="social youtube-play">
                <a href="https://www.youtube.com/channel/UCbtVE1EkJhiaeO1jD2P7lQg" target="_blank"><i class="fa fa-youtube-play fa-1x"></i></a>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    methods: {
        addBook() {
            this.$emit('addBook')
        }
    }
}
</script>

<style scoped>
.navbar-menu {
    background-color: #faf5ea;
    font-size: 16px;
    font-weight: 500;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px 0px; 
}

.flex {
    display: flex;
}

ul {
    list-style-type: none;
    padding-top: 10px;
}

ul li {
    padding-right: 20px;
}

ul a {
    padding: 5px;
}

a {
    text-decoration: none;
    color: #88704f;
}

ul a:hover {
    color: #030200;
}

.social-links div{
    padding-right: 20px;
}

.social-links a:hover {
    color: #030200;
}
</style>