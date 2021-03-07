import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import MyWall from '@/views/MyWall.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/mywall', name: 'My Wall', component: MyWall },
  { path: '/login', name: 'Login', component: Login },
  { path: '/routine', name: 'Routine', component: () => import(/* webpackChunkName: "about" */ '../views/Routine.vue')},
  { path: '/settings', name: 'Settings', component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue')},
  { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')},
  { path: '/signup', name: 'Sign Up', component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')},
  { path: '/track', name: 'Track', component: () => import(/* webpackChunkName: "about" */ '../views/Track.vue')}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
