"use client";

import { solanaWeb3JsAdapter, projectId, networks } from "@/config";
import { createAppKit } from "@reown/appkit/react";
import React, { type ReactNode } from "react";

// Set up metadata
const metadata = {
  name: "solnify",
  description:
    "A next-gen NFT marketplace on Solana, offering fast, low-cost transactions and seamless NFT trading. Powered by Reown AppKit, Solnify ensures secure, trustless ownership transfers while enhancing user experience with a smooth and intuitive interface. Whether you're minting, buying, or selling, Solnify makes NFT trading effortless.",
  url: "https://solnify.vercel.app/",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// Create the modal
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  projectId,
  networks,
  metadata,
  themeMode: "dark",
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
  themeVariables: {
    "--w3m-accent": "#000000",
  },
});

function ContextProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default ContextProvider;
