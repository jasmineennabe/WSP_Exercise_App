import Session from './Session';


const posts = [
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
];

export function GetMyPosts() {
    return GetPostsForUser(Session.user.handle);
}
export function GetPostsForUser(id) {
    return posts.filter(x => x.user.handle == id);
}
export function GetMyFeed() {
    return posts;
}