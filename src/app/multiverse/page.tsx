"use client";

import dynamic from "next/dynamic";

// Load the 3D scene only on the client
const MultiverseScene = dynamic(
  () => import("@/components/cosmic/MultiverseScene"),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen w-screen bg-black text-white flex items-center justify-center">
        🪐 Loading the multiverse...
      </div>
    ),
  }
);

export default function MultiversePage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      <MultiverseScene />
    </div>
  );
}
