<template>
  <div class="signup">
    <div class="welcome">
        <h1>First time here? Welcome!</h1>
    </div>
    <div class="back-info">
        <h1>Background Information</h1>
    </div>

        <div class="reg-entry">
            <label for="firstName">
                <b>First Name</b>
            </label>
            <input type="text" placeholder="John" name="firstName" required>
        </div>
        
        <div class="reg-entry">
            <label for="lastName">
                <b>Last Name</b>
            </label>
            <input type="text" placeholder="Doe" name="lastName" required>
        </div>
        
        <div class="reg-entry">
            <label for="birthday">
                <b>Date of Birth</b>
            </label>
            <input type="date" placeholder="01/02/1993" name="birthday" required>
        </div>

    <div class="register">
        <h1>Account Registration</h1>
    </div>

        <div class="reg-entry">
            <label for="username">
                <b>Username</b>
            </label>
            <input type="text" placeholder="Create a Username" name="username" required>
        </div>

        <div class="reg-entry"> 
            <label for="email">
                <b>Email</b>
            </label>
            <input type="text" placeholder="Enter Email" name="email" required>
        </div>

        <div class="reg-entry">
            <label for="psw">
                <b>Password</b>
            </label>
            <input type="password" placeholder="Enter Password" name="psw" required>
        </div>

        <div class="reg-entry">
            <label for="phone">
                <b>Mobile #</b>
            </label>
            <input type="tel" placeholder="(888)888-8888" name="phone">
        </div>
    
    
    <div class="cq1">
        <input type="checkbox" name="question1">
            <label for="question1">
                Would you like to receive text notifications?
            </label>
    </div>

    <div class="cq2">
        <input type="checkbox" name="question2">
            <label for="question2">
                Would you like to receive email notifications?  
            </label>
    </div>

    <div class="terms-heading">
        <h4>Terms & Conditions</h4>
    </div>

    <div class="terms-container">
        <h5>A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. A bunch of terms. </h5>
    </div>
    
    <div class="agree">
        <input type="checkbox" name="terms" required>
        <label for="terms">
            I agree to the Terms & Conditions
        </label>
    </div>

    <button type="submit" class="registerbtn" onclick="closeSignUp()">
        Register
    </button>

    <router-link tag="button" class="cancel" to="/">
        Cancel
    </router-link>
  </div> 
</template>

<script>
export default {

}
</script>

<style scoped> 
.signup {
    text-align: center;
    color: black;
    margin: 40px 200px;
    border: solid;
    border-radius: 7px;
    border-color: #b6b6b6;
}
.welcome h1 {
    font-family: 'Bangers', cursive;
    font-size: 40px;
    text-align: left;
    margin: 20px 0 0 80px;
}
.back-info h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 25px;
    margin: 10px 0 0 0;
}
.register h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 30px;
    margin: 40px 0 0 0;
}
.reg-entry {
    font-family: 'Montserrat', sans-serif;
    margin: 5px 0 15px 0;
}
.reg-entry label {
    margin-right: 15px;
}
.cq1 {
    margin-top: 30px;
}
.cq2 {
    margin-bottom: 30px;
}
.cq1 b, .cq2 b {
    padding-left: 10px;
    font-family: 'Montserrat', sans-serif;
}
.terms-heading {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 25px;
}
.terms-container {
    margin: 0 auto;
    width: 20vw;
    border: solid;
    overflow: scroll;
    height: 200px;
}
.agree {
    margin: 10px 0;
    font-family: 'Montserrat', sans-serif;
}
.agree b {
    padding-left: 10px;
}
.registerbtn {
    color: white;
    background-color: #d90429ff;
    border: none;
    border-radius: 4px;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 25px;
    padding: 5px;
    cursor: pointer;
    margin-right: 10px 5px;
}
.cancel {
    border: none;
    border-radius: 4px;
    padding: 5px;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 25px;
    background-color: white;
    color: #6d6d6d;
    text-decoration: underline;
    cursor: pointer;
    margin: 10px 5px;
}
.registerbtn:hover {
    background-color: #a3a3a3;
}
.cancel:hover {
    color: #710000;
}
input {
    font-family: 'Montserrat', sans-serif;
}
</style>