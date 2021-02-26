<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <i class="fas fa-fire-alt navbar-item"></i>
        <a class="navbar-item appTitle">Runtime Fitness</a>

        <router-link class="navbar-item" tag="a" to="/">
            Home    
        </router-link> 

        <router-link class="navbar-item" tag="a" to="/track">
            Track    
        </router-link> 

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-item">
                Discover    
            </a> 

            <div class="navbar-dropdown">
                <router-link class="navbar-item" tag="a" to="/workouts">
                    Runtime Workouts    
                </router-link> 
                <router-link class="navbar-item" tag="a" to="/cc">
                    Community Catalogue    
                </router-link> 
                <router-link class="navbar-item" tag="a" to="/challenges">
                    Challenges    
                </router-link> 
            </div>
        </div>
      </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
                <router-link class="navbar-item button is-light" tag="a" to="/signup">
                    Sign Up    
                </router-link>
                <a class="navbar-item button is-light" onclick=openLogin()>
                    Login     
                </a>
            </div>
      </div>
    </div>
        <div class="login-popup" id="loginForm">
            <form action="/action_page.php" class="login-container">
              <button type="button" class="close" onclick="closeLogin()">x</button>

              <h1>Login</h1>
        
              <label for="email"><b>Email</b></label>
              <input class="emailinput" type="text" placeholder="Enter Email" name="email" required>
              <br>
              <label class="pswlabel" for="psw"><b>Password</b></label>
              <input class="pswinput" type="password" placeholder="Enter Password" name="psw" required>
              <br>
              <button type="submit" class="loginbtn">Login</button>
              <br> 
            </form>
        </div>
  </div>
</nav>
</template>

<script>

    // function openLogin() {
    //       document.getElementById("loginForm").style.display = "block";
    //     }

export default {

}
</script>

<style>

.navbar, .navbar-start, .navbar-end {
    background-color: #d90429ff;
    width: 100%;
}
.navbar-start {
    padding-left: 40px;
}
.navbar-end {
    padding-right: 40px;
}
.fas {
    color: black;
    font-size: 40px;
    margin-top: 10px;
}
.navbar-item + .appTitle {
    padding: 15px 0;
    font-size: 35px;
    font-family: 'Bangers', cursive;    
    margin-right: 30px;
}
.buttons .is-light {
    padding: 15px 30px;
}
.navbar-item .button {
    color: black;
}
.button.is-light:hover {
    background-color: rgba(255, 186, 8, .7);
}

</style>