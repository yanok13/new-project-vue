<template>
    <navbar-menu @addBook="addClickBook"/>
    <div class="home">
        <div class="container">
            <h1>Фанфики</h1>
            <div class="books-list flex">
                <div class="book-one" v-for="fanfic in fanfics" :key="fanfic.title">
                    <div><img src="../assets/img/book2.jpg" alt="book" height="200" width="500"></div>
                    <div class="book-title">{{ fanfic.title }}</div>
                    <div class="book-avtor"><b>Автор:</b> {{ fanfic.avtor }}</div>
                    <div class="book-fandom"><b>Фэндом:</b> Ориджиналы</div>
                    <div class="book-description">{{ fanfic.description }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Menu/Navbar"
import firebase from 'firebase'

export default {
    name: 'Home',
    components: {
        'navbar-menu': Navbar,
    },
    data() {
        return {
            fanfics: {},
        }
    },
    methods: {
        addClickBook() {
            const testBook = {
                title: 'Яд из серебра' +Date.now(),
                body: 'Lorem ipsum vepsum',
                avtor: 'Yana Koiuda',
                description: 'Запомни: ты родился в той системе, где все делится на черное и белое, люди и все, что находится ниже них. Лживый мир и обманчивая свобода. Какой ценой можно получить возможность на жизнь? Здесь свои роли, цели, возможности. Стоит подчиниться и идти по заданному пути? Или же свернуть и устроить протест системе. А что, если механизм запущен на разрушение, где скрывается начало? Догадывался ли вообще кто-то, что будет все именно так? А может это и не разрушение вовсе, а новый виток с возможностями'
            }
            this.newBook(testBook)
            this.loadBooksList()
        },
        async newBook(newBook) {
           try {
               const addBook = await firebase.database().ref('book').push(newBook)
               console.log(addBook)
           } catch (error) {
               console.log(error.message)
               throw error
           }
       },
        async loadBooksList() {
           try {
                const query_booksList = await firebase.database().ref('book').once('value')
                this.fanfics = query_booksList.val()
           } catch (error) {
               console.log(error.message)
               throw error
           }
       },
    },
    created() {
        this.loadBooksList()
    }
}
</script>

<style scoped>
* {
    list-style: none;
    box-sizing: border-box;
}

img {
    display: block;
    max-width: 100%;
}

.home {
    background-color: #f6ecda;
    color: #27150e;
    padding: 25px 0px;
    font-size: 16px;
}

.flex {
    display: flex;
}

.books-list {
    flex-wrap: wrap;
    justify-content: space-between;
}

.book-one {
    margin-bottom: 30px;
    padding: 15px 20px;
    background-color: #faf5ea;
    max-width: 530px;
}

.book-title {
    font-size: 18px;
    font-weight: bold;
    padding: 5px 0px;
}

.book-avtor {
    padding: 5px 0px;
}

.book-fandom {
    padding: 5px 0px;
}

.book-description {
    padding: 5px 0px;
}
</style>