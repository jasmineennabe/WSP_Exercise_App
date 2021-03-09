<template>
    <div class="content-item">
        <div class="create">
            <form @submit.prevent="$emit('addPost')">
                <div class="field is-horizontal">
                <div class="field-label">
                    <label class="label">User</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <p class="control">
                        <input class="input" type="text" placeholder="Name" v-model="newPost.user.name">
                    </p>
                    </div>
                    <div class="field">
                    <p class="control">
                        <input class="input" type="text" placeholder="@handle" v-model="newPost.user.handle">
                    </p>
                    </div>
                </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label">
                    <label class="label">Image Link</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control longer">
                                <input class="input img-link" type="text" placeholder="https://www.google.com/images" v-model="newPost.src">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                <div class="field-label">
                    <label class="label">Caption</label>
                </div>
                <div class="field-body">
                    <div class="field">
                    <div class="control longer">
                        <textarea class="textarea" placeholder="Enter a nice fitting caption here" v-model="newPost.caption"></textarea>
                    </div>
                    </div>
                </div>
                </div>

                <div class="field is-horizontal">
                <div class="field-label">
                    <!-- Left empty for spacing -->
                </div> 
                </div>
                <div class="control">
                    <button type="submit" class="post-btn">
                    Post
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        newPost: Object
    }
}
</script>

<style>

</style>