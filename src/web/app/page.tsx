import Image from "next/image";
import { Header } from "@/components/Header";
import { Youtube } from "@/components/Youtube";
import { Comment } from "@/components/Comment";
import { BedHistory } from "@/components/BedHistory";
import { Bed } from "@/components/Bed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-bg-main">
      <Header />
      <div className="flex items-center justify-center mt-12 h-[600px] space-x-3">
        <Youtube />
        <Comment />
      </div>
      <div className="flex items-start justify-center mt-12 space-x-3 w-full">
        <div className="w-1/6">
          <BedHistory />
        </div>
        <div className="w-4/6">
          <Bed />
        </div>
      </div>
    </main>
  );
}
