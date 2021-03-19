

const users = require('./users');

const list = [
    {
        src: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Frainerzitelmann%2Ffiles%2F2019%2F05%2FGettyImages-481406443-1200x1785.jpg',
        alt: 'Placeholder image',
        caption: 'Check out these hot biceps',
        time: Date(),
        user_handle: '@arnold',
    },
    {
        src: 'https://cdn.insidesport.co/wp-content/uploads/2020/10/23001733/76750498.jpg',
        alt: 'Placeholder image',
        caption: 'Getting pumped up filming for my new movie "Lift"',
        time: Date(),
        user_handle: '@therock',
    },
    {
        src: 'https://media1.popsugar-assets.com/files/thumbor/ZyIeJkTEDNT-OEGn5UI-ryq2hRI/0x0:1916x1431/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2019/07/08/713/n/1922729/19a4cd815d236a1541b1a3.55635081_/i/Jillian-Michaels-Belly-Fat-Workout.jpg',
        alt: 'Placeholder image',
        caption: 'Daily fitness check. Are you guys keeping yourself accountable?',
        time: Date(),
        user_handle: '@jillmichaels',
    },
    {
        src: 'https://pd-stuytown-cd.stuytown.com/-/media/an-to-ba/backofgym-1380x600.jpg?h=600&la=en&w=1380',
        alt: 'Placeholder image',
        caption: 'Check out my new gym!',
        time: Date(),
        user_handle: '@jasmineennabe'
    },
    {
        src: 'https://media1.popsugar-assets.com/files/thumbor/vKNa7cWT-LcJKVuNeRgYO97JWIo/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2012/01/01/2/192/1922729/2029132756a5a1d5_studio.jpg',
        alt: 'Placeholder image',
        caption: 'SO excited to get back into yoga!',
        time: Date(),
        user_handle: '@jasmineennabe'
    },
];

module.exports.GetAll = ()=> list.map((x, i)=> ({
    ...x,
    user: users.GetByHandle(x.user_handle)
}) );
module.exports.Get = (post_id)=> list[post_id];
module.exports.Add = (post)=> {
    if(!post.user_handle){
        throw "Post must have an owner"
    }
    list.push(post);
    return { ...post };
}
module.exports.Update = (post_id, post)=> {
    const oldObj = list[post_id];
    const newObj = { ...oldObj, ...post }
    list[post_id] = newObj;
    return newObj;
}
module.exports.Delete = (post_id)=> {
    const post = list[post_id];
    list.splice(post_id, 1);
    return post;
}