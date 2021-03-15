<template>
    <div class="my-routines-badge">
        <WorkoutButton :routine="routine" @toggleWorkoutButton="toggleWorkoutButton" :text="showRoutine ? 'Close' : routine.title" /> 
        <div class="show-routine" v-show="showRoutine">
            <Routine :routine="routine" /> 
        </div> 
    </div>
</template>

<script>
    import WorkoutButton from "../components/WorkoutButton"
    import Routine from '../components/Routine'

export default {
    data: ()=> ({
        showRoutine: false,
    }),
    methods: {
        toggleWorkoutButton() {
            this.showRoutine = !this.showRoutine
        },
    },
    components: {
        WorkoutButton,
        Routine,
    },
    props: {
        routine: Object,
        row: Object,
        text: String,
    }
}
</script>

<style scoped>

</style>