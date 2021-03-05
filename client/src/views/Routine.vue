<template>
  <div class="routine">
    <div class="field">
        <label class="label">Title</label>
        <div class="control">
            <input class="input" type="text" placeholder="Give Your Workout a Name">
        </div>
    </div>

    <div class="field smaller">
        <label class="label">Date</label>
        <div class="control">
            <input class="input smaller" type="date">
        </div>
    </div>

    <div class="field">
        <label class="label">Exercises</label>
        <div class="control">
            <table class="table is-bordered" >
                <thead>
                    <tr>
                        <th class="th-e">Exercise</th>
                        <th>Reps</th>
                        <th>Sets</th>
                        <th>Weight</th>
                        <th>Notes</th>
                        <th><button @click="newRow">+</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, i) in rowData" :key='i'>
                        <th scope="row">{{ item.exercise }}</th>
                        <td>{{ item.reps }}</td>
                        <td>{{ item.sets }}</td>
                        <td>{{ item.weight }}</td>
                        <td>{{ item.notes }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="toAdd">Add new row</div>

    <div class="field is-grouped">
        <div class="control">
            <button type="submit" class="button">Finish</button>
        </div>
        <div class="control">
            <!-- <button @click="">Cancel</button> -->
            <router-link to="/track" tag="a">Cancel</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data: ()=> ({
        exercise: '',
        reps: '',
        sets: '',
        weight: '',
        notes: '',
        rowData: []
    }),
    methods: {
        newRow() {
            var myTable = {
                exercise:this.exercise,
                reps:this.reps,
                sets:this.sets,
                weight:this.weight,
                notes:this.notes
            };
            this.rowData.push(myTable) 
            this.exercise = '';
            this.reps = '';
            this.sets = '';
            this.weight = '';
            this.notes = '';
        },

    }  
}
</script>

<style>
.routine {
    width: 50vw;
    margin: 20px auto;
    border: solid;
    border-color: #c5c5c5;
    border-radius: 4px;
    padding: 20px;
    font-family: 'Montserrat', sans-serif;
}
.field label.label {
    font-size: 25px;
    font-family: 'Bebas Neue', sans-serif;
    margin-bottom: 0;
}
.field {
    display: inline-block;
    margin: 0 20px;
    width: 350px;
    height: 95px;
}
.input {
    width: 400px;
}
.smaller {
    width: 200px;
}
button.button {
    background-color: #ffba08;
    color: white;
    border-radius: 4px;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
}

.is-grouped a {
    color: black;
    text-decoration: underline;
    font-family: 'Bebas Neue', sans-serif;
    padding: 10px 22px 10px 22px;
    font-size: 22px;
} 
.table button {
    background-color: white;
    border: none;
    color: #710000;
    font-size: 20px;
    padding: 0;
    font-weight: bolder;
    cursor: pointer;
}
th.th-3 {
    padding: 8px 50px;
}
div.toAdd {
    visibility: hidden;
    font-family: 'Montserrat', sans-serif;
    background-color: rgba(113, 0, 0, .8);
    color: white;
    width: 60px;
    font-size: 16px;
    font-weight: bolder;
    margin: 0;
    padding: 0 3px;
}
button:hover div.toAdd {
    display: inline;
    visibility: visible;
}

</style>