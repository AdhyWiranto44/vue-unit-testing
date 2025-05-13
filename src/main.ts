import { createApp } from 'vue'
import './style.css'
import '@oruga-ui/theme-oruga/dist/oruga.css';
import Oruga from '@oruga-ui/oruga-next';
import App from './App.vue'

createApp(App).use(Oruga).mount('#app')
