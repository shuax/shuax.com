import { createApp } from 'vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
import App from '@/App.vue'
import '@/styles/index.css'
import '@/styles/app.css'
const app = createApp(App)

const easeInOutQuart = t => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t

app.use(VueSmoothScroll, {
    offset: -123,
    duration: 600,
    easingFunction: easeInOutQuart,
})
app.mount('#app')
