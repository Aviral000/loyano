"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import HeroFeatures from "@/components/hero/HeroFeatures";

export default function HeroContent() {
  const handleGetStarted = () => {
    console.log("Get Started");
  }

  const handleExplore = () => {
    console.log("Explore Collection");
  }

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
      {/* Brand badge */}
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm border border-amber-200/60 shadow-lg mb-8">
        <Sparkles className="w-5 h-5 text-amber-600" />
        <span className="text-sm font-semibold text-amber-800 tracking-wide">MADE IN ITALY • PREMIUM CRAFTSMANSHIP</span>
      </div>

      {/* Main headline */}
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8">
        <span className="bg-gradient-to-r from-slate-900 via-amber-800 to-slate-900 bg-clip-text text-transparent">
          LOYANO
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-600 mb-4 max-w-5xl mx-auto leading-relaxed">
        Where Italian artistry meets
      </p>
      <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 mb-8 max-w-5xl mx-auto">
        precision engineering
      </p>

      {/* Description */}
      <p className="text-xl md:text-2xl text-slate-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
        Beyond fashion. Beyond technology. LOYANO defines a new standard of excellence, 
        where every thread tells a story of Italian mastery and every innovation serves beauty.
      </p>

      {/* Call to action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <Button 
          size="lg" 
          onClick={handleGetStarted}
          className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          Explore Collection
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button
          id="discover-more"
          variant="outline" 
          size="lg"
          onClick={handleExplore}
          className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-8 py-4 text-lg font-semibold bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
        >
          <Heart className="mr-2 w-5 h-5" />
          Discover More
        </Button>
      </div>

      {/* Feature highlights */}
      <HeroFeatures />
    </div>
  );
}
