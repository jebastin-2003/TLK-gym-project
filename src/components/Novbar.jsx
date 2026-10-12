import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero', active: true },
    { label: 'Facility', href: '#about' },
    { label: 'Programs', href: '#modalities' },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Calculate BMI', href: '#calculator' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header id="navbar" className="fixed top-0 left-0 w-full z-50 bg-[#051424]/85 backdrop-blur-md border-b border-white/10 transition-all duration-300 py-5">
      <div className="max-w-[1360px] mx-auto px-5 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="w-2.5 h-8 bg-[#C3F400] skew-x-[-18deg] group-hover:scale-y-110 transition-transform"></span>
          <span className="font-bebas text-3xl md:text-4xl tracking-wider text-white">TLK</span>
          <span className="bg-[#C3F400]/10 border border-[#C3F400]/30 text-[#C3F400] font-bold text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full">
            ATX
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0d1c2d]/80 p-1.5 rounded-full border border-white/5">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all ${
                link.active
                  ? 'text-[#C3F400] bg-[#122131]'
                  : 'text-[#D4E4FA] hover:text-[#C3F400]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Header Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="bg-[#C3F400] text-[#161E00] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg flex items-center gap-2 shadow-[0_0_25px_rgba(195,244,0,0.3)] hover:shadow-[0_0_35px_rgba(195,244,0,0.5)] hover:-translate-y-0.5 transition-all"
          >
            <span>Join Now</span>
            <span className="material-symbols-outlined text-sm">bolt</span>
          </a>
          <div className="w-10 h-10 rounded-full bg-[#1c2b3c] border border-white/10 flex items-center justify-center text-[#C3F400] font-bold text-xs">
            TLK
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#051424] border-b border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-bold uppercase tracking-wider ${
                link.active ? 'text-[#C3F400]' : 'text-[#D4E4FA]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-[#C3F400] text-[#161E00] font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-lg"
          >
            Join Now
          </a>
        </div>
      )}
    </header>
  );
}