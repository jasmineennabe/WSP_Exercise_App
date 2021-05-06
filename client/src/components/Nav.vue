<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': isActive }" @click.prevent="isActive = !isActive">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    <div class="navbar-menu" :class="{ 'is-active': isActive }" @click.prevent="isActive = !isActive">
      <div class="navbar-start">
        <i class="fas fa-fire-alt navbar-item"></i>
        <router-link class="appTitle" tag="a" to="/">Runtime Fitness</router-link>

        <router-link class="navbar-item" tag="a" to="/feed">
            Feed    
        </router-link> 

        <router-link class="navbar-item" tag="a" to="/mywall">
            My Wall    
        </router-link>

        <router-link class="navbar-item" tag="a" to="/track">
            Track    
        </router-link> 
        
        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-item">
                Discover    
            </a> 

            <div class="navbar-dropdown">
                <ul>
                    <li>
                      <router-link class="navbar-item" tag="a" to="/workouts">
                        Runtime Workouts    
                      </router-link> 
                    </li>
                    <li>
                      <router-link class="navbar-item" tag="a" to="/about">
                        About    
                      </router-link> 
                    </li>
                    <li>
                      <router-link class="navbar-item last" tag="a" to="/contact">
                        Contact    
                      </router-link> 
                    </li>
                </ul>
            </div>
        </div>                   
      </div>


      <!-- <div class="autocomplete">
        Search for Users
        <input v-model="name" @input="onChange" type="text"/>
        <ul v-show="isOpen" class="autocomplete-results">
          <li v-for="(user, firstName) in users" :key="firstName" class="autocomplete-result">
            {{ user.firstName }} {{ user.lastName }}
          </li>
        </ul>
      </div> -->

      <section>
        <p class="content"></p>
        <b-field label="Search for users">
           <b-autocomplete
                rounded
                v-model="name"
                :data="users"
                placeholder="e.g. John Doe"
                icon="magnify"
                clearable
                @typing ="option => selected = option">
                <template #empty>No user found</template> 
            </b-autocomplete>
        </b-field>
    </section>

    

      <!-- <div class="search-bar" >   :class="{'open':openSuggestion}" -->
          <!-- <p class="search-title">Find a Member</p> -->
          
          <!-- <input class="search" type="text" placeholder="Search for users" v-model="selection"> -->
          <!-- <i type="submit" class="fas fa-search" aria-hidden="true"></i> -->
            <!-- <li :v-for="(suggestion, i) in users" :key="i"> -->
                <!-- <a :href="`/user/${suggestion.handle}`">{{ suggestion }}</a> -->
            <!-- </li>          -->
        <!-- </div>   -->


      <div class="navbar-end">
        <LoginBadge />
      </div>
  </div>
</nav>
</template>

<script>
  import LoginBadge from "./LoginBadge";
  import { GetAllUsers } from "../models/Users"

export default {
    data: ()=> ({
      users: [],
      results: [],
      name: '',
      isOpen: false,
    }),
    async mounted() {
      this.users = await GetAllUsers();
    },
    methods: {
      filterResults() {
        this.results = this.users.filter(user => user.toLowerCase().indexOf(this.name.toLowerCase()) > -1);
      },
      onChange() {
        this.filterResults();
        this.isOpen = true;
      }
  },
    computed: {
      // filteredDataArray() {
      //     return this.users.filter((option) => {
      //         return option
      //             .toString()
      //             .toLowerCase()
      //             .indexOf(this.name.toLowerCase()) >= 0
      //     })
      //   }
    },
    components: {
        LoginBadge,
    }
}
</script>

<style>
.navbar-menu {
    background-color: #d90429ff;
    padding: 0 20px;
    height: 65px;
}
.navbar i.fas {
    font-size: 40px;
    color: black;
    padding-right: 0;
}
.appTitle {
    font-size: 35px;
    padding-top: 5px;
    padding-left: 5px;
    margin-right: 10px;
    color: black;
    font-family: 'Bangers', cursive;
}
a.navbar-item {
    color: black;
    font-family: 'Bebas Neue', sans-serif;
    padding: 0 40px;
    font-size: 23px;
}
div.navbar-dropdown {
    background-color: #d90429ff;
    padding: 0;
}
.navbar-dropdown a.navbar-item {
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
  color: white;
  border-bottom: solid;
  border-color: white;
  border-width: 1px;
}
.navbar-dropdown a.last {
  border: none;
}
a.navbar-item.button.is-light {
    padding-left: 10px;
    padding-right: 10px;
    height: 40px;
    font-size: 22px;
    margin-left: 10px;
    margin-right: 5px;
    color: black;
}
.autocomplete {
    position: relative;
  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

/* HOVER STYLES */
a.navbar-item:hover {
    background-color: rgba(255, 186, 8, .7);
}
a.navbar-item.button.is-light:hover {
    background-color: rgba(255, 185, 8, 0.815);
}

</style>