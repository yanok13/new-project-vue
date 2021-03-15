<template>
    <div class="home">
        <navbar-menu @addBook="addClickBook"/>
        <h2>Фанфики</h2>
        <ul>
            <li v-for="fanfic in fanfics" :key="fanfic.title">{{ fanfic.title }}</li>
        </ul>
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
                title: 'test '+Date.now(),
                body: 'Lorem ipsum',
                avtor: 'Yana',
                description: 'add book'
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