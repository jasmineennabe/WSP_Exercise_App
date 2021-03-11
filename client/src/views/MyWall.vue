<template>
  <div class="my-wall">
    <div class="columns">
      <div class="column is-one-quarter">  
          <FriendsSmall />  
      </div>

      <div class="column">
          <div v-show="showContentCreation"> 
              <ContentCreation :newPost="newPost" @addPost="addPost()" />
          </div>
            
        <div class="content-item" v-for="(post, i) in posts" :key="i">
            <ContentCard @delete-post="deletePost" :post="post" />
        </div>
      </div>
      <div class="column is-one-quarter">  
        <!-- <div class="content-item"> -->
            <div class="content-item new-post-creator"> 
              <Button @toggleContentCreation="toggleContentCreation" :text="showContentCreation ? 'Close' : 'New Post'"/>
          </div> 
            <!-- <ContentCard :post="newPost" /> -->
        <!-- </div>  -->
      </div>
    </div>
  </div>
</template>

<script>
    import Button from "../components/Button"
    import ContentCard from "../components/ContentCard";
    import ContentCreation from '../components/ContentCreation.vue';
    import FriendsSmall from "../components/FriendsSmall"
    import { GetMyPosts } from "../models/Posts"
    
export default {
    data: ()=> ({
        newPost: {
            user: { }
        },
        posts: [],
        showContentCreation: false,
    }),
    mounted() {
        this.posts = GetMyPosts();
    },
    components: {
        Button,
        ContentCard,
        FriendsSmall,
        ContentCreation,
    },
    methods: {
        addPost(){
            this.posts.unshift(this.newPost);
            this.newPost = { user: {} }
        },
        deletePost(i) {
            this.posts.splice(i, 1)
        },
        toggleContentCreation() {
            this.showContentCreation= !this.showContentCreation
        }
    }
}
</script>

<style>
.my-wall {
    display: block;
}
.content-item {
    margin: 20px 40px;
    display: block;
}
.new-post-creator {
    margin-left: -40px;
    width: 109px;
}
div.create {
    border: solid;
    border-radius: 4px;
    border-color: #8f8f8f;
    background-color: white;
    margin: 10px auto;
    height: 400px;
}
.field {
    width: 150px;
    display: inline-block;
    margin: 20px;
    height: 40px;
}
.create label.label {
    margin-top: 30px;
    width: 120px;
}
div.field-label {
    padding: 0 20px;
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 18px;
    text-align: right;
    margin: 0;
}
input.input {
    width: 150px;
    padding-left: 5px;
}
input.input.img-link, div.control.longer {
    width: 335px;
    overflow: scroll;
}
button.post-btn {
    font-family: 'Bebas Neue', sans-serif;
    color: white;
    background-color: #710000;
    font-size: 25px;
    border: none;
    border-radius: 4px;
    padding: 10px;
    margin-top: 60px;
    margin-left: 280px;
    width: 100px;
    cursor: pointer;
    /* float: left; */
}
div.column {
    padding: 0;
    width: 33vw;
}
</style>