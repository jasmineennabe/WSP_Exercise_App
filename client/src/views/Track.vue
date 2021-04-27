<template>
  <div class="track">
      <div class="columns">
          <div class="empty"></div>
          <div class="sized">
            <div class="workouts">
                <h2>My Workouts</h2>
                <router-link to="/createworkout" tag="a">+ Add Activity</router-link>
                <br><br>
                
                <div class="routine-buttons"> 
                    <div class="button-row">
                        <TrackRoutineBadge v-for="(routine, id) in routines" :key="id" :routine="routine" :text=routine.title />  
                    </div>
                </div>
            </div>

            <div class="track-fitness">
                <h2>Track</h2>
                    <p>Weekly Progress</p>
                    <progress class="progress is-warning" :value="progressBar" max="7"></progress>
                    <caption class="caption" v-if='progressBar === 0'>
                        <h3>Time to get to work!</h3>
                        <h4>You got this</h4>
                    </caption>
                    <caption class="caption" v-else-if='progressBar === 1'>
                        <h3>Nice start! {{ progressBar }} day under your belt this week!</h3>
                        <h4>Keep it up</h4>
                    </caption>
                    <caption class="caption" v-else-if='progressBar > 1 && progressBar < 4'>
                        <h3>Woohoo! You've worked out {{ progressBar }} days this week so far!</h3>
                        <h4>Look at you go</h4>
                    </caption>
                    <caption class="caption" v-else>
                        <h3>{{ progressBar }} days this week, you're a machine!</h3>
                        <h4>There's no stopping you</h4>
                    </caption>
            </div>
          </div>

            <div class="empty"></div>

        
        </div>
  </div>
</template>



<script>
    import TrackRoutineBadge from "../components/TrackRoutineBadge"
    import { GetMyRoutines } from "../models/Routines"


export default {
    data:()=> ({
        // routine: {},
        routines: [],
        progressBar: 4,
    }),
    methods: {
        addToProgress() {
            // if(this.routines.length){
            //     this.progressBar++
            // }
        },
    },
    async mounted() {
        this.routines = await GetMyRoutines();
        // console.log("routines: ", this.routines)
    },
    components: {
        TrackRoutineBadge,
    }

}
</script>



<style>
.track {
    margin: 30px;
}
.empty {
    width: 10vw;
}
.sized {
    width: 75vw;
    /* border: solid; */
    margin: 20px;
}
.track-fitness {
    margin: 10px 10px 30px 10px;
    text-align: center;
    border: solid;
    border-radius: 5px;
    border-color: #a3a3a3;
    height: 300px;
}
.workouts {
    margin: 10px 10px 30px 10px;
    text-align: center;
    border: solid;
    border-radius: 5px;
    border-color: #a3a3a3;
    height: 400px;
    padding: 20px;
}
.workouts h2 {
    font-family: 'Bebas Neue', sans-serif;
    color: black;
    text-align: center;
    font-size: 30px;
    clear: right;
}
.workouts a {
    padding: 0 5px;
    background-color: white;
    color: #710000;
    border: solid;
    border-radius: 4px;
    border-color: rgba(255, 185, 8, 0.815);
    cursor: pointer;
    float: right;
    margin-right: 60px;
    font-family: 'Bebas Neue', sans-serif;
    margin-top: -42px;
    font-size: 30px;
}
.track-fitness h2 {
    font-family: 'Bebas Neue', sans-serif;
    color: black;
    margin-top: 15px;
    font-size: 30px;
}
.track-fitness p {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    margin-top: 30px;
    color: #710000;
}
.track-fitness h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin-bottom: 10px;
}
.track-fitness h4 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
}
caption.caption {
    text-align: center;
    margin: 0 auto;
    display: inline;
}
progress.progress {
    margin: 20px 40px;
    width: 900px;
}
.column.is-one-fifth {
    margin: 20px auto;
    padding: 0 20px;
    border: solid;
    border-radius: 4px;
    border-color: #710000;
    height: 200px;
}
.column.is-one-fifth h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    margin-top: 20px;
    color: black;
}
.column.is-one-fifth h4 {
    font-family: 'Bangers', cursive;
}
.column.is-one-fifth button {
    font-size: 65px;
    border: none;
    border-radius: 7px;
    background-color: #a3a3a3;
    color: white;
    cursor: pointer;
}
.button-row {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 200px;
    width: 1015px;
    text-align: left;
    overflow: hidden;
}
</style>