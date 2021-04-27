<template>
  <div class="friends">
      {{ friends.user.firstName }}
  </div>
</template>

<script>
    

export default {
    data: ()=> {
        friends: [
            {
                user: {
                    firstName: null,
                    lastName: null,
                    handle: null,
                    pic: null,
                    isApproved: null,
                }
            }
        ]
    },
    async mounted() {
        this.friends = await GetMyFriends();
    },
    props: {
        friends: Array,
        user: Object,
    },
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
}
</script>

<style>

</style>