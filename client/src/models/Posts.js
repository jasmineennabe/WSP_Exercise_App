
//import Session from './Session';
import { api } from "../models/myFetch";

export function GetMyPosts() {
    return api("posts/myPosts");
} 

export function GetPostsForUser(handle) {
    console.log(handle)
    return api( "posts/" + handle );
}

export function GetMyFeed() {
    return api( "posts" ); 
} 

export function AddPost(post) {
    return api( "posts", post );
}
 
export function DeletePost(post_id) { // HAVE TO ADD POST IDS TO POSTS SO THAT WE CAN DELETE SPECIFIC POSTS
    return api( "posts/" + post_id, { }, "DELETE" );
}