"use client";
import Image from "next/image";
import { useState } from "react"; // Import useState for state management
import { VerifyData } from "@/components/verifier";

export default function Home() {
  const [hashInput, setHashInput] = useState(""); // State for hashInput

  const handleInputChange = (event) => {
    setHashInput(event.target.value); // Update state on input change
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Input Field for Hash */}
      <input
        type="text"
        placeholder="Enter hash"
        value={hashInput}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded-md w-full max-w-md"
      />

      {/* Pass hashInput dynamically */}
      <VerifyData hash={hashInput} />
    </div>
  );
}
