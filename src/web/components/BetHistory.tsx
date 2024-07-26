"use client";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHorse } from "@fortawesome/free-solid-svg-icons";

const choiceName = ["Oryx/Bird", "Ostrich", "Zebra", "Boar"];

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
          <div className="text-gray-400 text-sm flex justify-between items-center w-full">
            <p>
              {bet.choice === 1 && (
                <Image
                  src="/static/img/bird.png"
                  alt="oryx"
                  width={40}
                  height={40}
                />
              )}
              {bet.choice === 2 && (
                <Image
                  src="/static/img/ostrich.png"
                  alt="ostrich"
                  width={40}
                  height={40}
                />
              )}
              {bet.choice === 3 && (
                <Image
                  src="/static/img/zebra.png"
                  alt="zebra"
                  width={40}
                  height={40}
                />
              )}
              {bet.choice === 4 && (
                <Image
                  src="/static/img/boar.png"
                  alt="boar"
                  width={40}
                  height={40}
                />
              )}
            </p>
            <p className="text-text-secondary">{choiceName[bet.choice - 1]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
