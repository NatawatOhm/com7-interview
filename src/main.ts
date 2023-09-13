import { createApp } from 'vue'
import './style.css'
import './utils/helper'
import App from './App.vue'
import Router from './router/index'
import { Popup } from 'vant'

import MainLayout from './components/mainLayout/MainLayout.vue'

const app = createApp(App)
//global component
app.component('MainLayout', MainLayout)
app.use(Popup)
app.use(Router)
app.mount('#app')
