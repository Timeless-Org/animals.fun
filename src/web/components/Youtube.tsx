"use client";

import YouTube from "react-youtube";
import { Timer } from "./Timer";

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
    <div className="relative overflow-hidden">
      <YouTube videoId="ydYDqZQpim8" opts={opts} />
      <div className="absolute bottom-12 left-4">
        <Timer />
      </div>
    </div>
  );
};
