<template>
  <div class="signup">
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

    <router-link tag="button" class="cancel" to="/">Cancel</router-link>
  </div> 
</template>

<script>
export default {

}
</script>

<style>
.signup {
    text-align: center;
    margin: 30px auto;
    font-family: 'Montserrat', sans-serif;
    border: solid;
    border-color: rgba(71, 71, 71, .3);
    border-radius: 4px;
    width: 70%;
}
.signup h1 {
    font-size: 35px;
}
.terms-container {
    width: 20%;    
}

.registerbtn {
    background-color: #d90429ff;
    border: none;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 25px;
    margin: 10px 5px;
    cursor: pointer;
}
.cancel {
    border: none;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 25px;
    margin: 10px 5px;
    cursor: pointer;
}


</style>