<template>
    <navbar-menu/>
    <div class="block-mission">
        <div class="container">
            <h1>Миссия сайта «Книга Фанфиков»</h1>
            <p>Дать возможность как начинающим, так и опытным авторам фанфиков и оригинальных текстов легко поделиться с миром результатами своего творчества.</p>
            <p>Создать максимально удобную, комфортную и доброжелательную обстановку как для писателей, так и для читателей.</p>
            <p>Стимулировать авторов на творческий и профессиональный рост, а читателей — на доброжелательность и желание поддержать начинающих.</p>
            <p>Дать возможность всем опубликовать работу любой тематики, рейтинга и направленности и позволить читателям легко найти именно то, что им интересно, с помощью систем оценок и рекомендаций.</p>
            <p>Вся работа команды «Книги Фанфиков» направлена на то, чтобы придерживаться этой миссии и воплощать ее в реальность.</p>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Menu/Navbar"

export default {
    components: {
        'navbar-menu': Navbar,
        
    },
}
</script>

<style scoped>
.block-mission {
    background-color: #f6ecda;
    color: #27150e;
    padding: 25px 0px;
}
</style>