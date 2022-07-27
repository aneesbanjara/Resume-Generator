const avilableUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        payload: action.payload,
      };
    case "FETCH_USER_FULFILLED": {
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
        hireable,
      } = action.payload;

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
        hireable,
      };
      return {
        ...state,
        userData,
        isUserAvilable: true
      };
    }
    case "BACK_TO_HOME":
      return {
        ...state,
        isUserAvilable: false
      };

    default:
      return state;
  }
};

export default avilableUserReducer;

// const avilableUserReducer = (state = INIT_USER, action) => {
//   if (action.type === "GENERATE") {
//     userFetchHandler(action.payload).then(res => console.log(res))
//     userFetchHandler(action.payload).then(res => {
//       state.userData= {...res};
//       state.isUserAvilable = true;
//     }).catch((e) => {
//       state.userData= {...e}
//       state.isUserAvilable = true
//     })
//     return state
//   } else if (action.type === 'BACK') {
//     return state.isUserAvilable = false
//   }

//   return INIT_USER
// }

// const userFetchHandler = async (user) => {
//   try {
//     const dataResponse = await axios.get(
//       `https://api.github.com/users/${user}`
//     )
//     const {
//       avatar_url,
//       name,
//       email,
//       location,
//       company,
//       twitter_username,
//       blog,
//       bio,
//       followers_url,
//       following_url,
//       repos_url,
//       created_at: joinedDate,
//       hireable
//     } = dataResponse.data;

//     const userData = {
//       avatar_url,
//       name,
//       email,
//       location,
//       company,
//       twitter_username,
//       blog,
//       bio,
//       followers_url,
//       following_url,
//       repos_url,
//       joinedDate,
//       hireable
//     }
//     return userData;
//   } catch (e) {
//     const userData= {
//       error: 'Data not found.'
//     }
//     return userData
//   }
// }
