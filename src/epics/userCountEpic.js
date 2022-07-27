import { ofType } from "redux-observable";
import {  map, of,from} from "rxjs";
import {catchError, switchMap, mergeMap, delay} from 'rxjs/operators';
import { ajax } from "rxjs/ajax";
import { FOLLOWERS_COUNT, followersCountFulfilled } from "../actions/userCount";

// export const followerCountEpic = action$ => action$.pipe(
//   ofType(FOLLOWERS_COUNT),
//   mergeMap(action => ajax.getJSON(action.payload).pipe(
//     map(response => {

//       console.log('length',response.length);
//       return of({
//         type: "FOLLOWER_COUNT_FULFILLED",
//         payload: response,
//       });
//       return followersCountFulfilled(response.length)}),
//       catchError(error => of({
//         type: 'Error occured',
//         payload: error.xhr.response,
//         error: true
//       }))
//   )
// )
// )


export const followerCountEpic = action$ =>
  action$.pipe(
    ofType("FOLLOWERS_COUNT"),
    mergeMap(action =>
      from(ajax.getJSON(action.payload)).pipe(
        mergeMap(response => {
          console.log('response', response);
        

          return of({
            type: "FOLLOWER_COUNT_FULFILLED",
            payload: response.length,
          });
        }),
        catchError(err => {
          console.warn(err.message);
          
          return of({
            type: "FOLLOWERS_COUNT_FAILURE",
            payload: err,
          });
        }),
      ),
    ),
  );


export const followingCountEpic = action$ =>
action$.pipe(
  ofType("FOLLOWING_COUNT"),
  mergeMap(action =>
    from(ajax.getJSON(action.payload)).pipe(
      mergeMap(response => {
        console.log('response', response);
      

        return of({
          type: "FOLLOWING_COUNT_FULFILLED",
          payload: response.length,
        });
      }),
      catchError(err => {
        console.warn(err.message);
        
        return of({
          type: "FOLLOWING_COUNT_FAILURE",
          payload: err,
        });
      }),
    ),
  ),
);

export const reposCountEpic = action$ =>
action$.pipe(
  ofType("REPOS_COUNT"),
  mergeMap(action =>
    from(ajax.getJSON(action.payload)).pipe(
      mergeMap(response => {
        console.log('response', response);
      

        return of({
          type: "REPOS_COUNT_FULFILLED",
          payload: response.length,
        });
      }),
      catchError(err => {
        console.warn(err.message);
        
        return of({
          type: "REPOS_COUNT_FAILURE",
          payload: err,
        });
      }),
    ),
  ),
);
