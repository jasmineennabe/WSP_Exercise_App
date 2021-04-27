<template>
    <div class="routine-badge">
        <router-link class="routine-button" to="/MyRoutines">
            <button>
                <h1>View Workout</h1>
                <h2>"{{ text }}"</h2>
                <i class="fas fa-dumbbell"></i>
            </button>
        </router-link>    
    </div>
</template>

<script>
export default {
    props: {
        text: String,
        routine: Object,
    }
}
</script>

<style scoped>
    .routine-badge {
        float: left;
    }
    button {
        margin: 20px;
        padding: 10px;
        background-color: #d90429;
        color: white;
        border: none;
        border-radius: 4px;
        width: 200px;
        height: 180px;
        cursor: pointer;
    }
    i {
        color: white;
        font-size: 60px;
    }
    .routine-button {
        border: none;
        margin: 0;
    }
    .routine-button h1 {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 28px;
    }
    .routine-button h2 {
        font-weight: bolder;
        color: white;
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        margin-top: 10px;
        margin-bottom: 15px;
    }
</style>