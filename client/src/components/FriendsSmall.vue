<template>
  <div class="friends-panel"> 
    <article class="panel">
        <div class="panel-heading">
            {{ text }}
            <!-- Find Friends -->
            <p v-if="showFriends" @click.prevent="toggleFriends" class="toggle">
                <i class="fas fa-minus toggleBtn"></i>
            </p>
            <p v-else @click.prevent="toggleFriends" class="toggle">  
                <i class="fas fa-plus toggleBtn"></i>
            </p>
        </div>
        <div v-show="showFriends">
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
            <div v-if="showLess">
                <a class="panel-block" v-for="(friend, i) in friends" :key="i"> <!-- .slice(0, 4) -->
                    <span class="panel-icon">
                        <i class="fas fa-user-friends" aria-hidden="true"></i>
                    </span>
                    {{ friend.firstName }} {{ friend.lastName }}
                </a>
            </div>
            <div v-else>
                <a class="panel-block" v-for="(friend, i) in friends" :key="i"> <!-- .slice(0, 10) -->
                    <span class="panel-icon">
                        <i class="fas fa-user-friends" aria-hidden="true"></i>
                    </span>
                    {{ friend.firstName }} {{ friend.lastName }}
                </a>
            </div>
            <div class="more">
                <i @click.prevent="toggleShowMore" class="fas fa-ellipsis-h"></i>
            </div>
        </div>
    </article>
  </div>
</template>

<script>
    import { GetMyFriends } from '../models/Users'
    
export default {
    data: ()=> ({
        handle: null,
        users: [],
        showFriends: false,
        showLess: true,
        friends: [],
    }),
    async mounted() {
        this.friends = await GetMyFriends();
    },
    props: {
        text: String,
    },
    methods: {
        toggleFriends() {
            this.showFriends = !this.showFriends
        },
        toggleShowMore() {
            this.showLess = !this.showLess
        }
        // searchFriends(handle) {
        //     if(this.handle == handle) {
        //         return user;
        //     }
        // }
        
    },
    // props: {
    //     showComp: Boolean,
    // }
}
</script>

<style scoped>
    article.panel {
        width: 300px;
        margin-top: -10px;
    }
    .friends-panel {
        margin: 20px;
    }
    div.panel-heading {
        background-color: rgba(255, 185, 8, 0.7);
        font-family: 'Bebas Neue', sans-serif;
        font-size: 25px;
        color: black;
        padding: 10px 20px;
        font-weight: 400;
        clear: both;
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
    .toggleBtn {
        font-size: 20px;
        color: black;
        float: right;
        margin-top: -25px;
        cursor: pointer;
    }
    .toggleBtn:hover {
        color: #a3a3a3;
    }
    .more {
        text-align: center;
        height: 20px;
        margin-top: -5px;
    }
    i.fas.fa-ellipsis-h {
        font-size: 20px;
        color: #a3a3a3;
        margin-left: -20px;
        cursor: pointer;
    }
</style>