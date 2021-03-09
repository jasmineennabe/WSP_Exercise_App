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
            <input @submit="findFriends" class="input" type="search" placeholder="Search" v-model="handle">
            <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            </p>
        </div>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            <!-- bulma -->
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            <!-- marksheet -->
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            <!-- minireset.css -->
        </a>
        <a class="panel-block">
            <span class="panel-icon">
            <i class="fas fa-user-friends" aria-hidden="true"></i>
            </span>
            <!-- jgthms.github.io -->
        </a>
    </article>
  </div>
</template>

<script>
export default {
    data: ()=> ({
        handle: '',
        users: [],
        friends: [
            {
                user: { }
            }
        ]
    }),
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

</style>