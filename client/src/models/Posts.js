
//import Session from './Session';
import { api } from "../models/myFetch";

    export function GetPostsForUser(handle) {
        return api(`posts/user/${handle}`);
    } 

    export function GetMyPosts(handle) {
        return api( `posts/${handle}` );
    } // works

    export function GetMyFeed() {
        return api( "posts" ); 
    } 

    export function AddPost(post) {
        return api( "posts", post );
    }
    
    export function DeletePost(post_id) { // HAVE TO ADD POST IDS TO POSTS SO THAT WE CAN DELETE SPECIFIC POSTS
        return api( "posts/" + post_id, { }, "DELETE" );
    }