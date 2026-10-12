import React, { useState } from 'react';

const coachesData = [
  {
    id: 'coach-1',
    name: 'MARCUS "VANCE" STERLING',
    title: 'HEAD OF S&C',
    credentials: 'CSCS, USAW Level 2, M.S. Kinesiology',
    bio: 'Former D1 strength coach specializing in maximal power output, bar-path trajectory, and biomechanical efficiency.',
    handle: '@vance_tlkatx',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    tagColor: 'text-[#C3F400] border-[#C3F400]/30',
  },
  {
    id: 'coach-2',
    name: 'ELENA ROSTOVA',
    title: 'LEAD METCON COACH',
    credentials: 'CSCS, CrossFit L3, EXOS Specialist',
    bio: 'Metabolic engine developer focused on Zone 5 aerobic threshold expansion and contrast recovery protocols.',
    handle: '@elena_rostova_atx',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop',
    tagColor: 'text-[#00EEFC] border-[#00EEFC]/30',
  },
  {
    id: 'coach-3',
    name: 'JAXSON "APEX" COLE',
    title: 'COMBAT & AGILITY',
    credentials: 'Golden Gloves Champ, BJJ Black Belt',
    bio: 'Striking specialist training rotational torque, explosive footwork speed, and high-intensity fight cardio.',
    handle: '@apex_cole',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    tagColor: 'text-[#FF3366] border-[#FF3366]/30',
  },
];

export default function CoachesSection() {
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOpenModal = (coach) => {
    setSelectedCoach(coach);
    setIsModalOpen(true);
    setSubmitted(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCoach(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleCloseModal();
    }, 2000);
  };

  return (
    <section id="coaches" class="py-24 bg-[#0d1c2d] border-t border-white/5 relative">
      <div class="max-w-[1360px] mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div class="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span class="text-xs font-bold uppercase tracking-widest text-[#C3F400] bg-[#C3F400]/10 px-3.5 py-1.5 rounded-full border border-[#C3F400]/20 inline-block">
            WORLD-CLASS LEADERSHIP
          </span>
          <h2 class="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
            FACULTY OF STRENGTH
          </h2>
          <p class="text-[#94A3B8] text-base">
            Every TLK coach holds a degree in Kinesiology or CSCS certification. Zero weekend passes.
          </p>
        </div>

        {/* Coaches Grid */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coachesData.map((coach) => (
            <div
              key={coach.id}
              class="bg-[#122131] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div>
                {/* Photo & Badge */}
                <div class="h-80 relative overflow-hidden group">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#122131] via-transparent to-transparent opacity-60"></div>
                  <div
                    class={`absolute bottom-4 left-4 bg-[#051424]/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider ${coach.tagColor}`}
                  >
                    {coach.title}
                  </div>
                </div>

                {/* Info Block */}
                <div class="p-6 space-y-3">
                  <h3 class="font-bebas text-3xl text-white tracking-wide">
                    {coach.name}
                  </h3>
                  <p class="text-xs font-bold text-[#00EEFC] uppercase tracking-wider">
                    {coach.credentials}
                  </p>
                  <p class="text-[#94A3B8] text-sm leading-relaxed">
                    {coach.bio}
                  </p>
                  <p class="text-xs font-bold text-[#D4E4FA] opacity-70 pt-1">
                    {coach.handle}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div class="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => handleOpenModal(coach)}
                  class="w-full py-3.5 bg-[#1c2b3c] hover:bg-[#C3F400] hover:text-[#161E00] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg text-center block transition-all duration-300 cursor-pointer"
                >
                  Book 1-on-1 Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Modal */}
      {isModalOpen && selectedCoach && (
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div class="bg-[#122131] border border-white/15 rounded-2xl p-6 md:p-8 max-w-lg w-full relative space-y-6 shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseModal}
              class="absolute top-4 right-4 text-[#94A3B8] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <span class="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Modal Content */}
            {submitted ? (
              <div class="text-center py-8 space-y-4">
                <span class="material-symbols-outlined text-5xl text-[#C3F400]">
                  check_circle
                </span>
                <h4 class="font-bebas text-3xl text-white">REQUEST RECEIVED</h4>
                <p class="text-sm text-[#94A3B8]">
                  {selectedCoach.name} will review your profile and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-widest text-[#00EEFC]">
                    PRIVATE CONSULTATION
                  </span>
                  <h3 class="font-bebas text-3xl text-white mt-1">
                    BOOK WITH {selectedCoach.name}
                  </h3>
                  <p class="text-xs text-[#94A3B8]">
                    {selectedCoach.title} • {selectedCoach.credentials}
                  </p>
                </div>

                <form onSubmit={handleSubmit} class="space-y-4">
                  <div>
                    <label class="block text-xs font-bold uppercase text-[#94A3B8] mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      class="w-full bg-[#0d1c2d] border border-white/10 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-[#C3F400]"
                    />
                  </div>

                  <div>
                    <label class="block text-xs font-bold uppercase text-[#94A3B8] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      class="w-full bg-[#0d1c2d] border border-white/10 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-[#C3F400]"
                    />
                  </div>

                  <div>
                    <label class="block text-xs font-bold uppercase text-[#94A3B8] mb-1.5">
                      Primary Goal
                    </label>
                    <select class="w-full bg-[#0d1c2d] border border-white/10 rounded-lg p-3 text-white text-sm focus:outline-none focus:border-[#C3F400]">
                      <option>Max Strength / Powerlifting</option>
                      <option>Aerobic / Zone 5 Expansion</option>
                      <option>Striking & Agility</option>
                      <option>Injury Rehab & Biometrics</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    class="w-full py-4 bg-[#C3F400] text-[#161E00] font-black text-xs uppercase tracking-wider rounded-lg btn-primary-glow cursor-pointer transition-all"
                  >
                    Confirm Booking Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}