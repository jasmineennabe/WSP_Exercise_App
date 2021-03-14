import Vue from 'vue'
import VueRouter from 'vue-router'
import Feed from '@/views/Feed.vue'
import MyWall from '@/views/MyWall.vue'
import Login from '@/views/Login.vue'
import Session from '@/models/Session'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Feed', component: Feed },
  { path: '/mywall', name: 'My Wall', component: MyWall },
  { path: '/login', name: 'Login', component: Login },
  { path: '/createworkout', name: 'Create Workout', component: () => import(/* webpackChunkName: "about" */ '../views/CreateWorkout.vue')},
  { path: '/myroutines', name: 'My Routines', component: () => import(/* webpackChunkName: "about" */ '../views/MyRoutines.vue')},
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

router.beforeEach( (to, from, next) =>{
  console.log({ from, to })
  if(to.path == '/mywall' && !Session.user) {
     next('/login') 
  }
  else {
     next();
  }
} )


export default router
