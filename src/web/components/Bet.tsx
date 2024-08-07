"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHorse, faCrow } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import BetModal from "@/components/Modal/BetModal";

const sampleBet = [
  {
    choice: 1,
    name: "Oryx/Bird only",
  },
  {
    choice: 2,
    name: "Ostrich",
  },
  {
    choice: 3,
    name: "Zebra",
  },
  {
    choice: 4,
    name: "Boar",
  },
];

export const Bet = () => {
  const [bet, setBet] = useState(sampleBet);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [elements, setElements] = useState<JSX.Element[]>([]);
  const [choice, setChoice] = useState<number>(0);

  const generateRandomAddress = () => {
    return [...Array(40)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");
  };

  const generateRandomValue = () => {
    const values = [
      0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.2, 0.3, 0.4,
      0.5, 0.6, 0.7, 0.8, 0.9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ];
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
  };

  useEffect(() => {
    const newElements = [];
    for (let i = 0; i < 5; i++) {
      newElements.push(
        <div
          key={i}
          className="flex items-center justify-start text-text-main text-sm w-36"
        >
          <p className="mr-2 w-1/2">
            0x{generateRandomAddress().slice(0, 6)}...
          </p>
          <div className="flex space-x-1 w-1/2 ml-3">
            <FontAwesomeIcon icon={faEthereum} />
            <p className="text-text-main">{generateRandomValue()}</p>
          </div>
        </div>
      );
    }
    setElements(newElements);
  }, []);

  const openModal = (choice: number) => {
    setChoice(choice);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-between w-full h-full space-x-4">
      <BetModal isOpen={isModalOpen} closeModal={closeModal} choice={choice} />
      {bet.map((bet) => (
        <div
          key={bet.choice}
          className="flex flex-col items-center justify-center w-1/4 space-y-5"
        >
          <p className="text-text-main font-bold text-xl">{bet.name}</p>
          <div className="h-36 flex items-center justify-center">
            {bet.choice === 1 && (
              <Image
                src="/static/img/bird.png"
                alt="oryx"
                width={130}
                height={130}
              />
            )}
            {bet.choice === 2 && (
              <Image
                src="/static/img/ostrich.png"
                alt="ostrich"
                width={130}
                height={130}
              />
            )}
            {bet.choice === 3 && (
              <Image
                src="/static/img/zebra.png"
                alt="zebra"
                width={130}
                height={130}
              />
            )}
            {bet.choice === 4 && (
              <Image
                src="/static/img/boar.png"
                alt="boar"
                width={130}
                height={130}
              />
            )}
          </div>
          <button
            className="text-btn-text-main bg-btn-main py-1 px-4 rounded-md"
            onClick={() => openModal(bet.choice)}
          >
            Bet
          </button>
          <div className="flex flex-col items-center justify-center w-full border py-3 rounded-md">
            {elements}
          </div>
        </div>
      ))}
    </div>
  );
};
