<template>
  <div class="friends-panel"> 
    <article class="panel">
        <div class="panel-heading">
            Find Friends
            <p v-if="showFriends" @click.prevent="toggleFriends" class="toggle">
                <i class="fas fa-minus toggleBtn"></i>
            </p>
            <p v-else @click.prevent="toggleFriends" class="toggle">  
                <i class="fas fa-plus toggleBtn"></i>
            </p>
        </div>

        <div v-show="showFriends">
            <p class="ptabs">
                <a @click.prevent="toggleMyFriends">My Friends</a>
                <a @click.prevent="toggleGroups">Groups</a>
                <a @click.prevent="toggleSearch">Search</a>
            </p>

            <div v-show="showMyFriends">
                <div v-if="showLess">
                    <a class="panel-block" v-for="(friend, i) in friends.slice(0, 4)" :key="i">
                        <span class="panel-icon">
                            <i class="fas fa-user-friends" aria-hidden="true"></i>
                        </span>
                    <router-link :to="`/user/${friend.handle}`">{{ friend.firstName }} {{ friend.lastName }}</router-link>
                    </a>
                </div>
                <div v-else>
                    <a class="panel-block" v-for="(friend, i) in friends.slice(0, 10)" :key="i">
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

            <div v-show="showGroups">
                <div class="panel-block">
                    <span class="panel-icon">
                        <i class="fas fa-users" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="more">
                    <i @click.prevent="toggleShowMore" class="fas fa-ellipsis-h"></i>
                </div>
            </div>

            <div v-show="showSearch">
                <div class="panel-block search">
                    <div class="control has-icons-left">
                    <form @submit.prevent="searchFriends(handle)">
                        <input class="input" type="search" placeholder="Search" v-model="handle">
                    </form>
                    <span class="icon is-left">
                        <i type="submit" class="fas fa-search" aria-hidden="true"></i>
                    </span>
                        <div v-show="userFound">
                            <span class="panel-icon">
                                <br>
                                <i class="fas fa-user" aria-hidden="true"></i>
                            </span>
                            <router-link :to="`/user/${searchedUser}`">@{{searchedUser}}</router-link>
                        </div>
                        <div v-show="noUserFound">
                            <p>No user found</p>
                        </div>
                    </div>
                </div>
                <div class="more">
                    <i @click.prevent="toggleShowMore" class="fas fa-ellipsis-h"></i>
                </div>
            </div>
        </div>
    </article>
  </div>
</template>

<script>
    import { GetMyFriends, SearchUsers } from '../models/Users'
    
export default {
    data: ()=> ({
        handle: '',
        searchedUser: null,
        users: [],
        showFriends: false,
        showLess: true,
        friends: [],
        showMyFriends: true,
        showSearch: false,
        showGroups: false, 
        userFound: null,
        noUserFound: null,

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
        },
        toggleMyFriends() {
            this.showMyFriends = true;
            this.showSearch = false;
            this.showGroups = false;
            this.userFound = false;
        },
        toggleSearch() {
            this.showSearch = true;
            this.showMyFriends = false;
            this.showGroups = false;
            this.userFound = false;
        },
        toggleGroups() {
            this.showGroups = true;
            this.showMyFriends = false;
            this.showSearch = false;
            this.userFound = false;

        },
        async searchFriends(handle) {
            const usr = await SearchUsers(handle)
            if(usr) {
                this.searchedUser = usr.handle;
                this.userFound = true;
                this.noUserFound = false;
            } else {
                this.searchedUser = null;
                this.noUserFound = true;
                this.userFound = false;
            }
        }
    }, 
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
        margin: 10px 3px;
        border: solid;
        border-width: 1px; 
    }
    .friends-panel a {
        margin: 10px 5px;
        color: black;
        font-family: 'Montserrat', sans-serif;
        padding-left: 10px;
        padding-right: 10px;
    }
    .friends-panel a:hover {
        color: #710000;
        font-weight: bolder;
    }
    input.input {
        width: 250px;
        margin-bottom: 10px;
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