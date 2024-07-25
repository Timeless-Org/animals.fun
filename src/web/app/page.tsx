import Image from "next/image";
import { Header } from "@/components/Header";
import { Youtube } from "@/components/Youtube";
import { Comment } from "@/components/Comment";
import { BetHistory } from "@/components/BetHistory";
import { Bet } from "@/components/Bet";
import { Timer } from "@/components/Timer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-bg-main">
      <Header />
      <div className="flex items-center justify-center mt-12 h-[600px] space-x-3">
        <Youtube />
        <Comment />
      </div>
      <div className="flex items-center justify-center mt-12">
        <Timer />
      </div>
      <div className="flex items-start justify-center mt-12 space-x-3 w-full">
        <div className="w-1/6">
          <BetHistory />
        </div>
        <div className="w-4/6">
          <Bet />
        </div>
      </div>
    </main>
  );
}
