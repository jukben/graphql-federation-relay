import * as React from "react";
import { useFragment, graphql } from "react-relay";
import type { ImageFragment$key } from "./__generated__/ImageFragment.graphql";

const ImageFragment = graphql`
  fragment ImageFragment on Image
  @argumentDefinitions(
    width: { type: "Int", defaultValue: null }
    height: { type: "Int", defaultValue: null }
  ) {
    url(width: $width, height: $height)
    altText
  }
`;

type Props = {
  image: ImageFragment$key;
  className?: string;
};

export default function Image({ image, className }: Props): React.ReactElement {
  const data = useFragment(ImageFragment, image);

  if (data == null) {
    return null;
  }

  return (
    <img
      key={data.url}
      src={data.url}
      alt={data.altText}
      className={className}
    />
  );
}
