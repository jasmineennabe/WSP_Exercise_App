<template>
    <div class="my-routines-badge">
        <WorkoutButton  @toggleWorkoutButton="toggleWorkoutButton" :routines="routines" :text="showRoutine ? 'Close' : 'routine.title'" /> <!-- :text="showRoutine ? 'Close' : 'routine.title'" />   -->
        <div class="show-routine" v-show="showRoutine">
            <Routine :routines="routines" /> 
        </div> 
    </div>
</template>

<script>
    import WorkoutButton from "../components/WorkoutButton"
    import Routine from '../components/Routine'
    import { GetRoutines } from '../models/Routines'

export default {
    data: ()=> ({
        routines: [],
        showRoutine: false,
    }),
    mounted(){
        this.routines = GetRoutines();
    },
    methods: {
        toggleWorkoutButton() {
            this.showRoutine= !this.showRoutine
        },
    },
    components: {
        WorkoutButton,
        Routine,
    },
    props: {
        text: String,
    }
}
</script>

<style scoped>

</style>