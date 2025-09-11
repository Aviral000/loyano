"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {

  const handleGetStarted = () => {
    console.log("Get Started");
  }

  return (
    <section className="px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight">LOYANO – Home</h1>
      <p className="mt-3 text-base md:text-lg text-gray-600">Welcome to the Wearables frontend container app.</p>
      <div className="mt-6 flex gap-3">
        <Button onClick={handleGetStarted}>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </section>
  );
} 