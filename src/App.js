import { Fragment, useState } from "react";
import axios from "axios";
import Search from "./components/Search/Search";
import Resume from "./components/Resume/Resume";

function App() {
  const [isUserAvilable, setIsUserAvilable] = useState(false);
  const [userData, setUserData] = useState({})
  // const [isAlert, setIsAlert] = useState(false)

  const userFetchHandler = async (username) => {
    try {
      const dataResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setIsUserAvilable(true);
      const {
        avatar_url,
        name,
        email,
        location,
        company,
        twitter_username,
        blog,
        bio,
        followers_url,
        following_url,
        repos_url,
        created_at: joinedDate,
        hireable
      } = dataResponse.data;

      const userData = {
        avatar_url,
        name,
        email,
        location,
        company,
        twitter_username,
        blog,
        bio,
        followers_url,
        following_url,
        repos_url,
        joinedDate,
        hireable
      }
      setUserData(userData);
    } catch (e) {
      setIsUserAvilable(false);
      
    }
  };

  const returnToHomeHandlar = () =>{
    setIsUserAvilable(false)
  }

  return (
    <Fragment>
      {/* {isAlert && alert('User cannot be found!')} */}
      {!isUserAvilable && <Search onUserFetch={userFetchHandler} />}
      {isUserAvilable && <Resume data={userData} onBack={returnToHomeHandlar}/>}
    </Fragment>
  );
}

export default App;
