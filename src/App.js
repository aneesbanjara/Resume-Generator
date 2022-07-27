import { Fragment, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { fetchUser, backToHome } from "./actions/index";

import Search from './components/Search/Search'
import Resume from './components/Resume/Resume'

const App = () => {
  const myState = useSelector((state) => state.avilableUserReducer)
  const dispatch = useDispatch()

  const SubmittedDataHandler = (enteredUser) => {
    if (enteredUser.length === 0) {
      return console.log('Please enter github username.')
    }
    dispatch(fetchUser(enteredUser))
  }

  console.log('for mystate',myState)
  return (
    <Fragment>
      {!myState.isUserAvilable && <Search onSubmitData = {SubmittedDataHandler}/>}
      {myState.isUserAvilable && <Resume data={myState.userData} onBack={() => dispatch(backToHome())}/>}
    </Fragment>
  );
}

export default App;
