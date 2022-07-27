export const FOLLOWING_COUNT = "FOLLOWING_COUNT";
export const FOLLOWERS_COUNT = "FOLLOWERS_COUNT";
export const REPOS_COUNT = "REPOS_COUNT";
export const FOLLOWERS_COUNT_FULFILLED = "FOLLOWER_COUNT_FULFILLED";

export const followingCount = (payload) => {
  return {
    type: FOLLOWING_COUNT,
    payload
  };
};

export const followersCount = (payload) => {
  return {
    type: FOLLOWERS_COUNT,
    payload
  };
};

export const reposCount = (payload) => {
  return {
    type: REPOS_COUNT,
    payload
  };
};

export const followersCountFulfilled = data => ({
  type: FOLLOWERS_COUNT_FULFILLED,
  payload:data
});

export const followingCountFulfilled = data => ({
  type: 'FOLLOWING_COUNT_FULFILLED',
  payload:data
});

export const reposCountFulfilled = data => ({
  type: 'REPOS_COUNT_FULFILLED',
  payload:data
});


export const followersCountFailure = data => ({
  type: 'FOLLOWERS_COUNT_FAILURE',
  payload:data
});

export const followingCountFailure = data => ({
  type: 'FOLLOWING_COUNT_FAILURE',
  payload:data
});

export const reposCountFailure = data => ({
  type: 'REPOS_COUNT_FAILURE',
  payload:data
});

