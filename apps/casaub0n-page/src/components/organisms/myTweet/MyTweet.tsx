import { Suspense } from "react";

import { Tweet, TweetSkeleton } from "react-tweet";

/**
 * My foo noodle tweet
 * @description just wrap react-tweet
 */
export const MyTweet = () => (
  <Suspense fallback={<TweetSkeleton />}>
    <Tweet id='1671802628051984384' />
  </Suspense>
);
