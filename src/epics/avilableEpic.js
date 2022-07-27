import { ajax } from 'rxjs/ajax'
import { ofType } from 'redux-observable';
import { mergeMap,map , catchError, of} from 'rxjs';
import { fetchUserFulfilled, FETCH_USER} from '../actions/index';


export const avilableUserEpic = action$ => action$.pipe(
  ofType(FETCH_USER),
  mergeMap(action => ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
    map(response => {
      return fetchUserFulfilled(response)}),
      catchError(error => of({
        type: 'Error occured',
        payload: error.xhr.response,
        error: true
      }))
  )
)
)