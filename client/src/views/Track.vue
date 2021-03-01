<template>
  <div class="track">
      <div class="nav-container first">
            <button>+ Add Activity</button>
        <div class="nav-element">
            
        </div>
      </div>

      <div class="nav-container second">
            <h2>My Workouts</h2>
        <div class="nav-element">
            
        </div>
      </div>

      <div class="nav-container third">
            <h2>Track</h2>
        <div class="graphs">
            <figure class="daily-graph">
                <h3 class="daily-title">Daily Fitness</h3>
                <div class="chart">
                    <div class="xaxis">
                        <h6>Su M T W Th F Sa</h6>
                    </div>
            

                </div>
            </figure>

            <figure class="weekly-graph">
                <h3 class="weekly-title">Weekly Fitness</h3>
                <div class="chart">
                    <div class="yaxis">
                        <h6>Su M T W Th F Sa</h6>
                    </div>

                </div>
            </figure>
        </div>
      </div>

  </div>
</template>



<script>
export default {

}
</script>



<style>
.track {
    height: 100vh;
}
.nav-container {
    background-color: white;
    padding: 10px 0;
    border: solid;
    border-color: #a3a3a3;
    border-radius: 5px;
    margin-top: 40px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
.nav-container.first {
    margin-top: 30px;
    height: 80px;
    width: 15%;
}
.nav-container.second, .nav-container.third {
    height: 250px;
}

button, h2 {
    border: none;
    background-color: white;
    font-size: 25px;
    font-family: 'Bebas Neue', sans-serif;
    padding: 5px 10px;  
    color: #710000;
    font-weight: 500;
    margin-bottom: 30px;
}
button {
    cursor: pointer;
    padding-top: 15px;
}

.graphs {
    display: inline;
}
h3.daily-title {
    font-size: 20px;
    margin-top: -40px;
    padding: 20px 0 20px 20px;
    float: left;
    width: 140px;
    color: black;

}
h3.weekly-title {
    font-size: 20px;
    margin-top: -40px;
    padding: 20px 20px 20px 0;
    float: right;
    width: 140px;
    color: black;
}

figure.daily-graph, figure.weekly-graph {
    margin: 0;
    border-left: solid;
    border-bottom: solid;
    border-width: 1px;
    border-color: black;
    width: 180px;
    height: 100px;
    display: inline-block;
}
figure.daily-graph {
    margin-left: -80px;
}
figure.weekly-graph {
    margin-left: 100px;
    margin-right: -70px;
}
.xaxis, .yaxis {
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
    width: 180px;
}
h6 {
    display: inline;
    width: 180px;
}
</style>