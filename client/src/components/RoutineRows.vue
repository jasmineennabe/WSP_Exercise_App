<template>
    <div class="routines-row">
        <div class="field5"> 
            <div class="ex">
                <input type="text" class="input" placeholder="name" :value="row.name"> 
            </div>
            <div class="wg">
                <input type="text" class="input" placeholder="weight" :value="row.weight"> 
            </div>
            <div class="rp">
                <input type="text" class="input" placeholder="reps" :value="row.reps"> 
            </div>
            <div class="st">
                <input type="text" class="input" placeholder="sets" :value="row.sets"> 
            </div>
            <div class="nt">
                  <input type="text" class="input" placeholder="notes" :value="row.notes"> 
            </div>
            <div class="dl">
                  <button @click.prevent="$emit('delete-row')" class="input"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
      routine: Object,
      row: Object,
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