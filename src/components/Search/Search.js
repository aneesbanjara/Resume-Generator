import { Fragment, useState } from "react";

import classes from './Search.module.css'
import Button from "../Button/Button";

const Search = (props) => {

  const [enteredUser, setEnteredUser] =  useState('');

  const userHandler = (e) => {
    setEnteredUser(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    props.onUserFetch(enteredUser);
  }

  return (
    <Fragment>
      <div className={classes.search}>
        <div>
            <h1>Github Profile</h1>
          <p>Generate your Github Profile.</p>
        </div>
      <form onSubmit={onSubmitHandler} className={classes.submitForm}>
        <input type="search" name="search" id="search" placeholder="Github Username" onChange={userHandler} />
        <Button type="submit">Generate</Button>
      </form>
      </div>
    </Fragment>
  );
}

export default Search;