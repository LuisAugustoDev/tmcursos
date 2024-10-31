import { createApp } from 'vue'
import App from './App.vue'
import router from './rotas'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './assets/main.scss'

const default_title = "TecnoMinds";
const app = createApp(App)

app.use(router)

app.mount('#app')
