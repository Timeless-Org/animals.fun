"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const [bedAmount, setBedAmount] = useState<number>(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-bg-main p-8 rounded-lg">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-text-main">Bed</h2>
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
          value={bedAmount}
          onChange={(e) => setBedAmount(Number(e.target.value))}
          className="flex-1 p-2 border-2 border-bg-secondary mr-2 outline-none bg-bg-secondary text-text-secondary"
          placeholder="message"
        />
        <button
          onClick={closeModal}
          className="text-btn-text-main bg-btn-main py-2 px-4 rounded-md"
        >
          Bed
        </button>
      </div>
    </div>
  );
};

export default Modal;
