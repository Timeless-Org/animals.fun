"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const sampleMessages = [
  {
    id: 1,
    text: "Good!",
    timestamp: "12:00",
    address: "0x9b84bb5b2bb8ba9806b48c0f537ca3742b30c573",
  },
  {
    id: 2,
    text: "Coming!It's coming!It's coming!",
    timestamp: "12:01",
    address: "0x51f9b8678fa6fab3768b5c8fc9299e7a44dc07be",
  },
  {
    id: 3,
    text: "www",
    timestamp: "12:02",
    address: "You",
  },
];

export const Comment = () => {
  const [messages, setMessages] = useState(sampleMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessage = {
      id: messages.length + 1,
      text: input,
      timestamp: "12:00",
      address: "You",
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="mb-4 p-2">
        {messages.map((message) => (
          <div key={message.id} className="py-2 border-t border-gray-300">
            <div className="text-gray-500 text-sm">
              {message.timestamp} - {message.address.slice(0, 16)}
              <span
                className={`${
                  message.address === "You" ? "text-text-main" : ""
                }`}
              >
                {message.address.length > 16 && "..."}
              </span>
            </div>
            <div className="text-text-secondary">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border-2 border-bg-secondary mr-2 outline-none bg-bg-secondary text-text-secondary"
          placeholder="message"
        />
        <button
          onClick={sendMessage}
          className="bg-btn-main text-btn-text-main px-2 pt-1 rounded-lg"
        >
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="h-5 w-5"
          />
        </button>
      </div>
    </div>
  );
};
