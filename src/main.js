import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import store from './store'
import router from './router'
// 初始化样式表
import './styles/index.scss'
// 导入 svgIcon
import installIcons from '@/icons'

const app = createApp(App)
app.use(router)
installElementPlus(app)
installIcons(app)
app
  .use(store)
  .mount('#app')
