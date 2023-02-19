import type ProfileProps from "../../types/profileProps";
import Avatar from "../user/avatar";
import TweetContent from "./tweetContent";

import {
  reply,
  retweet,
  like,
  views,
  share,
  more,
} from "../../styles/assets/icons/iconData";

export default function Tweet({
  userName,
  userHandle,
}: ProfileProps): JSX.Element {
  return (
    <div className="flex flex-row">
      <div>
        <Avatar />
      </div>

      <div>
        <div className="flex flex-row justify-between">
          <div>
            <span>{userName} </span>
            <span>{userHandle}</span>
            {/* <span>{timeSincePost}</span> */}
          </div>
          <div>{more}</div>
        </div>

        <div>
          <TweetContent />
        </div>

        <div className="flex flex-row">
          <div className="fill-dark-500">
            <div>{reply}</div>
          </div>
          <div className="fill-dark-500">
            <div>{retweet}</div>
          </div>
          <div className="fill-dark-500">
            <div>{like}</div>
          </div>
          <div className="fill-dark-500">
            <div>{views}</div>
          </div>
          <div className="fill-dark-500">
            <div>{share}</div>
          </div>
        </div>

        <div>
          <span className="text-blue">Show this thread</span>
        </div>
      </div>
    </div>
  );
}
