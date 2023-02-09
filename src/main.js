import { createApp } from 'vue'
import { VueFire } from 'vuefire'

import App from './App.vue'
import router from './router'
import { firebaseApp } from './firebase'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(VueFire, {
  firebaseApp
});

app.mount('#app')
