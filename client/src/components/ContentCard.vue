<template>
  <div class="card">
    <div class="card-content" >
      <div v-if="Session.user.isAdmin==true">
        <button @click.prevent="$emit('delete')"><i class="fas fa-times"></i></button>
      </div>
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="post.user.pic" :alt="`${post.user.firstName} ${post.user.lastName}`" />
          </figure> 
        </div>
        <div class="media-content">
          <p class="title is-4" @click.prevent="$emit('goToProfile', `${post.user.handle}`)">
              {{post.user.firstName}} {{post.user.lastName}}
          </p>
          <p class="subtitle is-6">@{{post.user.handle}}</p>
        </div>
      </div>
    </div>
    
    <div class="card-image">
      <figure class="image">
        <img :src="post.src" :alt="post.alt"/>
      </figure>
    </div>
    <div class="card-content">

      <div class="content">
        <div class="cap">
            {{post.caption}}
        </div>
        <time class="time" :datetime="post.time">{{post.time}}</time>
      </div>
    </div>
    
    <footer class="card-footer">
        <a href="#" class="card-footer-item">
            <!-- Like -->
            <i class="far fa-thumbs-up"></i>
        </a>
        <a href="#" class="card-footer-item">
            <!-- Comment -->
            <i class="far fa-comment"></i>  
        </a>
        <a href="#" class="card-footer-item">
            <!-- Share -->
            <i class="fas fa-share"></i>
        </a>
    </footer>

  </div>
</template>

<script>
  import Session from "../models/Session"
  
export default {
    data() {
      return {
            Session
        }
    },
    props: {
      post: Object
    }
};
</script>

<style scoped>
  button {
    float: right;
    border: none;
    background-color: white;
    color: #707070;
    font-size: 20px;
  }
  button i {
    cursor: pointer;
  }
  .card-footer a {
    color: black;
    font-family: 'Bangers', cursive;
    font-size: 20px;
  }
  .card-footer i {
    margin-left: 10px;
  }
  .cap {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin: 0px;
  }
  time.time {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
  }
  p.title.is-4 {
    cursor: pointer;
  }
   p.title.is-4:hover {
     color: #a3a3a3;
  }
</style>