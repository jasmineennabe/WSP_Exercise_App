
import { ToastProgrammatic as toastr } from "buefy";
import { api } from "./myFetch";
import Session from "../models/Session"

    export function GetAllUsers(){
        return api('users');
    }

    export function GetUserInfo(user_id){
        console.log("get user info handle: ", user_id)
        return api( `users/${user_id}` );
    } 

    export function GetFriends(handle) {
        return api(`users/friends/${handle}`)
    }

    export function AddFriend(user_handle) {
        return api (`users/addFriend/${user_handle}`)
    }

    export function GetMyFriends() {
        return api( 'users/friends' );
    }    
        
    export async function Register(user){ 
        console.log(user)
        const newUser = await api( 'users/register', user )
        
        Session.user = newUser;

        console.log(Session.user); 
        toastr.open({
            type: 'is-success',
            message: `Registration successful. Welcome ${Session.user.firstName}!`
        });
    }
