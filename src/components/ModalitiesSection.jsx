import React from 'react';

export default function ModalitiesSection() {
  const modalities = [
    {
      icon: 'fitness_center',
      iconColor: 'text-[#C3F400]',
      tag: 'POWER & STRENGTH',
      title: 'POWERLIFTING',
      description: 'Squat, Bench, and Deadlift programming guided by competitive lifters. Periodized progressive overload.',
      spec: 'SPEC: HEAVY COMPOUND',
    },
    {
      icon: 'vital_signs',
      iconColor: 'text-[#00EEFC]',
      tag: 'METABOLIC ENGINE',
      title: 'HIIT & ZONE 5 METCON',
      description: 'Heart-rate tracked high-intensity intervals designed to maximize VO2 max and caloric afterburn.',
      spec: 'SPEC: ZONE 4 & 5 BURNOUT',
    },
    {
      icon: 'sports_gymnastics',
      iconColor: 'text-[#C3F400]',
      tag: 'HYBRID FITNESS',
      title: 'CROSSFIT & FUNCTIONAL',
      description: 'High-volume gymnastic pull-ups, barbell cycles, and plyometrics engineered for operational endurance.',
      spec: 'SPEC: FUNCTIONAL WAVES',
    },
    {
      icon: 'spa',
      iconColor: 'text-[#00EEFC]',
      tag: 'REGENERATION',
      title: 'RECOVERY & YOGA',
      description: 'Targeted mobility drills, myofascial release, and breathwork to unlock athletic range of motion.',
      spec: 'SPEC: MOBILITY & FLOW',
    },
    {
      icon: 'sports_mma',
      iconColor: 'text-[#FF3366]',
      tag: 'STRIKING & AGILITY',
      title: 'RHYTHM BOXING & STRIKE',
      description: 'Heavy bag work, mitt combos, and footwork drills combined into a pulse-pounding cardio output.',
      spec: 'SPEC: COMBAT CONDITIONING',
    },
    {
      icon: 'person_filled',
      iconColor: 'text-[#C3F400]',
      tag: 'CUSTOM HYPERTROPHY',
      title: '1-ON-1 ELITE COACHING',
      description: 'Bespoke strength programming, continuous video analysis, and custom nutrition protocols.',
      spec: 'SPEC: PRIVATE CONSULTATION',
    },
  ];

  return (
    <section id="modalities" className="py-24 bg-[#0d1c2d] border-y border-white/5">
      <div className="max-w-[1360px] mx-auto px-5 md:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C3F400] bg-[#C3F400]/10 px-3.5 py-1.5 rounded-full border border-[#C3F400]/20">
            TRAINING DISCIPLINES
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">PRECISION MODALITIES</h2>
          <p className="text-[#94A3B8] text-base">Engineered training tracks tailored for hyper-specific physical outcomes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modalities.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#122131] p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:-translate-y-1.5 hover:border-[#C3F400]/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-[#0d1c2d] border border-white/10 flex items-center justify-center ${item.iconColor}`}>
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <span className={`text-[11px] font-bold uppercase tracking-widest ${item.iconColor}`}>{item.tag}</span>
                <h3 className="font-bebas text-3xl text-white tracking-wide">{item.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-white">
                <span>{item.spec}</span>
                <span className={`material-symbols-outlined ${item.iconColor}`}>arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}