<template>
  <div id="app">
    <Nav />
    
  
    <div>
        <router-view/>
    </div>
          
      <Footer />  
  </div>
</template>


<script>
  import Nav from "./components/Nav";
  import Footer from "./components/Footer";
export default {
  components: {
    Nav,
    Footer
  }
}
</script>


<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Bebas+Neue&family=Montserrat&display=swap');
</style>

