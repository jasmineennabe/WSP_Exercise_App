<template>
  <div id="app">
    <div id="nav">
      
      <body> 
        <header>
          <h1>Runtime Fitness</h1>
          <h4>Track and share your fitness journey</h4>
          <!-- <h4></h4> -->
        </header>    

        <div class="content">

          <div class="container">
            <div class="navbar">
              <router-link tag="a" to="/Home.vue">Home</router-link> 
              <a href="#contact">Track</a>
            </div>
            <div class="dropdown">
              <router-link tag="a" to="/Discover.vue">Discover</router-link>
                <div class="dropdown-content">
                  <ul>  
                    <li><a href="#">Runtime Workouts</a></li>
                    <li><a href="#">Community Catalogue</a></li>
                    <li><a href="#" class="last">Challenge Page</a></li>
                  </ul>
                </div>
            </div>
            <div class="sign-in" >
              <button class="sign-in" onclick="openLogin()">Sign In/Sign Up</button>
            </div>

             <!-- LOGIN  -->

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
                <button type="button" class="btn" onclick="signUpForm(); closeLogin()">Not a member? Sign Up</button>
              </form>
            </div>

        

                <!-- SIGN UP  -->
        
            <div class="signUp-popup" id="signUpForm">
              <form action="/action_page.php" class="signUp-container">

                <h1>Background Information</h1>
          
                <label class="first" for="firstName"><b>First Name</b></label>
                <input class="firstName" type="text" placeholder="John" name="firstName" required>
                <br>
                <label class="last" for="lastName"><b>Last Name</b></label>
                <input class="lastName" type="text" placeholder="Doe" name="lastName" required>
                <br>
                <label class="bday" for="birthday"><b>Date of Birth</b></label>
                <input class="birthday" type="date" placeholder="01/02/1993" name="birthday" required>

                <h1 class="register">Account Registration</h1>

                <label class="usr" for="username"><b>Username</b></label>
                <input class="username" type="text" placeholder="Create a Username" name="username" required>
                <br>
                <label for="email"><b>Email</b></label>
                <input class="email" type="text" placeholder="Enter Email" name="email" required>
                <br>
                <label class="pswlabel" for="psw"><b>Password</b></label>
                <input class="password" type="password" placeholder="Enter Password" name="psw" required>
                <br>
                <label class="mobile" for="phone"><b>Mobile #</b></label>
                <input class="phone" type="tel" placeholder="(888)888-8888" name="phone">
                <br>
                
                <div class="checkbox-question1">
                  <input type="checkbox" name="question1">
                  <label for="question1">Would you like to receive text notifications?</label>
                  <br>
                </div>
                <div class="checkbox-question2">
                  <input type="checkbox" name="question2">
                  <label for="question2">Would you like to receive email notifications?</label>
                </div>

                <div class="terms-heading">
                  <h4>Terms & Conditions</h4>
                </div>

                <div class="terms-container">
                  <h5>A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. </h5>
                </div>
                
                <input type="checkbox" name="terms" required>
                <label class ="terms-agreement" for="terms">I agree to the Terms & Conditions</label>

                <br>
                <button type="submit" class="registerbtn" onclick="closeSignUp()">Register</button>

                <button type="button" class="cancel" onclick="closeSignUp()">Cancel</button>

              </form>
            </div>

        </div>
       </div>
      </body>
         <div>
           <router-view/>
        </div>
          <!-- ************************* FOOTER *********************** -->
          <footer>
            <ul> 
              <li><a href=#>About</a></li>
              <li><a href=#>Contact</a></li>
              <li><a href=#>Affiliations</a></li>
              <li class="year">Copyright 2021</li>
            </ul>
          </footer>
        

      
    </div>      
  </div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&display=swap');
</style>

