<template>
    <div class="content-item"> 
        <button @click="$emit('toggleContentCreation')">{{ text }}</button>
    </div> 
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>

<style scoped>
button {
    border: none;
    border-radius: 4px;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    color: white;
    font-weight: bolder;
    background-color: #710000;
    cursor: pointer;
    width: 109px;
}
</style>