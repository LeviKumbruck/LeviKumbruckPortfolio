import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import './assets/tailwind.css'
import reveal from './directives/reveal'



const app = createApp(App)

app.use(router)

app.directive('reveal', reveal)

app.mount('#app')

