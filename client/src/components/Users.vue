

<template>
     <div id="users" class="columns">
        <div class="column is-one-fifth">
            <button class="heading" @click.prevent="toggleTable">Users</button>
            
        </div>
        <div class="column">
            <div v-show="showTable">
                <table class="users-tbl">
                    <tr>
                        <th class="tbl-heading">First Name</th>
                        <th class="tbl-heading">Last Name</th>
                        <th class="tbl-heading">Handle</th>
                        <th class="tbl-heading">Email</th>
                        <th class="tbl-heading">DOB</th>
                        <th class="tbl-heading">Admin</th>
                    </tr>

                    <tr v-for="user in users" :key="user.handle">
                        <td>{{user.firstName}}</td>
                        <td>{{user.lastName}}</td>
                        <td><router-link :to="`user/${user.handle}`">{{user.handle}}</router-link></td>
                        <td>{{user.email}}</td>
                        <td>{{user.dob}}</td>
                        <td>{{user.isAdmin}}</td>
                    </tr>
                </table>  
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import { GetAllUsers } from "../models/Users";

export default Vue.extend({
    data: ()=> ({
        users: [],
        showTable: true,
    }),
    async mounted() {
        this.users = await GetAllUsers();
    },
    methods: {
        toggleTable() {
            this.showTable = !this.showTable
        }
    }
})
</script>

<style scoped>
    .content-item {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    button.heading {
        font-size: 30px;
        font-family: 'Bebas Neue', sans-serif;
        width: 100px;
        border: none;
        border-radius: 4px;
        color: white;
        background-color: #710000;
        cursor: pointer;
        margin-left: 20px;
    }
    table.users-tbl {
        max-width: 700px;
        font-family: 'Montserrat', sans-serif;
        color: black;
    }
    table, th, td {
        border: 1px solid black;
        padding: 1px 5px;
    }
    td {
        font-size: 14px;
        
    }
    .column {
        padding-top: 20px;
        padding-right: 20px;
    }
    th.tbl-heading {
        margin: 5px;
        color: black;
        font-size: 18px;
        font-weight: lighter;
        text-align: center;
        font-family: 'Bebas Neue', sans-serif;
    }
    a {
        color:black;
        cursor: pointer;
    }
    a:hover {
        color:#710000;
        font-weight: bolder;
    }
</style> 