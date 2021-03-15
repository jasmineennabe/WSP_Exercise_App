<template>
    <div class="workout-button">
        <button @click="$emit('toggleWorkoutButton')" :routine="routine">{{ text }}</button>
    </div>
</template>

<script>
export default {
    
    props: {
        routine: Object,
        text: String,
    }
}
</script>

<style scoped>
button {
    padding: 10px;
    border: solid;
    border-color: #710000;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 20px;
    background-color: white;
    cursor: pointer;
}
</style>