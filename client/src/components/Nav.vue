<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': isActive }" @click.prevent="isActive = !isActive">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    <div class="navbar-menu" :class="{ 'is-active': isActive }" @click.prevent="isActive = !isActive">
      <div class="navbar-start">
        <i class="fas fa-fire-alt navbar-item"></i>
        <router-link class="appTitle" tag="a" to="/">Runtime Fitness</router-link>

        <router-link class="navbar-item" tag="a" to="/feed">
            Feed    
        </router-link> 

        <router-link class="navbar-item" tag="a" to="/mywall">
            My Wall    
        </router-link>

        <router-link class="navbar-item" tag="a" to="/track">
            Track    
        </router-link> 

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-item">
                Discover    
            </a> 

            <div class="navbar-dropdown">
                <ul>
                    <li>
                      <router-link class="navbar-item" tag="a" to="/workouts">
                        Runtime Workouts    
                      </router-link> 
                    </li>
                    <li>
                      <router-link class="navbar-item" tag="a" to="/about">
                        About    
                      </router-link> 
                    </li>
                    <li>
                      <router-link class="navbar-item last" tag="a" to="/contact">
                        Contact    
                      </router-link> 
                    </li>
                </ul>
            </div>
        </div>                  
      </div>
      <div class="navbar-end">
        <LoginBadge />
      </div>
  </div>
</nav>
</template>

<script>
  import LoginBadge from "./LoginBadge";

export default {
    data: ()=> ({
      isActive:false,
    }),
    components: {
      LoginBadge,
    }
}
</script>

<style>
.navbar-menu {
    background-color: #d90429ff;
    padding: 0 20px;
    height: 65px;
}
.navbar i.fas {
    font-size: 40px;
    color: black;
    padding-right: 0;
}
.appTitle {
    font-size: 35px;
    padding-top: 5px;
    padding-left: 5px;
    margin-right: 10px;
    color: black;
    font-family: 'Bangers', cursive;
}
a.navbar-item {
    color: black;
    font-family: 'Bebas Neue', sans-serif;
    padding: 0 50px;
    font-size: 23px;
}
div.navbar-dropdown {
    background-color: #d90429ff;
    padding: 0;
}
.navbar-dropdown a.navbar-item {
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
  color: white;
  border-bottom: solid;
  border-color: white;
  border-width: 1px;
}
.navbar-dropdown a.last {
  border: none;
}
a.navbar-item.button.is-light {
    padding-left: 10px;
    padding-right: 10px;
    height: 40px;
    font-size: 22px;
    margin-left: 10px;
    margin-right: 5px;
    color: black;
}


/* HOVER STYLES */
a.navbar-item:hover {
    background-color: rgba(255, 186, 8, .7);
}
a.navbar-item.button.is-light:hover {
    background-color: rgba(255, 185, 8, 0.815);
}

</style>