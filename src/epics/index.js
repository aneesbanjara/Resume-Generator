import { combineEpics } from "redux-observable";
import { avilableUserEpic } from "./avilableEpic";
import {
  followerCountEpic,
  followingCountEpic,
  reposCountEpic,
} from "./userCountEpic";

export const rootEpic = combineEpics(
  avilableUserEpic,
  followerCountEpic,
  followingCountEpic,
  reposCountEpic
);
