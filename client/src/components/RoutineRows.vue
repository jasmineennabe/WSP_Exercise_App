<template>
    <div class="routines-row">
        <div class="field5" v-for="(row, id) in routines" :key="id">
            <div class="ex">
                <input type="text" class="input" placeholder="name" :value="row.workouts">
            </div>
            <div class="wg">
                <input type="text" class="input" placeholder="weight"> <!-- :value="routines.workouts.weight"> -->
            </div>
            <div class="rp">
                <input type="text" class="input" placeholder="reps"> <!-- :value="routines.workouts.reps"> -->
            </div>
            <div class="st">
                <input type="text" class="input" placeholder="sets"> <!-- :value="routines.workouts.sets"> -->
            </div>
            <div class="nt">
                  <input type="text" class="input" placeholder="notes"> <!-- :value="routines.workouts.notes"> -->
            </div>
            <div class="dl">
                  <button @click.prevent="$emit('delete-row')" class="input"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
  import { GetRoutines } from '../models/Routines'

export default {
    data: ()=> ({
      routines: []
    }),
    mounted() {
      this.routines = GetRoutines();
    },
    // props: {
    //   workout: Object
    // }
    props: {
        // routines: Array,
    //     workout: Array,
    }
}
</script>

<style scoped>
.field5 {
  margin: 5px 15px 15px 15px;
  display: block;
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