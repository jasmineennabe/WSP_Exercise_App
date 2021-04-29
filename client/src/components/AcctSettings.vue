<template>
  <div class="acct-settings">
      <div class="acct-heading">
          Account Information 
      </div>
      <div class="user-info">
          <div class="user-pair">
            <p>User First and Last Name:</p> <p class="info">{{ user.firstName }} {{ user.lastName }}</p>
          </div>
          <div class="user-pair">
            <p>User Handle:</p> <p class="info">{{ user.handle }}</p>
          </div>
          <div class="user-pair">
            <p>User email:</p> <p class="info">{{ user.email }}</p>
          </div>
          <div class="user-pair">
            <p>User Birthday:</p> <p class="info">{{ user.dob }}</p>
          </div>
      </div>
  </div>
</template>

<script>
    import { GetUserInfo } from "../models/Users"
    import Session from "../models/Session"

export default {
    data: ()=> ({
      user: {}
    }),
    async mounted() {
      this.user = await GetUserInfo(Session.user.handle)
    }
}
</script>

<style scoped>
  .acct-heading {
    font-family: 'Bangers', cursive;
    font-size: 30px;
    color: black;
    margin: 0 10px;
  }
  div.user-info {
    display: inline-block;
    margin: 10px 80px;
    font-family: 'Bebas Neue', sans-serif;
    color: black;
    font-size: 25px;

  }
  div.user-pair {
    display: block;
    margin-bottom: 10px;
    padding: 10px;
  }
  p {
    display: inline;
  }
  p.info {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: black;
    font-weight: bolder;
    margin-left: 10px;
    border: solid;
    border-width: 1px;
    padding: 10px;
  }
</style>