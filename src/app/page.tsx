"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h1 className="text-9xl font-bold">GLORP IS EVERYWHERE</h1>
      <h1 className="text-9xl font-bold">ALL HAIL GLORP</h1>
            <button 
        className="cursor-pointer transform active:scale-90 transition-transform duration-100" 
        onClick={() => router.push("/everyone")}
      >
        <img src={"/glorp.webp"} className="h-[900px]"/>
      </button>
    </main>
  )
}
