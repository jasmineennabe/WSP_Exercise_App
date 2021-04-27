import Vue from 'vue'
import Buefy from "buefy";

import App from './App.vue'
import router from './router'
import FriendsSmall from './components/FriendsSmall'

import 'bulma';
import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './sass/main.scss'

Vue.use(Buefy);
Vue.component('FriendsSmall', FriendsSmall);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')