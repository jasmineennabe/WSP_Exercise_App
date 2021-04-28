<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-5by4">
                 <img class="is-rounded" :src="user.pic" :alt="`${user.firstName} ${user.lastName}`"> 
            </figure>
        </div>
        <div class="card-content">
            <div class="user-stats">
                <div class="stats">
                    <p class="num">{{ postNumber }}</p>
                    <p>Posts</p>
                </div>
                <div class="stats">
                    <p class="num">{{user.friends.length}}</p>
                    <p>Friends</p>
                </div>    
            </div> 
            <div class="add-friend" v-show="!alreadyFriends">
                <button class="add" @click.prevent="addFriend">
                    Add Friend <span class="plus">+</span>
                </button>
            </div>
            <div class="media">
                <div class="media-content">
                     <p class="title is-4">{{user.firstName}} {{user.lastName}}</p> 
                    <p class="subtitle is-6">@{{user.handle}}</p>
                </div> 
            </div>
            <p class="user-bio">"{{user.bio}}"</p>
        </div>
    </div>
</template>


<script>
    import Session from "../models/Session"
    import { GetFriends, AddFriend } from '../models/Users'

export default {
    data: ()=> ({
        usr: Session.user,
        friends: [],
        alreadyFriends: null,
    }),
    props: {
        user: Object,
        postNumber: Number,
    },
    methods: {
        edit(){

        },
        async mounted() {
            this.friends = await GetFriends(this.user.handle)
            if(this.friends.find(this.usr.handle)) {
                this.alreadyFriends = true;
            } else {
                this.alreadyFriends = false;
            }
        },
        addFriend(){
            AddFriend(this.user.handle);
        }
    }
}
</script>

<style scoped>
    .card {
        margin-left: 20px;
        margin-top: 10px;
    }
    img.is-rounded {
        max-height: 290px;
        max-width: 290px;
        margin: 5px auto;
    }
    div.media-content {
        cursor: default;
        margin: 0 auto;
        font-family: 'Montserrat', sans-serif;
        display: inline-block;
        width: 200px;
    }
    div.user-stats {
        cursor: default;
        display: inline-block;
        color: #710000;
        font-size: 20px;
        font-family: 'Bebas Neue', sans-serif;
        width: 150px;
        margin-bottom: 10px;
        padding: 5px;
    }
    div.add-friend {
        display: inline-block;
        margin-left: 30px;
    }
    button.add {
        border: none;
        font-family: 'Bebas Neue', sans-serif;
        background-color: #710000;
        color: white;
        font-size: 20px;
        padding: 5px 15px;
        border-radius: 4px;
        cursor: pointer;
    }
    span.plus {
        font-size: 25px;
        font-weight: bolder;
    }
    div.stats {
        display: inline-block;
        margin: 0 10px;
    }
    p.num {
        text-align: center;
        font-family: 'Bangers', cursive;
    }
    i {
        float: right;
        cursor: pointer;
    }
    p.user-bio {
        cursor: default;
        font-family: 'Montserrat', sans-serif;
        padding: 5px;
        font-weight: bolder;
        font-style: italic;
    }
</style>