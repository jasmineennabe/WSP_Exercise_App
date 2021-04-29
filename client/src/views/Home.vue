<template>
  <div class="home">
        <h2>Welcome to Runtime Fitness!</h2>
        <p>We hope you're ready to take on the fitness journey of a lifetime. Here you can upload your fitness #Goals, #Gains, #Tips and #Journey!<br> 
        <p>If you aren't already a member, press <a href="/signup">here</a> to sign up with us to start using our app!</p>
        <!-- There are so many ways to stay motivated including <a href=#>Share with Friends</a>, <a href=#>Challenge Friends</a> and by checking the <a href=#>Local Challenges</a> page.</p> -->
        
        <br>
        
        <h2>Fitness Tracking</h2>
        <h3>Track</h3>
        <p>Here at Runtime Fitness you can create workout routines on our <a href="/track">Track</a> page. We'll keep track of your progress weekly in our <i>Progress Bar</i>.</p>
        <p>You can create as many fitness routines as you'd like and access them through the Track page as well.</p>
        <!-- <h3>New to fitness?</h3> 
        <p>Don't know where to start? Well don't quit while you're ahead! <a href=#>Here</a> you can set up virtual appointments with fitness coaches and nutritionists who can help you develop workout plans and meal plans based on your goals, whatever they may be. </p> -->
        <!-- <h3>Discover</h3> 
        <p>Our very own team at Runtime Fitness has filmed over 100 workout videos for you to watch, learn and follow. We have categorized our videos from beginner to advanced and can find them in the <a href=#>Discover</a> section. If your interests are more specific, you can also search through the <a href=#>Community Catalogue</a> where members upload their very own workout videos for the world to see.</p> -->
        <br>

        <h2>Create Fitness Content</h2>
        <h3>Fitness Content for the world</h3>
        <p>Share your fitness posts for the world to see! You can create new posts on our <a href="/feed">Feed</a> page.</p>
        <p>Tell your fitness story through your photos and captions, and on your editable profile at <a href="/mywall">My Wall</a>.</p>

        <br>

        <h2>Fitness Community</h2>
        <h3>Find Friends</h3>
        <p>You can search for people you know in our Search bar on any of our pages. Simply open up the <i>Find Friends</i> panel, select <i>Search</i> and search!</p>
        <p>If someone shows up after your search, press on their handle to go to their page. From their you can choose to <i>Add</i> them as a friend if you'd like.</p>
        <p>Once you've added some friends, you can now see and interact with each other's fitness posts on your <a href="/feed">Feed</a>!</p>
        <p>The <i>Find Friends</i> panel will also show you a list of your friends and any groups you're a part of.</p>


        <!-- <p>For those of you who want to create and share your own fitness content, here at Runtime Fitness, you're able to do so. You can <a href=#>Upload Videos</a> to our Community Catalogue that will also be posted on your account's feed. If you make your profile public, you will be able to attract followers from all around the world who can watch and react to your fitness journey.</p>
        <p>Please make sure to read our <a href=#>Rules & Regulations</a> documentation before uploading content to the Community Catalogue. You will need to sign off on the document before the app allows you to post photos or videos.</p> -->
        <!-- <figure class="image">
          <img src="gym1.jpg"
                width="700" height="360" alt="Gym equipment">
        </figure>
        <img src="gym2.jpg"
                width="600" height="360" alt="Gym equipment"> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .home {
      margin: 20px 40px;
  }
  h1, h2, h3, h4 {
    font-family: 'Bebas Neue', sans-serif;
  }
  h2 {
    font-size: 30px;
    color: black;
  }
  h3 {
    color: #710000ff;
    font-size: 25px;
  }
  header {
    background: #ffffff;
    color: #000000ff;
    padding: 1px;
    font-size: 25px;
    text-align: center;
    margin-bottom: 0;
  }
  p, a {
    font-family: 'Montserrat', sans-serif;
  }
  a {
    color: black;
    font-style: italic;
    text-decoration: underline;
    border-radius: 4px;
  }
  a:hover {
    background-color: rgba(255, 212, 102, 0.7);
  }
</style>