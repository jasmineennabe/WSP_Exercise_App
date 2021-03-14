<template>
  <div class="home">
      <h1>Runtime Fitness</h1>
      <h4>Track and share your fitness journey</h4>
      <div class="columns">
        <div class="column is-one-quarter">

        </div>
        <div class="column">
          <div class="feed" v-for="(post, i) in posts" :key="i">
              <ContentCard :post="post" />
          </div>
        </div>
        <div class="column is-one-quarter">

        </div>

      </div>
    
        <!-- <h2>More Motivation</h2>

        <h3>New to fitness?</h3> 
        <p>Don't know where to start? Well don't quit while you're ahead! <a href=#>Here</a> you can set up virtual appointments with fitness coaches and nutritionists who can help you develop workout plans and meal plans based on your goals, whatever they may be. </p>
        <h3>Discover</h3> 
        <p>Our very own team at Runtime Fitness has filmed over 100 workout videos for you to watch, learn and follow. We have categorized our videos from beginner to advanced and can find them in the <a href=#>Discover</a> section. If your interests are more specific, you can also search through the <a href=#>Community Catalogue</a> where members upload their very own workout videos for the world to see.</p>
        <h3>Share</h3>
        <p>For those of you who want to create and share your own fitness content, here at Runtime Fitness, you're able to do so. You can <a href=#>Upload Videos</a> to our Community Catalogue that will also be posted on your account's feed. If you make your profile public, you will be able to attract followers from all around the world who can watch and react to your fitness journey.</p>
        <p>Please make sure to read our <a href=#>Rules & Regulations</a> documentation before uploading content to the Community Catalogue. You will need to sign off on the document before the app allows you to post photos or videos.</p>
        <figure class="image">
          <img src="gym1.jpg"
                width="700" height="360" alt="Gym equipment">
        </figure>
        <img src="gym2.jpg"
                width="600" height="360" alt="Gym equipment"> -->

    
    
        <!-- <div class="social">
          <h3>Sign in on these platforms to share your Runtime content!</h3>
            <ul>
              <li><a href="#">Email</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
        </div> -->

        <!-- <div class="field">
          <label>Stay up to date!</label><br>
          <input class="input" type="email" style="height: 30px; width: 200px;" placeholder="Enter your email">
        </div> -->
   


  </div>
</template>

<script>
  import ContentCard from '../components/ContentCard';
  import { GetMyFeed } from "../models/Posts";

export default {
  name: 'Home',
    data:()=> ({
      posts: []
    }),
    mounted() {
        this.posts = GetMyFeed();
    },
    components: {
      ContentCard
    }
}
</script>

<style scoped>
  .home {
    display: block;
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
    margin: 10px;
  }
</style>
