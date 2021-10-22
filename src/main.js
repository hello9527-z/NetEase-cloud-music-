import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/font_2847663_pguenahjtl/iconfont.css'
import './assets/base.css'
import VueLazyload from "vue-lazyload";
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.use(Carousel);
// Vue.use(Pagination);
// Vue.use(Loading);
// Vue.use(Tabs);

// Vue.prototype.$bus = new Vue()

Vue.use(VueLazyload, {
  loading: require('./assets/gif/aa74078618d66311f605aa72be041afd.gif')
})

new Vue({
  router,
  store,
  // ElementPlus,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
