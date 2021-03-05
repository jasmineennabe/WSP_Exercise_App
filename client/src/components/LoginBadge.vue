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
            Hello, Jasmine
            (<a @click="logout">
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
    margin: 15px 10px;
    font-size: 25px;
    color: black;
}
.greeting a {
    color: #ffba08;
}
</style>