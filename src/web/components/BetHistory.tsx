"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHorse } from "@fortawesome/free-solid-svg-icons";

const choiceName = ["Alice", "Bob", "Charlie", "Dave"];

const sampleBetHistory = [
  {
    id: 1,
    choice: 1,
  },
  {
    id: 2,
    choice: 2,
  },
  {
    id: 3,
    choice: 1,
  },
  {
    id: 4,
    choice: 2,
  },
  {
    id: 5,
    choice: 3,
  },
  {
    id: 6,
    choice: 4,
  },
  {
    id: 7,
    choice: 2,
  },
  {
    id: 8,
    choice: 3,
  },
];

export const BetHistory = () => {
  const [betHistory, setBetHistory] = useState(sampleBetHistory);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
        {betHistory.map((bet) => (
          <div key={bet.id} className="py-2 border-t border-gray-300 w-2/3">
            <div className="text-gray-500 text-sm flex justify-between items-center w-full">
              <p
                className={`${
                  bet.choice === 1
                    ? "text-choice-1"
                    : bet.choice === 2
                    ? "text-choice-2"
                    : bet.choice === 3
                    ? "text-choice-3"
                    : bet.choice === 4
                    ? "text-choice-4"
                    : ""
                }`}
              >
                <FontAwesomeIcon icon={faHorse} className="h-5 w-5" />
              </p>
              <p className="text-text-secondary">
                {choiceName[bet.choice - 1]}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};