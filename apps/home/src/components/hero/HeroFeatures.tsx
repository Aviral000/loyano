import { Sparkles, Heart, ArrowRight } from "lucide-react";

export default function HeroFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="text-center p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-amber-200/40 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">Italian Mastery</h3>
        <p className="text-slate-600 leading-relaxed">Centuries of artisan tradition meet modern precision. Every piece is a testament to Italian excellence.</p>
      </div>
      
      <div className="text-center p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-blue-200/40 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">Precision Engineering</h3>
        <p className="text-slate-600 leading-relaxed">Advanced technology seamlessly woven into luxurious fabrics. Innovation that serves beauty.</p>
      </div>
      
      <div className="text-center p-8 rounded-3xl bg-white/70 backdrop-blur-sm border border-rose-200/40 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <ArrowRight className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">Exclusive Heritage</h3>
        <p className="text-slate-600 leading-relaxed">Beyond fashion. Beyond technology. LOYANO defines a new standard of luxury and innovation.</p>
      </div>
    </div>
  );
}
