<template>
  <div class="login-popup" id="loginForm" v-if="!Session.user">
        <form action="/action_page.php" class="login-container">
        <button type="button" class="close" @click='close'>
            X
        </button>

        <h1>Login</h1>
    
        <label for="email">
            <b>Email</b>
        </label>
        <input class="emailinput" type="text" placeholder="Enter Email" name="email" required>
        <br>
        <label class="pswlabel" for="psw">
            <b>Password</b>
        </label>
        <input class="pswinput" type="password" placeholder="Enter Password" name="psw" required>
        <br>
        <button type="submit" class="loginbtn" @click='login'>
            Login
        </button>
        <br> 
        </form>
    </div>
</template>

<script>
    import Session from "../models/Session"
export default {
    data(){
        return {
            Session
        }
    },
    methods: {
        login(){
            this.Session.user = { name: "Jasmine" }
        },
        close(){
            window.history.back()
        },
        toMyPage(){
            this.router.navigate(['/mywall'])
        }
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
  .pswlabel b{
    margin-right: 20px;
    margin-left: -15px;
  }
  .emailinput {
    margin-left: 28px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
  }
  .pswinput {
    margin-top: 10px;
    margin-left: -10px;
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
    color: black;
    padding: 6px;
    margin-left: 400px;
    margin-right: 10px;
    margin-top: 0;
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
  .login-container .btn {
    background-color: #ffba08;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0.8;
  }
  
  /* Add some hover effects to buttons */
  .login-container .btn:hover, .loginbtn:hover  {
    background-color: #474747;
    opacity: .5;
  }
  .close:hover {
    color: black;
    background-color: rgba(71, 71, 71, .3);
  }


</style>