import React, { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  const [counts, setCounts] = useState({ athletes: 0, coaches: 0, sqft: 0, guarantee: 0 });
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount('athletes', 2500, 2000);
          animateCount('coaches', 35, 1500);
          animateCount('sqft', 25000, 2000);
          animateCount('guarantee', 100, 1500);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCount = (key, target, duration) => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / (target / 50)));
    const timer = setInterval(() => {
      start += Math.ceil(target / 50);
      if (start >= target) {
        setCounts((prev) => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setCounts((prev) => ({ ...prev, [key]: start }));
      }
    }, stepTime);
  };

  return (
    <section id="hero" className="relative min-h-[920px] pt-32 pb-20 flex flex-col justify-between overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2000&auto=format&fit=crop"
          alt="Barbell athletes training in elite dark gym"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,20,36,0.3)_0%,rgba(5,20,36,0.95)_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 md:px-12 w-full my-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-3 bg-[#C3F400]/10 border border-[#C3F400]/30 px-4 py-2 rounded-full">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C3F400] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C3F400]">
              TLK • Unisex Fitness Zone
            </span>
          </div>

          <h1 className="font-bebas text-6xl sm:text-7xl lg:text-[84px] leading-[0.9] tracking-wider uppercase text-white">
            FORGE YOUR <br />
            <span className="text-[#C3F400] drop-shadow-[0_0_35px_rgba(195,244,0,0.35)]">
              STRONGEST SELF
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#D4E4FA]/90 font-normal leading-relaxed max-w-2xl">
            25,000 sq ft of industrial-grade strength gear, CSCS-certified coaching, Olympic weightlifting platforms, and contrast cold plunge recovery in downtown Austin.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="#contact"
              className="bg-[#C3F400] text-[#161E00] font-black text-sm uppercase tracking-wider px-8 py-4 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(195,244,0,0.3)] hover:shadow-[0_0_35px_rgba(195,244,0,0.5)] hover:-translate-y-0.5 transition-all"
            >
              <span>⚡ Start 7-Day Free Trial</span>
            </a>
            <a
              href="#pricing"
              className="bg-[#122131]/70 backdrop-blur-md border border-white/10 text-white hover:border-[#C3F400] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <span>View Membership Plans</span>
            </a>
          </div>
        </div>
      </div>

      {/* Glass Stats Bar */}
      <div ref={statsRef} id="stats-bar" className="relative z-10 max-w-[1360px] mx-auto px-5 md:px-12 w-full mt-12">
        <div className="bg-[#122131]/70 backdrop-blur-md rounded-2xl p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 border border-white/10">
          <div className="space-y-1">
            <div className="font-bebas text-4xl sm:text-5xl text-[#C3F400] tracking-wide flex items-center">
              <span>{counts.athletes}</span>+
            </div>
            <p class="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">Active ATX Athletes</p>
          </div>

          <div className="space-y-1 border-l border-white/10 pl-6">
            <div className="font-bebas text-4xl sm:text-5xl text-[#00EEFC] tracking-wide flex items-center">
              <span>{counts.coaches}</span>+
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">CSCS Olympic Coaches</p>
          </div>

          <div className="space-y-1 border-l border-white/10 pl-6">
            <div className="font-bebas text-4xl sm:text-5xl text-white tracking-wide flex items-center">
              <span>{counts.sqft}</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">SQ FT Industrial Floor</p>
          </div>

          <div className="space-y-1 border-l border-white/10 pl-6">
            <div className="font-bebas text-4xl sm:text-5xl text-[#C3F400] tracking-wide flex items-center">
              <span>{counts.guarantee}</span>%
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">Outcome Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}