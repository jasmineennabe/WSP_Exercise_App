<template>
  <div class="my-wall">
    <div class="columns">
      <div class="column is-one-quarter">  
          <FriendsSmall />  
      </div>
      <div class="column">
          <div class="content-item">
            <div class="create">
                <form @submit.prevent="addPost">
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
        <div class="content-item" v-for="(post, i) in posts" :key="i">
            <ContentCard :post="post" />
        </div>
      </div>
      <div class="column is-one-quarter">  
        <div class="content-item">
            
            <ContentCard :post="newPost" />
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
    import ContentCard from "../components/ContentCard";
    import FriendsSmall from "../components/FriendsSmall"
    
export default {
    data: ()=> ({
        newPost: {
            user: { }
        },
    
        posts: [
            {
                src: "https://media1.popsugar-assets.com/files/thumbor/vKNa7cWT-LcJKVuNeRgYO97JWIo/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2012/01/01/2/192/1922729/2029132756a5a1d5_studio.jpg",
                alt: "Placeholder image",
                caption: "SO excited to get back into yoga!",
                time: Date(),
                user: {
                    name: "Jasmine Ennabe",
                    handle: "@jas",
                    pic: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
                }
            },
            {
            src: "https://asweatlife.com/wp-content/uploads/2018/04/MG_5692-1024x683.jpg",
                alt: "Placeholder image",
                caption: "Easing into it.... kinda",
                time: Date(),
                user: {
                    name: "Jasmine Ennabe",
                    handle: "@jas",
                    pic: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
                }
            },
            {
            src: "https://pd-stuytown-cd.stuytown.com/-/media/an-to-ba/backofgym-1380x600.jpg?h=600&la=en&w=1380",
                alt: "Placeholder image",
                caption: "Check out my new gym!",
                time: Date(),
                user: {
                    name: "Jasmine Ennabe",
                    handle: "@jas",
                    pic: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
                }
            }
        ]
    }),
    components: {
        ContentCard,
        FriendsSmall
    },
    methods: {
        addPost(){
            this.posts.unshift(this.newPost);
            this.newPost = { user: {} }
        }
    }
}
</script>

<style>
.my-wall {
    display: block;
}
.content-item {
    margin: 20px 40px;
    display: block;
}
div.create {
    border: solid;
    border-radius: 4px;
    border-color: #8f8f8f;
    background-color: white;
    margin: 10px auto;
    height: 400px;
}
.field {
    width: 150px;
    display: inline-block;
    margin: 20px;
    height: 40px;
}
.create label.label {
    margin-top: 30px;
    width: 120px;

}
div.field-label {
    padding: 0 20px;
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 18px;
    text-align: right;
    margin: 0;
}
input.input {
    width: 150px;
    padding-left: 5px;
}
input.input.img-link, div.control.longer {
    width: 335px;
    overflow: scroll;
}
button.post-btn {
    font-family: 'Bebas Neue', sans-serif;
    color: white;
    background-color: #8f8f8f;
    font-size: 25px;
    border: none;
    border-radius: 4px;
    padding: 10px;
    margin-top: 60px;
    margin-left: 280px;
    width: 100px;
    cursor: pointer;
}
div.column {
    padding: 0;
    width: 33vw;
}
</style>