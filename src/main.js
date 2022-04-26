import { createApp } from 'vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
import App from '@/App.vue'
import '@/styles/index.css'
import '@/styles/app.css'
const app = createApp(App)
app.use(VueSmoothScroll, {
    offset: -123,
})
app.mount('#app')
