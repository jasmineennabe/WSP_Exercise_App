<template>
  <div class="track">
      <div class="columns">
          <div class="empty"></div>
          <div class="sized">
            <div class="workouts">
                <h2>My Workouts</h2>
                <router-link to="/createworkout" tag="a">+ Add Activity</router-link>
                <br><br>
                <div class="columns routine-buttons">
                    <div class="column is-one-fifth routine1">
                        <h3>View Workout</h3>
                        <h4>Assoc. Title</h4>
                        <button><i class="fas fa-dumbbell"></i></button>
                    </div>
                    <div class="column is-one-fifth routine2">
                        <h3>View Workout</h3>
                        <h4>Assoc. Title</h4>
                        <button><i class="fas fa-dumbbell"></i></button>
                    </div>
                    <div class="column is-one-fifth routine3">
                        <h3>View Workout</h3>
                        <h4>Assoc. Title</h4>
                        <button><i class="fas fa-dumbbell"></i></button>
                    </div>
                    <div class="column is-one-fifth routine4">
                        <h3>View Workout</h3>
                        <h4>Assoc. Title</h4>
                        <button><i class="fas fa-dumbbell"></i></button>
                    </div>
                </div>
            </div>

            <div class="track-fitness">
                <h2>Track</h2>
                    <p>Weekly Progress</p>
                    <progress class="progress is-warning" value="1" max="7"></progress>
                    <caption>Woohoo! You've worked out _ days this week so far!
                        <br>Keep it up!
                    </caption>
            </div>
          </div>

            <div class="empty"></div>

        
        </div>
  </div>
</template>



<script>
export default {
    data:()=> ({
    //    progressBar = [1, 2, 3, 4, 5, 6, 7] 
    }),
    methods: {
       progressCap() {
           

           
       }
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
}
.workouts h2 {
    font-family: 'Bebas Neue', sans-serif;
    color: black;
    margin-top: 15px;
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
.track-fitness caption {
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
.columns.routine-buttons {
    /* display: none; */
}
</style>