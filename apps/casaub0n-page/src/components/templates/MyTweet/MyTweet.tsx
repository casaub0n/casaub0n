import { Suspense } from "react";

import { Tweet, TweetSkeleton } from "react-tweet";

/**
 * @todo move this component under organisms
 */
export const MyTweet = () => {
  return (
    <Suspense fallback={<TweetSkeleton />}>
      <Tweet id='1671802628051984384' />
    </Suspense>
  );
};
