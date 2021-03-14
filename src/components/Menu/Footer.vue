<template>
    <div class="footer-block">
        <div class="flex">
            <ul class="flex bottom-menu">
                <li><a href="#">Служба поддержки</a></li>
                <li><a href="#">Новости сайта</a></li>
                <li><a href="#">Миссия сайта</a></li>
                <li><a href="#">Пользовательское соглашение</a></li>
                <li><a href="#">Политика обработки персональных данных</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Правила</a></li>
                <li><a href="#">Реклама на сайте</a></li>
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
        <div class="copyright">
            <p>&#169;2009-2021 Книга Фанфиков</p>
            <p>Права на все произведения, опубликованные на сайте, принадлежат авторам произведений. Администрация не несет ответственности за содержание работ.</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);

.footer-block {
    background-color: #4f2d01;
}

.bottom-menu {
    align-items: center;
}

.flex {
    display: flex;
}

ul {
    list-style-type: none;
    flex-wrap: wrap;
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

.social a {
    text-align: center;
}

.social-links {
    align-items: flex-start ;
}

.social-links div{
    padding-right: 20px;
}

.social-links a:hover {
    color: #fff;
}

.copyright {
    text-align: center;
    color: #c69e6b;
}
</style>