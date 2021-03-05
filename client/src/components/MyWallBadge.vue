<template>
    <div v-if='!Session.user'>
        </div>
        <div  class="wall" v-else>
          <router-link class="navbar-item" tag="a" to="/mywall">
              My Wall    
          </router-link>
        </div>
  
</template>

<script>
    import Session from "../models/Session"
export default {
    data(){
        return {
            Session
        }
    }
}
</script>

<style>
div.wall {
    padding-top: 15px;
    height: 65px;
}

</style>