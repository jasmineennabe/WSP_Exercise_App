<template>
  <div class="settings">
      <div class="columns">
          <div class="column is-one-quarter">
              <div class="setting-header">
                  Settings
              </div>
              <div class="settings-list">
                  <div class="setting-item">
                      <button @click.prevent="toggleMyAccount">My Account</button>
                  </div>
                  <div class="setting-item">
                      <button @click.prevent="togglePreferences">Preferences</button>
                  </div>
                  <div class="setting-item">
                      <button @click.prevent="toggleSupport">Support</button>
                  </div>
                  <div class="setting-item" v-if="Session.user.isAdmin==true">
                      <button @click.prevent="toggleAdmin">Admin</button>
                  </div>
              </div>
          </div>
          <div class="column settings-content">
              <div v-show="showMyAccount">
                  my account
                  <!-- import component -->
              </div>
              <div v-show="showPreferences">
                  preferences
                   <!-- import component -->
              </div>
              <div v-show="showSupport">
                  support
                   <!-- import component -->
              </div>
              <div v-show="showAdmin">
                  <Users />
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import Users from '../components/Users.vue'
    import Session from "../models/Session"

export default {
    data(){
        return {
            Session,
            showMyAccount: true,
            showPreferences: false,
            showSupport: false,
            showAdmin: false,
        }
    },
    methods: {
        toggleMyAccount() {
            this.showMyAccount = true,
            this.showPreferences = false,
            this.showSupport = false,
            this.showAdmin = false
        },
        togglePreferences() {
            this.showMyAccount = false,
            this.showPreferences = true,
            this.showSupport = false,
            this.showAdmin = false
        },
        toggleSupport() {
            this.showMyAccount = false,
            this.showPreferences = false,
            this.showSupport = true,
            this.showAdmin = false
        },
        toggleAdmin() {
            this.showMyAccount = false,
            this.showPreferences = false,
            this.showSupport = false,
            this.showAdmin = true
        },
    },
    components: {
        Users,
    }
}
</script>

<style scoped>
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