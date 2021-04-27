<template>
  <div class="home">
      <div class="columns">
          <div class="column is-one-quarter">
              <FriendsSmall :text="'Find Friends'" /> 
          </div>
          
          <div class="column">
              <h1>Runtime Fitness</h1>
              <h4>Track and share your fitness journey</h4>

              <div v-show="showContentCreation"> 
                  <ContentCreation :newPost="newPost" @add="addPost" />
              </div>

              <div class="feed" v-for="(post, i) in posts" :key="i">
                  <ContentCard :post="post" @delete="deletePost(i)" @goToProfile="goTo" />
              </div>
          </div>

          <div class="column is-one-quarter">
              <div class="content-item new-post-creator"> 
                  <Button @toggleContentCreation="toggleContentCreation" :text="showContentCreation ? 'Close' : 'New Post'"/>
              </div>
          </div>
      </div>
      <div>
        <!-- <div class="column">
            <h1>Runtime Fitness</h1>
            <h4>Track and share your fitness journey</h4>
        </div> -->
      </div>
    
      <!-- <b-carousel :autoplay="false" indicator-custom :indicator-inside="false" :overlay="gallery" @click="switchGallery(true)">
          <b-carousel-item v-for="(item, i) in 20" :key="i">
              <a class="image ">
                  <img :src="getImgUrl(i)">
              </a>
          </b-carousel-item>
          <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
          <template #indicators="props">
              <figure class="al image" :draggable="false">
                  <img :draggable="false" :src="getImgUrl(props.i)" :title="props.i">
              </figure>
          </template>
      </b-carousel>   -->
    </div>
</template>

<script>
    import Button from "../components/Button";
    import ContentCard from '../components/ContentCard';
    import ContentCreation from '../components/ContentCreation';
    import FriendsSmall from "../components/FriendsSmall";
    import { GetMyFeed, AddPost, DeletePost } from "../models/Posts";
    import Session from "../models/Session";

export default {
  data:()=> ({
    newPost: {
      user: Session.user,
      time: Date()
    },
    posts: [],
    showContentCreation: false,

    //gallery: false
  }),
  async mounted() {
      this.posts = await GetMyFeed();
  },

  methods: {
    async addPost(){
      const post = await AddPost(this.newPost)
      this.posts.unshift(post);
      this.newPost = { user: Session.user }
    }, 

    async deletePost(i){
      await DeletePost(i);
      this.posts.splice(i, 1);
    },
    toggleContentCreation() {
      this.showContentCreation = !this.showContentCreation
    },
    goTo(value) {
      this.$router.push({ path: `/user/${value}`, params: { handle: value } })
    }



    // getImgUrl(value) {
    //     value += 50
    //     return `https://picsum.photos/id/10${value}/1230/500`
    // },
    // switchGallery(value) {
    //     this.gallery = value
    //     if (value) {
    //         return document.documentElement.classList.add('is-clipped')
    //     } else {
    //         return document.documentElement.classList.remove('is-clipped')
    //     }
    // }, 
  },
  components: {
    ContentCard,
    ContentCreation,
    Button,
    FriendsSmall,
  }
}
</script>

<style scoped>
  .home {
    display: block;
    margin-top: 20px;
  }
  .home h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 600;
    font-size: 50px;
    text-align: center;
    color: black;
  }
  .home h4 {
    font-family: 'Bebas Neue', sans-serif;
    font-weight: lighter;
    font-size: 25px;
    text-align: center;
    color: black;
    margin-bottom: 20px;
  }
  .feed {
    display: block;
    margin: 10px auto;
    width: 75%;

  }
  .is-active .al img {
    border: 1px solid #fff;
    filter: grayscale(0%);
  }
  .al img {
    border: 1px solid transparent;
    filter: grayscale(100%);
  }
</style>
