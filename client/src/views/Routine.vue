<template>
  <div class="routine">
        <div class="field">
            <label class="label">Title</label>
                <input class="input box" type="text" placeholder="Give Your Workout a Name">
        </div>

        <div class="field2">
            <label class="label">Date</label>
                <input class="input smaller" type="date">
        </div>

        <div class="field3 tb">
            <label class="label">Exercises</label>
                <table class="table is-bordered">
                    <thead>
                        <tr>
                            <th class="ex">
                                Exercise
                            </th>
                            <th class="wg">
                                Weight
                            </th>
                            <th class="rp">
                                Reps
                            </th>
                            <th class="st">
                                Sets
                            </th>
                            <th class="nt">
                                Notes
                            </th>
                            <th class="ar">
                                <button @click="addRow">
                                    +
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr class="tdi">
                                <td scope="row"><input type="text" class="ex"></td>
                                <td><input type="text" class="wg"></td>
                                <td><input type="text" class="rp"></td>
                                <td><input type="text" class="st"></td>
                                <td><input type="text" class="nt"></td>
                                <td class="ar"><i class="fas fa-running"></i></td>
                            </tr>

                            <!-- ADDING V-MODEL TO SAVE DATA & DISPLAY IT UNDER MY WORKOUTS -->
                            
                                    <!-- <tr class="tdi" v-for="(item, i) in routineData" :key='i'>
                                        <td scope="row"><input type="text" class="ex" v-model="myRoutine.rows.exercise"></td>
                                        <td><input type="text" class="wg" v-model="myRoutine.rows.weight"></td>
                                        <td><input type="text" class="rp" v-model="myRoutine.rows.reps"></td>
                                        <td><input type="text" class="st" v-model="myRoutine.rows.sets"></td>
                                        <td><input type="text" class="nt" v-model="myRoutine.rows.notes"></td>
                                        <td><button class="ar" @click="deleteRow"><i class="fas fa-trash-alt"></i></button></td>
                                    </tr> -->
                        
                        <!-- 
                        {{ myRoutine.rows.exercise }}
                        {{ myRoutine.rows.weight }}
                        {{ myRoutine.rows.reps }}
                        {{ myRoutine.rows.sets }}
                        {{ myRoutine.rows.notes }} -->



                        <!-- USE THIS ONE, IT WORKS!!!!!! -->
                            <tr class="tdi" v-for="(item, i) in rowData" :key='i'>
                                <td scope="row"><input type="text" class="ex">{{ item.exercise }}</td>
                                <td><input type="text" class="wg">{{ item.weight }}</td>
                                <td><input type="text" class="rp">{{ item.reps }}</td>
                                <td><input type="text" class="st">{{ item.sets }}</td>
                                <td><input type="text" class="nt">{{ item.notes }}</td>
                                <td><button class="ar" @click="deleteRow"><i class="fas fa-trash-alt"></i></button></td>
                            </tr>


                        <!-- TRIED CREATING ROW DATA & METHOD FROM SCRATCH  -->
                                <!-- <tr class="tdi" v-for="(row, i) in rows" :key='i'>
                                    <td scope="row"><input type="text" class="ex">{{ newRow.rows.exercise }}</td>
                                    <td><input type="text" class="wg">{{ newRow.rows.weight }}</td>
                                    <td><input type="text" class="rp">{{ newRow.rows.reps }}</td>
                                    <td><input type="text" class="st">{{ newRow.rows.sets }}</td>
                                    <td><input type="text" class="nt">{{ newRow.rows.notes }}</td>
                                    <td><button class="ar" @click="deleteRow"><i class="fas fa-trash-alt"></i></button></td>
                                </tr> -->
                    </tbody>
                </table>
        </div>

        <div class="toAdd">Add new row</div>

        <div class="field is-grouped">
                <button type="submit" class="button">Complete Workout</button>
                <router-link to="/track" tag="a">Cancel</router-link>
        </div>
  </div>
</template>

