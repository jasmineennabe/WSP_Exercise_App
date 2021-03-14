<template>
    <div class="workout-button">
        <button @click="$emit('toggleWorkoutButton')">{{ text }}</button>
    </div>
</template>

<script>
export default {
    props: {
        text: String,
    }
}
</script>

<style scoped>
button {
    width: 140px;
    height: 40px;
    border: solid;
    border-color: #710000;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 20px;
    background-color: white;
    cursor: pointer;
}
</style>