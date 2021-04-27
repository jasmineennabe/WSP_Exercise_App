<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-5by4">
                 <img class="is-rounded" :src="Session.user.pic" :alt="`${Session.user.firstName} ${Session.user.lastName}`"> 
            </figure>
        </div>
        <div class="card-content">
            <div class="user-stats">
                <div class="stats">
                    <p class="num">{{ postNumber }}</p>
                    <p>Posts</p>
                </div>
                <div class="stats">
                    <p class="num">{{ Session.user.friends.length }}</p>
                    <p>Friends</p>
                </div>    
            </div> 
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{Session.user.firstName}} {{Session.user.lastName}}</p> 
                    <p class="subtitle is-6">@{{Session.user.handle}}</p> 
                </div>
                <i @click.prevent="edit" class="title is-4 fas fa-user-edit"></i>
            </div>
            
            <textarea class="bio" placeholder="Tap here to create a bio and tell the world about yourself"></textarea>
        </div>
    </div>
</template>


<script>
    import Session from "../models/Session"

export default {
    data(){
        return {
            Session,
        }
    },
    props: {
        postNumber: Number, 
    },
    methods: {
        edit(){

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
    div.media {
        margin-bottom: 0;
    }
    div.media-content {
        margin-left: auto;
        margin-right: auto;
        font-family: 'Montserrat', sans-serif;
        display: inline-block;
        width: 200px;
    }
    div.user-stats {
        display: block;
        color: #710000;
        font-size: 20px;
        font-family: 'Bebas Neue', sans-serif;
        width: 150px;
        margin-bottom: 10px;
        padding: 5px;
    }
    div.stats {
        display: inline-block;
        margin: 0 10px;
    }
    p.num {
        text-align: center;
        font-family: 'Bangers', cursive;
    }
    textarea.bio {
        margin-left: auto;
        margin-right: auto;
        font-family: 'Montserrat', sans-serif;
        padding: 5px;
        width: 295px;
        height: 100px;
    }
    i {
        float: right;
        cursor: pointer;
    }
</style>