import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'

new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
