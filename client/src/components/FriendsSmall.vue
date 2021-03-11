<template>
  <div class="friends-panel">
    <article class="panel">
        <p class="panel-heading">
            Find Friends
        </p>
        <p class="ptabs">
            <a>My Friends</a>
            <a>Groups</a>
            <a>Chat</a>
        </p>
        <div class="panel-block search">
            <p class="control has-icons-left">
            <input class="input" type="search" placeholder="Search" v-model="handle">
            <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            </p>
        </div>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            John Doe
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            Jane Doe
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            Jack Doe
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            
        </a>
    </article>
  </div>
</template>

<script>
    // import Friends from './Friends.vue'

export default {
    data: ()=> ({
        handle: '',
        users: [],
        friends: [
            {
                name: 'John Doe',
                handle: "@johndoe",
                pic: 'https://randomuser.me/api/portraits/men/1.jpg',
            },
            { 
                name: 'Jane Doe',
                handle: "@janedoe",
                pic: 'https://randomuser.me/api/portraits/women/67.jpg',
            },
            { 
                name: 'Jack Doe',
                handle: "@jackdoe",
                pic: 'https://randomuser.me/api/portraits/men/32.jpg',
            },
        
        ]
    }),
    components: {
        // Friends,
    },
    methods: {
        // searchFriends(handle) {
        //     if(this.handle == handle) {
        //         return user;
        //     }
        // }
        
    }
}
</script>

<style scoped>
article.panel {
    width: 300px;
    margin-left: 25px;
}
.friends-panel {
    margin: 20px;
}
p.panel-heading {
    background-color: rgba(255, 185, 8, 0.7);
    font-family: 'Bebas Neue', sans-serif;
    font-size: 25px;
    color: black;
    padding: 10px 20px;
    font-weight: 400;
}
p.ptabs {
    text-align: left;
    margin-top: 10px;
}
.friends-panel a {
    margin: 10px 5px;
    color: black;
    font-family: 'Montserrat', sans-serif;
    padding-left: 10px;
    padding-right: 10px;
}
input.input {
    width: 250px;
}
button {
    cursor: pointer;
}
.panel-icon {
    margin-right: 20px;
}
</style>