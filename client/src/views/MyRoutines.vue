<template>
  <div class="myroutines">
      <div class="body">
          <div class="header">
            My Routines
          </div>  
          <div class="routine" v-for="(routine, id) in routines" :key="id" >
              <MyRoutinesBadge :routine="routine" /> 
          </div>
      </div>
  </div>
</template>

<script>
    import MyRoutinesBadge from "../components/MyRoutinesBadge"
    import { GetMyRoutines } from "../models/Routines"

export default {
    data: ()=> ({
        routines: [],
        routine: {},
    }),
    async mounted() {
        this.routines = await GetMyRoutines();
    },
    components: {
        MyRoutinesBadge,
    },
    props: {
        text: String,
    }
}
</script>

<style scoped>
.body {
    width: 85vw;
    margin: 20px auto;  
    padding: 20px 40px;
    border: solid;
    border-color: #c5c5c5;
    border-radius: 4px;
    padding: 20px;
}
.header {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 30px;
    text-align: center;
    color: black;
}
.routine {
    margin-top: 40px;
}
</style>