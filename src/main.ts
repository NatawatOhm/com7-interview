import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index'

import MainLayout from './components/mainLayout/MainLayout.vue'

const app = createApp(App)
app.component('MainLayout', MainLayout)
app.use(Router)
app.mount('#app')
