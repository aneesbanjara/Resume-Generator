const INIT_COUNT_STATE = {
  following_count: "N/A",
  followers_count: "N/A",
  repos_count: "N/A",
  isHirable: false,
};

const userCountReducer = (state = INIT_COUNT_STATE, action) => {
  switch (action.type) {
    case "FOLLOWERS_COUNT":
      return {
        ...state,
        followers_count: action.payload,
      };
    case "FOLLOWER_COUNT_FULFILLED":
      return {
        ...state,
        followers_count: action.payload,
      };
    case "FOLLOWING_COUNT_FULFILLED":
      return {
        ...state,
        following_count: action.payload,
      };
    case "REPOS_COUNT_FULFILLED":
      return {
        ...state,
        repos_count: action.payload,
      };
    case "FOLLOWERS_COUNT_FAILURE":
      return {
        ...state,
        followers_count: 'N/A'
      };
    case "FOLLOWING_COUNT_FAILURE":
      return {
        ...state,
        following_count: 'N/A'
      };
    case "REPOS_COUNT_FAILURE":
      return {
        ...state,
        repos_count: 'N/A'
      };
    default:
      return {
        ...state,
      };
  }
};

export default userCountReducer;
