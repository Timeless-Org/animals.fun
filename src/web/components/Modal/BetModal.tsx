"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useWriteContract, useChains } from "wagmi";
import { CONTRACT_ADDRESS } from "@/lib/config";
import abi from "@/utils/abi/AnimalFun.json";
import { ethers } from "ethers";

const BetModal = ({
  isOpen,
  closeModal,
  choice,
}: {
  isOpen: boolean;
  closeModal: () => void;
  choice: number;
}) => {
  const { data: result, writeContractAsync } = useWriteContract();
  const [betAmount, setBetAmount] = useState<number>(0);

  const handleBet = async () => {
    const betAmountInWei = ethers.parseEther(betAmount.toString());
    await writeContractAsync({
      address: CONTRACT_ADDRESS,
      abi,
      functionName: "placeBet",
      args: [0, choice],
      value: betAmountInWei,
    });
  };

  useEffect(() => {
    console.log(result);
    if (result) {
      setBetAmount(0);
      closeModal();
    }
  }, [result]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-bg-main p-8 rounded-lg">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-text-main">Bet</h2>
          <button
            onClick={closeModal}
            className="flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-text-main w-6 h-6"
            />
          </button>
        </div>
        <input
          type="number"
          value={betAmount}
          onChange={(e) => setBetAmount(Number(e.target.value))}
          className="flex-1 p-2 border-2 border-bg-secondary mr-2 outline-none bg-bg-secondary text-text-secondary"
          placeholder="message"
        />
        <button
          onClick={handleBet}
          className="text-btn-text-main bg-btn-main py-2 px-4 rounded-md"
        >
          Bet
        </button>
      </div>
    </div>
  );
};

export default BetModal;