<script>
export default {
    data: ()=> ({
        routineData: [],

        // myRoutine: {
        //     title: '',
        //     date: '',
        //     rows: [
        //       {
        //         exercise: '',
        //         weight: '',
        //         reps: '',
        //         sets: '',
        //         notes: ''
        //       }
        //     ]
        // },
       
        //  USE THIS IT WORKS!!!!!!!!!
        exercise: '',
        reps: '',
        sets: '',
        weight: '',
        notes: '',
        rowData: []
    }),
    methods: {
        addRow() {
            var myTable = {
                exercise: this.exercise,
                reps: this.reps,
                sets: this.sets,
                weight: this.weight,
                notes: this.notes
            };
            this.rowData.push(myTable) 
            this.exercise = '';
            this.reps = '';
            this.sets = '';
            this.weight = '';
            this.notes = '';
        },

        deleteRow(index) {
            this.rowData.splice(index, 1)
        },
        
        addRoutine() {
            var myRoutine = {
                title: this.title,
                date: this.date,
                exercise: this.exercise,
                weight: this.weight,
                reps: this.reps,
                sets: this.sets,
                notes: this.notes
            };
            this.routineData.push(myRoutine)
        }


        // saveRoutine() {
        //     var myRoutine = {
        //         exercise: this.exercise,
        //         reps: this.reps,
        //         sets: this.sets,
        //         weight: this.weight,
        //         notes: this.notes
        //     };
            
        // }



        // TRYING TO ADD ROUTINE -> MY WORKOUTS
            // addRoutine(myRoutine){
            
                // var myRoutine = {
                //     title: this.title,
                //     date: this.date,
                //     table: this.table
                // };
                // this.routineData.push(myRoutine)
                // this.title = ''
    }    
}

    // TRIED CREATING ROW DATA & METHOD FROM SCRATCH
            // data: ()=> ({
            //     newRow: {
            //         rows: { }
            //     },
            //     rows: [{
            //         exercise: '',
            //         weight: '',
            //         reps: '',
            //         sets: '',
            //         notes: '',
            //         deleteIcon: ''
            //     }]
            // }),
            // methods: {
            //     addRow() {
            //         this.newRow = { rows: { } }
            //     }
            // }
</script>

<style>
.routine {
    width: 60vw;
    margin: 20px auto;
    border: solid;
    border-color: #c5c5c5;
    border-radius: 4px;
    padding: 20px;
    font-family: 'Montserrat', sans-serif;
}
.field label.label, .field2 label.label, .field3 label.label {
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
    display: inline-block;
    width: 500px;
    margin: 0 20px;
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
button.button {
    background-color: #ffba08;
    color: white;
    border:none;
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
    height: 50px;
} 
.tb thead {
    text-align: center;
}
.tb input {
    border: solid;
    border-radius: 4px;
    border-color: rgba(167, 167, 167, .5);
}
.table {
    width: 750px;
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
.tdi td {
    padding: 5px;
}
th.ex, th.nt {
    width: 200px;
}
input.ex, input.nt {
    width: 190px;
    overflow: visible;
    font-family: 'Montserrat', sans-serif;
    height: 35px;
    padding: 1px 10px;
}
th.ar {
    width: 41px;
}
input.ar {
    width: 31px;
    font-family: 'Montserrat', sans-serif;
    height: 35px;
    padding: 1px 10px;

}
th.wg {
    width: 125px;
}
input.wg {
    width: 115px;
    font-family: 'Montserrat', sans-serif;
    height: 35px;
    padding: 1px 10px;
}
th.st {
    width: 85px;
}
input.st {
    width: 75px;
    font-family: 'Montserrat', sans-serif;
    height: 35px;
    padding: 1px 10px;
}
th.rp {
    width: 95px;
}
input.rp {
    width: 85px;
    font-family: 'Montserrat', sans-serif;
    height: 35px;
    padding: 1px 10px;
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
td button i {
    font-size: 18px;
    color: #707070;
    padding: 8px 5px 5px 6px;
}
td.ar {
    font-size: 18px;
    color: #474747;
    padding: 8px 5px 5px 11px;
}
</style>