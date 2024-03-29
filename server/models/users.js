
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios').default;

const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;
 
const list = [ 
    { 
        firstName: 'Jasmine',
        lastName: 'Ennabe',
        handle: 'jasmineennabe',
        email: 'jasmineennabe@gmail.com',
        dob: '04/14/96',
        pic: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
        password: 'itsme_jasmineennabe',
        isAdmin: true,
        friends: [ { user_handle: 'therock', isApproved: true }, { user_handle: 'arnold', isApproved: true }, { user_handle: 'jillmichaels', isApproved: true } ],
        bio: "Welcome to my page, see ya at the gym :)"
    },
    { 
        firstName: 'Dwayne',
        lastName: 'Johnson',
        handle: 'therock',
        email: 'dwaynejohnson@therock.com',
        dob: '05/02/72',
        pic: 'https://images.news18.com/ibnlive/uploads/2019/08/Sports-61.png',
        password: 'im_the_rock47',
        isAdmin: false,
        friends: [ { user_handle: 'jasmineennabe', isApproved: true }, { user_handle: 'arnold', isApproved: true }, { user_handle: 'jillmichaels', isApproved: true } ],
        bio: "Catch me in the gym or on the big screen"
    },
    {
        firstName: 'Arnold',
        lastName: 'Schwarzenegger',
        handle: 'arnold',
        email: 'iamarnold@schwarzenegger.com',
        dob: '07/30/47',
        pic: 'https://images.outlookindia.com/public/uploads/articles/2018/4/4/ARNOLD_571_855.jpg',
        password: 'im_arnold31',
        isAdmin: false,
        friends: [ { user_handle: 'therock', isApproved: true }, { user_handle: 'jasmineennabe', isApproved: true }, { user_handle: 'jillmichaels', isApproved: true } ],
        bio: "I pick things up and put them down"
    },
    {
        firstName: 'Jillian',
        lastName: 'Michaels',
        handle: 'jillmichaels',
        email: 'jillmichaels@jmichaels.com',
        dob: '02/18/74',
        pic: 'https://www.gannett-cdn.com/media/USATODAY/USATODAY/2013/02/07/gaiam_flood_080311_f611-3_4.jpg',
        password: 'im_jill_m14',
        isAdmin: false,
        friends: [ { user_handle: 'therock', isApproved: true }, { user_handle: 'arnold', isApproved: true }, { user_handle: 'jasmineennabe', isApproved: true } ],
        bio: "Fitness goals brought to you daily"
    },
];

    module.exports.GetAll = ()=> list;

    module.exports.Get = (user_id)=> list[user_id];

    module.exports.GetByHandle = (handle)=> ({ ...list.find( (x, i)=> x.handle == handle), password: undefined });

    module.exports.GetFriends = (handle)=> ( module.exports.GetByHandle(handle).friends
        .filter(f=> f.isApproved).map(f=> {
            const user = module.exports.GetByHandle(f.user_handle)
            return { firstName: user.firstName, lastName: user.lastName, handle: user.handle }    
    })); 
    
    module.exports.AddFriend = (handle, user_handle) => {
        const usr = module.exports.GetByHandle(handle)
        usr.friends.push(user_handle)
        return {...usr.friends}
    }

    module.exports.Add = (user)=> {
        if(!user.firstName){
            throw { code: 422, msg: "First Name is required" }
        }
        list.push(user);
        return { ...user, password: undefined };
    }

    module.exports.Register = async (user)=> {
        const hash = await bcrypt.hash(user.password, +SALT_ROUNDS);
        
        user.password = hash;

        if(!user.firstName){
            throw { code: 422, msg: "First Name is required" }
        }

        list.push(user);
        return { ...user, password: undefined }
    }

    module.exports.Login =  async (handle, password) =>{
        console.log({ handle, password})
        const user = list.find(x=> x.handle == handle); 
        if(!user) throw { code: 401, msg: "Sorry, there is no user with that username" };

        if( await bcrypt.compare(password, user.password) ){ //took out beginning !
            throw { code: 401, msg: "Wrong Password" };
        }

        const data = { ...user, password: undefined };

        const token = jwt.sign(data, JWT_SECRET)

        return { user: data, token };
    }

    // module.exports.LoginFB = async (access_token) {

    // }

    module.exports.Update = (user_id, user)=> {
        module.exports.Get(user_id);
        if(user.firstName){
            list[user_id].firstName = user.firstName;
        }
        if(user.lastName){
            list[user_id].lastName = user.lastName;
        }
        if(user.handle){
            list[user_id].handle = user.handle;
        }
        if(user.pic){
            list[user_id].pic = user.pic;
        }
        if(user.bio){
            list[user_id].bio = user.bio;
        }
        return { ...list[user_id], password: undefined };
    }

    module.exports.Delete = (user_id)=> {
        const user = list[user_id];
        list.splice(user_id, 1);
        return user;
    }

    module.exports.LoginFB = async (access_token) =>{
        console.log({ access_token })
    
        const userFB = await axios.get(`https://graph.facebook.com/v10.0/me?fields=first_name,last_name,email,picture&access_token=${access_token}`)
        console.log(userFB.data);
    
        // Get a verified email address from facebook
        let user = list.find(x=> x.email == userFB.data.email);
        if(!user) {
            user = {
                firstName: userFB.data.first_name,
                lastName: userFB.data.last_name,
                pic: userFB.data.picture.data.url,
                email: userFB.data.email,
                handle:  userFB.data.email
            };
            list.push(user);
        }
    
        const data = { ...user, password: undefined };
    
        const token = jwt.sign(data, JWT_SECRET)
    
        return { user: data, token };
    }
    
    module.exports.FromJWT = async (token) => {
        try {
            const user = jwt.verify(token, JWT_SECRET);
            return user;
        } catch (error) {
            console.log({error});
            return null;
        }
    }