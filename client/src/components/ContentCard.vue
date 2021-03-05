<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="post.user.pic" :alt="post.user.name" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{post.user.name}}</p>
          <p class="subtitle is-6">{{post.user.handle}}</p>
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
        {{post.caption}}
        <br />
        <time :datetime="post.time">{{post.time}}</time>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">
        Like
        <i class="far fa-thumbs-up"></i>
      </a>
      <a href="#" class="card-footer-item">
        Comment
        <i class="far fa-comment"></i>  
      </a>
      <a href="#" class="card-footer-item">
        Share
        <i class="fas fa-share"></i>
      </a>
    </footer>

  </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
};
</script>

<style>
  .card-footer a {
    color: black;
    font-family: 'Bangers', cursive;
    font-size: 25px;
  }
  .card-footer i {
    margin-left: 10px;
  }
</style>