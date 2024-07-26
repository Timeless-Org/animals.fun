"use client";

import { useState, useEffect } from "react";

export const Timer = () => {
  const [raceStartsIn, setRaceStartsIn] = useState(3600);
  const [raceEndsIn, setRaceEndsIn] = useState(3600);
  const [isRaceStarted, setIsRaceStarted] = useState(false);

  useEffect(() => {
    if (raceStartsIn > 0) {
      const startInterval = setInterval(() => {
        setRaceStartsIn((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            clearInterval(startInterval);
            setIsRaceStarted(true);
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(startInterval);
    }
  }, [raceStartsIn]);

  useEffect(() => {
    if (isRaceStarted && raceEndsIn > 0) {
      const endInterval = setInterval(() => {
        setRaceEndsIn((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            clearInterval(endInterval);
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(endInterval);
    }
  }, [isRaceStarted, raceEndsIn]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-text-secondary text-white py-4 px-10 rounded-lg">
      <p className="text-2xl font-semibold text-bg-main">
        Place your bets, race starts in {formatTime(raceStartsIn)}
      </p>
      {/* <p className="text-2xl font-semibold text-bg-main">
        Race ends in {formatTime(raceEndsIn)}
      </p> */}
    </div>
  );
};
