"use client";

import { Navigation } from "./Navigation";
import Image from "next/image";
import { useAccount, useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

export const Header = () => {
  const { isConnected, address } = useAccount();
  const { connect } = useConnect();
  return (
    <div className="w-full flex justify-between items-center">
      <Image src="/static/img/logo.png" width={120} height={120} alt="logo" />
      <Navigation />
      <div>
        {isConnected ? (
          <p className="text-text-main">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
        ) : (
          <button
            onClick={() => connect({ connector: injected() })}
            className="text-btn-text-main bg-btn-main rounded-md px-4 py-2"
          >
            Connect
          </button>
        )}
      </div>
    </div>
  );
};
