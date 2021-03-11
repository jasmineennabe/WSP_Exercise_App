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
            <h1 class="greeting-name">Hello, Jasmine</h1>
            (<a class="greeting-logout" @click.prevent="logout">
                Log out
            </a>)
            <AdminBadge />
        </div>
    </div>        
</template>

<script>
    import Session, { Login, Logout } from "../models/Session"
    import AdminBadge from "../components/AdminBadge"

export default {
    data(){
        return {
            Session
        }
    },
    methods: {
        login(){
            Login();
        },
        logout(){
            Logout();
        }
    },
    components: {
        AdminBadge,
    }
}
</script>

<style scoped>
.buttons {
    margin-top: 10px;
}
.greeting {
    font-family: 'Bangers', cursive;
    margin-bottom: 5px;
    font-size: 25px;
    color: black;
}
h1.greeting-name {
    color: black;
    font-family: 'Bangers', cursive;
    margin: 10px 0;
    font-size: 25px;
    display: inline-block;
}
a.greeting-logout {
    color: #ffba08;
    font-family: 'Bangers', cursive;
    margin: 10px 5px;
    font-size: 25px;
    display: inline-block;
}
</style>