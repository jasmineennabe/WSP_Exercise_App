<template>
  <div class="settings">
      <div class="columns">
          <div class="column is-one-quarter">
              <div class="setting-header">
                  Settings
              </div>
              <div class="settings-list">
                  <div class="setting-item">
                      <button>My Account</button>
                  </div>
                  <div class="setting-item">
                      <button>Preferences</button>
                  </div>
                  <div class="setting-item">
                      <button>Support</button>
                  </div>
                  <div class="setting-item" v-if="Session.user='jasmineennabe'">
                      <button>Admin</button>
                  </div>
                  <div v-else></div>
              </div>
          </div>
          <div class="column settings-content">
              
          </div>
      </div>
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
}
</script>

<style>
.settings {
    margin: 40px;
}
.column.settings-content {
    margin: 0 20px;
    border: solid;
    border-color: #c7c7c7;
    border-radius: 4px;
    padding: 10px;
}
.is-one-quarter {
    background-color: #e4e4e4;
    border: solid;
    margin: 0 20px;
    border-color: #c7c7c7;
    border-radius: 4px;
    padding: 10px;
}
.setting-header {
    font-family: 'Bangers', cursive;
    font-size: 30px;
    color: black;
    margin-left: 10px;
}
.setting-item button {
    padding: 10px;
    margin: 20px 60px;
    font-family: 'Bebas Neue', sans-serif;
    border: none;
    font-size: 25px;
    color: black;
    background-color: #e4e4e4;
    cursor: pointer;
}
.setting-item button:hover {
    background-color: #a3a3a3;
    border-radius: 4px;
}
</style>