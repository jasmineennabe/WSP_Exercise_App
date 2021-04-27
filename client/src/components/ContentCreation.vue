<template>
    <div class="content-item">
        <div class="create">
            <form @submit.prevent="$emit('add')" class="form">
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
                    <button type="submit" value="Submit" class="post-btn">
                        Post
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        newPost: Object
    }
}
</script>

<style scoped> 
    .create {
        max-height: 310px;
        width: 550px;
    }
    label.label, input.input.img-link, textarea.textarea {
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;
    }
    .is-horizontal {
        margin-left: -20px;
    }
    button.post-btn {
        margin-top: 40px;
        margin-left: 220px;
        font-size: 20px;
        padding: 10px 0;
    }
    button.post-btn:hover {
        background-color: #a3a3a3;
    }
</style>