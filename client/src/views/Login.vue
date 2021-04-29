<template>
    <div class="login-popup" id="loginForm">
      <form @submit.prevent="login" class="login-container">
            <button type="button" class="close" @click.prevent='close'>
                <i class="fas fa-times"></i>
            </button>

            <h1>Login</h1>
        
            <label for="handle">
                <b>Username</b>
            </label>
            <input class="handleinput" type="text" placeholder="Enter Username" name="handle" required v-model="handle">
            
            <br>
            
            <label class="pswlabel" for="psw">
                <b>Password</b>
            </label>
            <input class="pswinput" type="password" placeholder="Enter Password" name="psw" required v-model="password">
            
            <br>   
            
            <button type="submit" class="loginbtn">
              Login
            </button>

            <button class="fblogin" @click.prevent="loginFB">
              <i class="fab fa-facebook-square"></i>
              Login with Facebook
            </button>
      </form>
    </div>
</template>

<script>
    import { Login, LoginFB } from "../models/Session"

export default {
    data: ()=>({
        handle: null, 
        password: null
    }),
    methods: {
        login(){
            Login(this.handle, this.password);
        },
        loginFB(){
            /*global FB */
            FB.login(function(response) {
                console.log({response})
                    if (response.status === 'connected') {
                        LoginFB(response.authResponse.accessToken)
                    } else {
                        // The person is not logged into your webpage or we are unable to tell. 
                    }
            }, {scope: 'public_profile,email'});
        },
        close(){
            window.history.back();
        },
    }
}
</script>

<style>
  .login-popup {
    background-color: white;
    margin: 100px auto;
    border: 3px solid #f1f1f1;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    width: 50vw;
    color: black;
  } 
  .handleinput {
    margin-left: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
  }
  .pswinput {
    margin-top: 10px;
    margin-left: 7px;
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;
  }
  
  /* Add styles to the form container */
  .login-container {
    margin: 10px 0 20px 0;
    background-color: white;
  }
  .login-popup h1 {
    margin-top: 0;
    clear: right;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 35px;
  }
  
  /* Full-width input fields */
  .login-container input[type=text], .login-container input[type=password] {
    width: 50%;
    padding: 15px;
    border-radius: 5px;
    border: none;
    background: #f1f1f1;
  }
  
  /* When the inputs get focus, do something */
  .login-container input[type=text]:focus, .login-container input[type=password]:focus {
    background-color: #ddd;
    outline: none;
  }
  button.close {
    float: right;
    text-align: right;
    background-color: white;
    color: #707070;
    padding: 6px;
    margin-left: 400px;
    margin-right: 30px;
    margin-top: 0;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  .loginbtn {
    background-color: #d90429;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    padding: 10px 30px;
    margin-bottom: 20px;
    font-family: 'Bebas Neue', sans-serif;
  }
  
  /* Set a style for the submit/login button */
  /* .login-container .btn {
    background-color: #ffba08;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0.8;
  } */
  
  /* Add some hover effects to buttons */
  .login-container .btn:hover, .loginbtn:hover  {
    background-color: #474747;
    opacity: .5;
  }
  .close:hover {
    color: black;
    background-color: rgba(57, 74, 175, 0.3);
  }
  .fblogin {
    background-color: #4267B2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    font-family: 'Bebas Neue', sans-serif;
  } 

</style>