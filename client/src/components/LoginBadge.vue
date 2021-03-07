<template>
    <div>
        <div class="buttons" v-if="!Session.user">
            <router-link class="navbar-item button is-light" tag="a" to="/signup">
                Sign Up    
            </router-link>
            <router-link class="navbar-item button is-light" tag="a" to="/login">
                Login     
            </router-link>
        </div>
        <div class="greeting" v-else>
            <router-link class="greeting-name" to="/settings">Hello, Jasmine</router-link>
            (<a class="greeting-logout" @click="logout">
                Log out
            </a>)
        </div>
    </div>        
</template>

<script>
    import Session from "../models/Session"
export default {
    data(){
        return {
            Session
        }
    },
    methods: {
        login(){
            this.Session.user = { name: "Jasmine" }
        },
        logout(){
            this.Session.user = null
        }
    }
}
</script>

<style>
.buttons {
    margin-top: 10px;
}
.greeting {
    font-family: 'Bangers', cursive;
    margin: 10px;
    font-size: 25px;
    color: black;
}
a.greeting-name {
    color: black;
    font-family: 'Bangers', cursive;
    margin: 10px;
    font-size: 25px;
}
a.greeting-logout {
    color: #ffba08;
    font-family: 'Bangers', cursive;
    margin: 10px;
    font-size: 25px;
}
</style>