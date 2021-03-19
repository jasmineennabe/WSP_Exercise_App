

const list = [
    { 
        firstName: 'Jasmine',
        lastName: 'Ennabe',
        handle: '@jasmineennabe',
        pic: '',
        password: 'wsp_jasmineennabe',
    },
    { 
        firstName: 'Dwayne',
        lastName: 'Johnson',
        handle: '@therock',
        pic: 'https://images.news18.com/ibnlive/uploads/2019/08/Sports-61.png',
        password: 'im_the_rock47',
    },
    {
        firstName: 'Arnold',
        lastName: 'Schwarzenegger',
        handle: '@arnold',
        pic: 'https://images.outlookindia.com/public/uploads/articles/2018/4/4/ARNOLD_571_855.jpg',
        password: 'im_arnold31'
    },
    {
        firstName: 'Jillian',
        lastName: 'Michaels',
        handle: '@jillmichaels',
        pic: 'https://www.gannett-cdn.com/media/USATODAY/USATODAY/2013/02/07/gaiam_flood_080311_f611-3_4.jpg',
        password: 'im_jill_m14'
    },
];

module.exports.GetAll = ()=> list;
module.exports.Get = (user_id)=> list[user_id];
module.exports.GetByHandle = (handle)=> ({ ...list.find( (x, i)=> x.handle == handle), password: undefined });
module.exports.Add = (user)=> {
    if(!user.firstName){
        throw "First Name is required"
    }
    list.push(user);
    return { ...user, password: undefined };
}
module.exports.Update = (user_id, user)=> {
    const oldObj = list[user_id];
    if(user.firstName){
        oldObj.firstName = user.firstName;
    }
    if(user.lasstName){
        oldObj.lastName = user.lastName;
    }
    if(user.handle){
        oldObj.handle = user.handle;
    }
    if(user.pic){
        oldObj.pic = user.pic;
    }
    return { ...oldObj, password: undefined };
}
module.exports.Delete = (user_id)=> {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
}