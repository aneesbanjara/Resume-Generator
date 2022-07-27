export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED'
export const BACK_TO_HOME = 'BACK_TO_HOME'


export const fetchUser = username => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });
export const backToHome = payload => ({type: BACK_TO_HOME, payload})


