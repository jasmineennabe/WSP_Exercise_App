<template>
  <div class="friends">
      {{ friends.name }}
  </div>
</template>

<script>
export default {
    data: ()=> {
        // friends: [
        //     {
        //         name: 'John Doe',
        //         handle: "@johndoe",
        //         pic: 'https://randomuser.me/api/portraits/men/1.jpg',
        //     },
        //     { 
        //         name: 'Jane Doe',
        //         handle: "@janedoe",
        //         pic: 'https://randomuser.me/api/portraits/women/67.jpg',
        //     },
        //     { 
        //         name: 'Jack Doe',
        //         handle: "@jackdoe",
        //         pic: 'https://randomuser.me/api/portraits/men/32.jpg',
        //     },
        
        // ]
    },
    props: {
        friend: Object
    }
}
</script>

<style>

</style>