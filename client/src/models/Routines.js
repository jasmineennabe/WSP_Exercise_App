
import { api } from "../models/myFetch";


export function AddRoutine(routine) {
    return api("routines/add", routine);
}
 
export function GetMyRoutines() {
    return api("routines/myRoutines");
}

export function DeleteRoutine(routine_id) {
    return api( "routines/" + routine_id, { }, "DELETE" );
}

// export function GetWorkouts() {
//   return routines.workouts;
//   // return routines.workouts(x => x.routines.id == id); 
// }