

import Session, { toastError } from "./Session"; // took out { toastError}

export const API_ROOT = process.env.VUE_APP_API_ROOT;

export function api(url, data, method){

    let promise;
    
    const headers = { authorization: `bearer ${Session.token}` }
 
    if(data){
        promise = fetch(API_ROOT + url, {
            method: method ?? 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
              ...headers, 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
    } else {
        promise = fetch(API_ROOT + url, { headers })
    }
    return promise
        .then(x=> {
            if(x.ok) return x.json();
            else return x.json().then(y=> { throw y; })
        })
        .catch(err=>{
            console.error(err)
            toastError(err.msg || err);
        });
}