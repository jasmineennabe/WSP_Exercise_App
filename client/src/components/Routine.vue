<template>
    <div class="routine">
        <div class="field">
            <label class="label">Title</label>
                <input class="input box" type="text" placeholder="Give Your Workout a Name" :value="routine.title">
        </div>

        <div class="field2">
            <label class="label">Date</label>
                <input class="input smaller" type="date" :value="routine.date"> 
        </div>

        <div class="field3">
            <label class="label">Workout</label> 
            <div class="labels">
                <label class="input-label ex">Exercise</label>          
                <label class="input-label wg">Weight</label>          
                <label class="input-label rp">Reps</label>          
                <label class="input-label st">Sets</label>          
                <label class="input-label nt">Notes</label>          
            </div>
        </div>

        <div class="field5"  >  
            <RoutineRows v-for="(row, id) in routine.workouts" :key="id" :row="row" @delete-row="deleteRow(id)" />
        </div>
    </div>
</template>

<script>
    import RoutineRows from '../components/RoutineRows'

export default {
    methods: {
      deleteRow(id) {
            this.routine.workouts.splice(id, 1)
        }  
    },
    components: {
        RoutineRows,
    },
    props: {
        routine: Object,
        row: Object,
    }
}
</script>

<style scoped>
.routine {
    width: 60vw;
    margin: 20px auto;
    border: solid;
    border-color: #c5c5c5;
    border-radius: 4px;
    padding: 20px;
    font-family: 'Montserrat', sans-serif;
}
label {
    font-size: 25px;
    font-family: 'Bebas Neue', sans-serif;
    margin-bottom: 0;
}
.field {
    display: inline-block;
    padding-top: 10px;
    width: 350px;
    height: 95px;
    margin: 0 20px;
}
.field2 {
    float: right;
    /* display: inline-block; */
    margin-top: 12px;
    margin-right: 47px;
    margin-bottom: 12px;
    width: 250px;
    height: 95px;
}
.field3 {
    clear: right;
    display: inline-block;
    width: 100px;
    margin: 0 20px;
    margin-top: 40px;
}
.field4 {
    margin-top: 40px;
    float: right;
    margin-right: -250px;
}
.field4 button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    background-color: #ffba08;
    color: white;
    font-weight: bolder;
}
.input.box {
    width: 400px;
    font-family: 'Montserrat', sans-serif;
    padding: 1px 10px;
}
.input.smaller {
    width: 250px;
    font-family: 'Montserrat', sans-serif;
}
.labels {
    display: inline-block;
    width: 760px;
}
.input-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
}
.field5 input {
  padding: 1px 10px;
  font-family: 'Montserrat', sans-serif;
}
.ex {
  width: 200px;
  margin-right: 0;
  display: inline-block;
}
.ex input {
  width: 200px;
}
.wg {
  width: 100px;
  margin-right: 0;
  display: inline-block;
}
.wg input {
  width: 100px;
}
.rp {
  width: 80px;
  margin-right: 0;
  display: inline-block;
}
.rp input {
  width: 80px;
}
.st {
  width: 80px;
  margin-right: 0;
  display: inline-block;
}
.st input {
  width: 80px;
}
.nt {
  width: 255px;
  margin-right: 0;
  display: inline-block;
}
.nt input {
  width: 255px;
}
.dl {
  width: 40px;
  margin-right: 0;
  display: inline-block;
}
.dl i {
    color: #707070;   
    cursor: pointer;
}
</style>