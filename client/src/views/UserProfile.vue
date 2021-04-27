<template>
    <div class="profile-page">
        <div class="columns">
            <div class="column is-one-quarter">
                <UserProfileHeader :user="user" /> <!-- :postNumber="user.posts.length" -->
            </div>

            <div class="column">
                <div class="content-item" v-for="(post, i) in userPosts" :key="i">
                    <UserContent :post="post" />
                </div>
            </div>

            <div class="column is-one-quarter">
                <FriendsSmall :text="`${user.firstName}'s Friends`" />
            </div>
        </div>
    </div>
</template>

<script>
    import UserProfileHeader from '../components/UserProfileHeader'
    import UserContent from '../components/UserContent'
    import { GetUserInfo } from "../models/Users"
    // import { GetPostsForUser } from "../models/Posts"
    import FriendsSmall from '../components/FriendsSmall.vue'

export default {
    data: ()=> ({
        user: {},
        post: {},
        userPosts: []
    }),
    async mounted() {
        // this.userPosts = await GetPostsForUser(this.$route.params);
        this.user = await GetUserInfo(this.$route.params);
    },
    components: {
        UserProfileHeader,
        UserContent,
        FriendsSmall
    },
    methods: {
        
    },
    props: {
        ['handle']: String,
    }
}
</script>

<style scoped>
    .column {
        margin: 20px;
    }
</style>