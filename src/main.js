import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from "@/router"
import firebaseConfig from "@/firebaseConfig"
import firebase from 'firebase'

firebase.initializeApp(firebaseConfig)

const app = createApp(App)
app.use(router)
app.mount('#app')
