import * as React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
import Story from "./Story";
import type { NewsfeedQuery as NewsfeedQueryType } from "./__generated__/NewsfeedQuery.graphql";

export default function Newsfeed() {
  const data = useLazyLoadQuery<NewsfeedQueryType>(
    graphql`
      query NewsfeedQuery {
        topStories {
          id
          ...StoryFragment
        }
      }
    `,
    {}
  );

  return (
    <div className="newsfeed">
      {data.topStories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
}
