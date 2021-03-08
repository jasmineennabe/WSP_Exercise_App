<template>
  <div class="create-workout">
      <form action="">
          <div class="field">
            <label class="label">Title</label>
                <input class="input box" type="text" placeholder="Give Your Workout a Name" v-model="title">
        </div>

        <div class="field2">
            <label class="label">Date</label>
                <input class="input smaller" type="date" v-model="date">
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
        <div class="field4">
            <button type="button" @click="addRow">Add Exercise</button>
        </div>

        <div class="field5">
            <AddRow :delete-Row="deleteRow" v-for="(row, i) in rows" :key="i" :is="row"/>
        </div>

        <!-- <div class="field5" v-for="(workout, w) in rows" :key='w'>
            <div class="ex">
                <input type="text" class="input" v-model="name">
            </div>
            <div class="wg">
                <input type="text" class="input" v-model="weight">
            </div>
            <div class="rp">
                <input type="text" class="input" v-model="reps">
            </div>
            <div class="st">
                <input type="text" class="input" v-model="sets">
            </div>
            <div class="nt">
                  <input type="text" class="input" v-model="notes">
            </div>
            <div class="dl">
                  <button @click.prevent="deleteRow" class="input"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div> -->
        

        <div class="field6">
            <div class="complete">
              <button @click.prevent="createWorkout">Complete Workout</button>
            </div>
            <div class="cancel">
             <button type="button" class="cancelWorkout">Cancel Workout</button>
            </div>
        </div>
      </form>
  </div>
</template>

<script>
  import AddRow from '../components/AddRow'

export default {
  data: ()=> ({
    title: '',
    date: '',
    workout: {
      name: '',
      weight: '',
      reps: '',
      sets: '',
      notes: ''
    },
    rows: [],
    workouts: [],
  }),
  methods: {
    // IT WORKS!!!!
    addRow() {
      this.rows.push(AddRow)
    },
    deleteRow(i) {
      this.rows.splice(AddRow, i)
    }
  },
  //   createWorkout() {
  //     if(!this.title) {
  //       this.title = this.date
  //       return
  //     }      

  //     const newWorkout = {
  //       title: this.title,
  //       date: this.date,
  //       workout: {
  //         name: this.name,
  //         weight: this.weight,
  //         reps: this.reps,
  //         sets: this.sets,
  //         notes: this.notes
  //       }
  //     }
  //     this.workouts.push(newWorkout)
  //     console.log(this.workouts)
  //   }
  // },
  components: {
    AddRow
  }
}
</script>

<style scoped>
.create-workout {
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
    display: inline-block;
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
/* .field5 {
  margin: 5px 15px 15px 15px;
  display: block;
} */
.field6 {
  margin: 80px 200px 0 200px;
}
.complete, .cancel {
  margin: 0 20px;
  display: inline-block;
}
.complete button, .cancel button{
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-weight: bolder;
  cursor: pointer;
}
.complete button {
  background-color: #d90429;
  color: white;
}
.cancel button {
  color: #474747;
  text-decoration: underline;
  background-color: white;
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