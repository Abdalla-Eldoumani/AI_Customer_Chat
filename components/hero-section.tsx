"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";

const HeroSection = () => {
  const { isSignedIn } = useAuth();

  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-4">
        Revolutionize Your Customer Support with AI
      </h1>
      <p className="text-lg mb-8">
        Our AI chat support offers 24/7 assistance, ensuring your customers are
        always satisfied.
      </p>
      {isSignedIn ? (
        <Link href="/chatPage">
          <Button variant="secondary">Go to Chat</Button>
        </Link>
      ) : (
        <Link href="/sign-up">
          <Button variant="secondary">Get Started for Free</Button>
        </Link>
      )}
    </section>
  );
};

export default HeroSection;
