
import Session from './Session';

const posts = [
    {
        src: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Frainerzitelmann%2Ffiles%2F2019%2F05%2FGettyImages-481406443-1200x1785.jpg",
        alt: "Placeholder image",
        caption: "Check out these hot biceps",
        time: Date(),
        user: {
            name: "Arnold Schwarzenegger",
            handle: "@arnold",
            pic: "https://images.outlookindia.com/public/uploads/articles/2018/4/4/ARNOLD_571_855.jpg",
        }
    },
    {
    src: "https://cdn.insidesport.co/wp-content/uploads/2020/10/23001733/76750498.jpg",
        alt: "Placeholder image",
        caption: "Getting pumped up filming for my new movie 'Lift'",
        time: Date(),
        user: {
            name: "Dwayne 'The Rock' Johnson",
            handle: "@therock",
            pic: "https://images.news18.com/ibnlive/uploads/2019/08/Sports-61.png",
        }
    },
    {
    src: "https://media1.popsugar-assets.com/files/thumbor/ZyIeJkTEDNT-OEGn5UI-ryq2hRI/0x0:1916x1431/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2019/07/08/713/n/1922729/19a4cd815d236a1541b1a3.55635081_/i/Jillian-Michaels-Belly-Fat-Workout.jpg",
        alt: "Placeholder image",
        caption: "Daily fitness check. Are you guys keeping yourself accountable?",
        time: Date(),
        user: {
            name: "Jillian Michaels",
            handle: "@jillmichaels",
            pic: "https://www.gannett-cdn.com/media/USATODAY/USATODAY/2013/02/07/gaiam_flood_080311_f611-3_4.jpg",
        }
    },
    {
        src: "https://media1.popsugar-assets.com/files/thumbor/vKNa7cWT-LcJKVuNeRgYO97JWIo/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2012/01/01/2/192/1922729/2029132756a5a1d5_studio.jpg",
        alt: "Placeholder image",
        caption: "SO excited to get back into yoga!",
        time: Date(),
        user: {
            name: "Jasmine Ennabe",
            handle: "@jasmineennabe",
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
            handle: "@jasmineennabe",
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
            handle: "@jasmineennabe",
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