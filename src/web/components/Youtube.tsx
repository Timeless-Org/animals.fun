"use client";

import YouTube from "react-youtube";

export const Youtube = () => {
    const opts = {
      height: "600",
      width: "800",
      playerVars: {
        autoplay: 1,
        mute: 1,
        rel: 0,
      },
    };
  return (
    <YouTube videoId="ydYDqZQpim8" opts={opts} />
  );
};
