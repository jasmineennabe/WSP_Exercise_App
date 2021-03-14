<template>
  <div class="adminbadge">
    <div class="if-admin" v-if="Session.user.handle='@jasmineennabe'">
        <router-link to="/settings"><i class="fas fa-user-lock"></i></router-link>
    </div>
    <div class="if-not" v-else>
        <router-link to="/settings"><i class="fas fa-user-cog"></i></router-link>
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

<style scoped>
div.adminbadge {
    width: 28px;
    margin-right: 1px;
    display: inline-block;
}
i.fas.fa-user-cog, i.fas.fa-user-lock {
    font-size: 22px;
}
</style>