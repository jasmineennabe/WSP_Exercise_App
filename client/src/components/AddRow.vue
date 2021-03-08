<template>
    <div class="add-row">
        <!-- <div class="field5" v-for="(workout, w) in rows" :key='w'> -->
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
                  <button @click.prevent="$emit(delete-Row)" class="input"><i class="fas fa-trash-alt"></i></button>
            </div>
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    data: ()=> ({
        newId: 0,
        // row: [
        //     {
                id: '',
                name: '',
                weight: '',
                reps: '',
                sets: '',
                notes: '',
            // }
        // ],
        // rows: []
    }),
    // methods: {
    //     deleteRow(index) {
    //         this.rows.splice(index, 1)
    //     }    
    // }
}
</script>

<style>
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