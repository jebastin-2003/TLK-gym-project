import React from 'react';

export default function AboutSection() {
  const highlights = [
    'Calibrated Eleiko competition plates & Texas Power Bars',
    'Custom sprint turf tracks & Woodway curve treadmills',
    'Dedicated contrast recovery suite with 38°F plunges',
    'DEXA body composition & biometric telemetry',
  ];

  return (
    <section id="about" className="py-24 bg-[#051424] relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Brand Story */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00EEFC] bg-[#00EEFC]/10 px-3.5 py-1.5 rounded-full border border-[#00EEFC]/20">
              THE ATX STANDARD
            </span>

            <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide leading-tight">
              BUILT FOR THOSE WHO DISDAIN MEDIOCRITY
            </h2>

            <p className="text-[#D4E4FA]/80 text-base leading-relaxed">
              TLK ATX isn’t a social club with dumbbells. It is an unapologetic, biomechanically superior strength sanctuary in the heart of downtown Austin. Engineered for competitive lifters, hybrid endurance athletes, and high-performers.
            </p>

            <ul className="space-y-3 pt-2">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-white font-medium">
                  <span className="material-symbols-outlined text-[#C3F400]">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Facility Imagery */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#122131]">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop"
                alt="TLK Facility Floor"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051424] via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#122131]/70 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-[#C3F400]">fitness_center</span>
                  <div>
                    <h4 className="font-bebas text-xl text-white">16 OLYMPIC PLATFORMS</h4>
                    <p className="text-xs text-[#94A3B8]">Full rubber drop zones</p>
                  </div>
                </div>

                <div className="bg-[#122131]/70 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-[#00EEFC]">thermostat</span>
                  <div>
                    <h4 className="font-bebas text-xl text-white">CONTRAST SUITE</h4>
                    <p className="text-xs text-[#94A3B8]">Sauna & Cold Plunges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}