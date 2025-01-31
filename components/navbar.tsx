"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAppKit } from "@reown/appkit/react";

export function Navbar() {
  const { open } = useAppKit();
  return (
    <nav className="flex items-center justify-between py-5 px-4 md:px-[50px]">
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold">Solnify</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="/marketplace"
          className="text-sm hover:text-purple-500 transition-colors"
        >
          Marketplace
        </Link>
        <Link
          href="/rankings"
          className="text-sm hover:text-purple-500 transition-colors"
        >
          Rankings
        </Link>
        <Link
          href="#"
          className="text-sm hover:text-purple-500 transition-colors"
        >
          Connect a wallet
        </Link>
        <Button
          className="bg-purple-600 hover:bg-purple-700"
          onClick={() => {
            console.log("working");
            open({ view: "Connect" });
          }}
        >
          Sign Up
        </Button>
      </div>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="right" className="bg-background text-white">
          <div className="flex flex-col gap-4 mt-8">
            <Link
              href="#"
              className="text-sm hover:text-purple-500 transition-colors"
            >
              Marketplace
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-purple-500 transition-colors"
            >
              Rankings
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-purple-500 transition-colors"
            >
              Connect a wallet
            </Link>
            <Button
              className="bg-red hover:bg-purple-700 w-full"
              onClick={() => {
                console.log("working");
                open({ view: "Networks" });
              }}
            >
              Sign Up
            </Button>
            {/* <appkit-button /> */}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
