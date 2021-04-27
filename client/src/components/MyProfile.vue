<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-5by4" v-show="!showEdit">
                <img class="is-rounded" :src="Session.user.pic" :alt="`${Session.user.firstName} ${Session.user.lastName}`">    
            </figure>
            <figure class="image is-5by4" v-show="showEdit">
                <img class="is-rounded" :src="imageSource" alt="Change Photo"> 
                <button class="edit-photo" @click.prevent="changeSource">Change Photo</button>
            </figure> 
        </div>
        <div class="source-popup" v-show="!photoChanger&&showEdit">
            <form @submit.prevent="">
                <label class="lbl" for="currentPic">Current Image URL:</label>
                <input name="currentPic" type="text" :value=Session.user.pic>
                <br>
                <label class="lbl" for="newPic">New Image URL:</label>
                <input type="text" name="newPic" v-model="newPic" >
            </form> 
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
                <button class="save" v-show="showEdit" @click.prevent="updateUser">Save Changes</button>
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{Session.user.firstName}} {{Session.user.lastName}}</p> 
                    <p class="subtitle is-6">@{{Session.user.handle}}</p> 
                </div>
                <i @click.prevent="edit" class="title is-4 fas fa-user-edit"></i>
            </div>
            <div v-show="!showEdit">
                <p class="user-bio">{{Session.user.bio}}</p>
            </div>
            <div v-show="showEdit">
                <textarea v-model="newBio" class="bio" placeholder="Tap here to edit your bio"></textarea>
            </div>
        </div>
    </div>
</template>


<script>
    import Session from "../models/Session"
    import { UpdateProfile } from '../models/Users'

export default {
    data(){
        return {
            Session,
            showEdit: false,
            newBio: null,
            newPic: null,
            imageSource: 'https://www.htmlcsscolor.com/preview/gallery/CDCDCD.png',
            photoChanger: true,
        }
    },
    props: {
        postNumber: Number, 
    },
    methods: {
        edit(){
            this.showEdit = !this.showEdit
        },
        changeSource(){
            this.photoChanger = !this.photoChanger
        },
        async updateUser() {
            const updatedUser = { 
                // firstName: Session.user.firstName, 
                // lastName: Session.user.lastName,
                pic: this.newPic,
                bio: this.newBio,  
            }
            console.log("updated user: ", updatedUser)
            await UpdateProfile(Session.user, updatedUser);
            //Session.user.bio = this.newBio
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
        clear: both;
        position: absolute;
    }
    button.edit-photo {
        float: left;
        border: none;
        background-color: #cdcdcd;
        margin-top: -140px;
        cursor: pointer;
        margin-left: 110px;
        position: relative;
        font-size: 25px;
        font-family: 'Bebas Neue', sans-serif;
    }
    button.edit-photo:hover {
        color: #710000;
    }
    div.source-popup {
        background-color: white;
        border: solid;
        border-color: #a3a3a3;
        border-radius: 4px;
        float: right;
        width: 90%;
        height: 100px;
        position: relative;
        margin-top: 20px;
        margin-right: 20px;
    }
    form {
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        margin-top: 20px;
    }
    input {
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        margin-bottom: 10px;
        width: 175px;
    }
    label.lbl {
        margin-right: 5px;
        color: black;
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
    div.save-btn {
        display: inline-block;
        width: 100px;
    }
    button.save {
        float: right;
        margin-top: -50px;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 20px;
        color: black;
        border: none;
        border-radius: 4px;
        background-color: #cdcdcd;
        cursor: pointer;
        padding: 5px;
    }
    button.save:hover {
        color: white;
        background-color: #710000;
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
    p.user-bio {
        border: solid;
        border-color: #a3a3a3;
        border-width: 1px;
        padding: 5px;
    }
    textarea.bio {
        margin-left: auto;
        margin-right: auto;
        font-family: 'Montserrat', sans-serif;
        padding: 5px;
        width: 295px;
        height: 100px;
        background-color: #eeeeee;
        font-style: italic;
    }
    i {
        float: right;
        cursor: pointer;
    }
</style>