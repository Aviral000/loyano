export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient background blurs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-rose-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      
      {/* Italian Fabric Showcase - Men's Collection */}
      <div className="absolute top-1/6 right-1/8 transform translate-x-24 -translate-y-8">
        {/* Premium Italian Linen Fabric Display */}
        <div id="mens-fabric" className="relative w-56 h-72 transform rotate-6 animate-float">
          {/* Main fabric panel with 3D depth */}
          <div className="absolute inset-0 rounded-3xl shadow-2xl transform rotate-2 translate-z-8 overflow-hidden" 
               style={{transform: 'rotateX(15deg) rotateY(30deg) translateZ(25px)'}}>
            <img 
              src="/images/italian-linen-fabric.jpeg" 
              alt="Premium Italian Linen Fabric"
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-800/10 to-slate-900/20"></div>
            {/* Fabric texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-200/5 to-transparent"></div>
          </div>
          
          {/* Back layer for depth */}
          <div className="absolute inset-0 rounded-3xl shadow-xl transform -rotate-2 -translate-z-8" 
               style={{transform: 'rotateX(12deg) rotateY(25deg) translateZ(-12px)'}}>
            <div className="w-full h-full bg-gradient-to-br from-slate-800/40 to-slate-900/50 rounded-3xl"></div>
          </div>
          
          {/* Luxury accent border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-amber-400/30" 
               style={{transform: 'rotateX(12deg) rotateY(25deg)'}}>
          </div>
        </div>
        
        {/* Floating Italian Craftsmanship Badge */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-amber-500/95 to-orange-600/95 rounded-full shadow-2xl animate-spin-slow transform rotate-45 flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
          <div className="w-14 h-14 bg-white/25 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/90 rounded-full"></div>
          </div>
        </div>
        
        {/* Fabric quality indicator */}
        <div className="absolute top-8 -left-12 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
          <span className="text-xs font-semibold text-amber-800">100% ITALIAN LINEN</span>
        </div>
        
        {/* Premium quality indicators */}
        <div className="absolute top-24 -left-10 w-5 h-5 bg-amber-400/80 rounded-full animate-pulse shadow-lg border-2 border-white/50"></div>
        <div className="absolute -bottom-4 right-16 w-4 h-4 bg-orange-400/80 rounded-full animate-pulse delay-1000 shadow-lg border-2 border-white/50"></div>
        <div className="absolute top-16 -right-16 w-4.5 h-4.5 bg-amber-300/80 rounded-full animate-pulse delay-500 shadow-lg border-2 border-white/50"></div>
      </div>
      
      {/* Italian Fabric Showcase - Women's Collection */}
      <div className="absolute bottom-5/13 right-1/16 transform -translate-x-16 translate-y-28">
        <div id="womens-fabric" className="relative w-48 h-64 transform -rotate-8 animate-float-delayed">
          {/* Main fabric panel with 3D depth */}
          <div className="absolute inset-0 rounded-3xl shadow-2xl transform rotate-3 translate-z-6 overflow-hidden" 
               style={{transform: 'rotateX(-20deg) rotateY(-35deg) translateZ(20px)'}}>
            <img 
              src="/images/italian-women-fabric.webp" 
              alt="Premium Italian Women's Fabric"
              className="w-full h-full object-cover scale-110"
            />
          </div>
          
          {/* Luxury accent border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-rose-400/30" 
               style={{transform: 'rotateX(-18deg) rotateY(-30deg)'}}></div>
        </div>
        
        {/* Fabric quality indicator */}
        <div className="absolute top-6 -right-16 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
          <span className="text-xs font-semibold text-rose-800">PREMIUM SILK</span>
        </div>
        
        {/* Elegant floating elements */}
        <div className="absolute -top-6 -left-6 w-3 h-3 bg-rose-400/70 rounded-full animate-pulse shadow-lg border border-white/50"></div>
        <div className="absolute -bottom-2 -right-8 w-2.5 h-2.5 bg-pink-400/70 rounded-full animate-pulse delay-700 shadow-lg border border-white/50"></div>
      </div>
      
      {/* Sophisticated geometric patterns */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-amber-300/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border border-rose-300/20 rounded-full animate-pulse delay-1000"></div>
    </div>
  );
}
