import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrendingSection } from "@/components/trending-section";
import { TopCreators } from "@/components/top-creators";
import { BrowseCategories } from "@/components/browse-categories";
import { HowItWorks } from "@/components/how-it-works";
import { FooterNewsletter } from "@/components/footer-newsletter";
import { Footer } from "@/components/footer";

// App.tsx
import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana/react";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

// 1. Get projectId from https://cloud.reown.com
const projectId = "703fc127537a16642363da5b5a062278";

// 2. Create a metadata object - optional
const metadata = {
  name: "Solnify",
  description: "NFT Marketplace",
  url: "https://solnify.vercel.app/", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 3. Create modal
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    analytics: true,
  },
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />
      <Hero />
      <TrendingSection />
      <TopCreators />
      <BrowseCategories />
      <HowItWorks />
      <FooterNewsletter />
      <Footer />
    </main>
  );
}
