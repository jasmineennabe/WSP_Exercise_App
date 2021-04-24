<template>

  <div id="app">
    <Nav />
    
  
    <div>
        <router-view/>
    </div>
          
      <!-- <Footer />   -->
  </div>
</template>


<script>
  import Nav from "./components/Nav";

export default {
  components: {
    Nav,
  }
}
  /*global FB*/
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '162402852462299',
      cookie     : true,
      xfbml      : true,
      version    : 'v10.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

</script>


<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Bebas+Neue&family=Montserrat&display=swap');
</style>


