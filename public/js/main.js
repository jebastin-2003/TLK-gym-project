/**
 * IRONPULSE ATX - Dynamic Client Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollHeader();
  initStatCounters();
  initPricingToggle();
  initScheduleSystem();
  initBmiCalculator();
  initFaqAccordion();
  initContactForm();
  initSmoothScroll();
});

/* Mobile Menu Control */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

/* Translucent Nav Scroll Effect */
function initScrollHeader() {
  const header = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('py-3');
      header.classList.remove('py-5');
    } else {
      header.classList.add('py-5');
      header.classList.remove('py-3');
    }
  });
}

/* Smooth Scroll & Active Nav Highlight */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-[#C3F400]', 'bg-[#122131]');
      link.classList.add('text-[#D4E4FA]');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-[#C3F400]', 'bg-[#122131]');
        link.classList.remove('text-[#D4E4FA]');
      }
    });
  });
}

/* Stat Counter Animation */
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1800;
          const step = Math.ceil(target / (duration / 16));
          let current = 0;

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.innerText = target.toLocaleString();
              clearInterval(timer);
            } else {
              counter.innerText = current.toLocaleString();
            }
          }, 16);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats-bar');
  if (statsSection) observer.observe(statsSection);
}

/* Pricing Monthly/Yearly Toggle */
function initPricingToggle() {
  const toggle = document.getElementById('pricing-toggle');
  const basicPrice = document.getElementById('price-basic');
  const proPrice = document.getElementById('price-pro');
  const vipPrice = document.getElementById('price-vip');
  const periodTexts = document.querySelectorAll('.price-period');

  if (!toggle) return;

  toggle.addEventListener('change', () => {
    const isYearly = toggle.checked;
    if (isYearly) {
      basicPrice.innerText = '$47';
      proPrice.innerText = '$79';
      vipPrice.innerText = '$127';
      periodTexts.forEach(p => p.innerText = '/mo (billed annually)');
    } else {
      basicPrice.innerText = '$59';
      proPrice.innerText = '$99';
      vipPrice.innerText = '$159';
      periodTexts.forEach(p => p.innerText = '/month');
    }
  });
}

/* Weekly Class Schedule Renderer */
function initScheduleSystem() {
  const container = document.getElementById('schedule-rows');
  const pills = document.querySelectorAll('.schedule-pill');
  if (!container || typeof SCHEDULE_DATA === 'undefined') return;

  function renderDay(dayCode) {
    const filtered = SCHEDULE_DATA.filter(item => item.day === dayCode);
    container.innerHTML = '';

    if (filtered.length === 0) {
      container.innerHTML = `<div class="p-8 text-center text-[#94A3B8]">No sessions scheduled for this day.</div>`;
      return;
    }

    filtered.forEach(session => {
      const row = document.createElement('div');
      row.className = 'grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-5 rounded-xl border border-white/5 bg-[#0d1c2d] hover:bg-[#1c2b3c] transition-all duration-200';

      const spotsBadge = session.spots > 0 
        ? `<span class="text-xs font-bold text-[#C3F400] bg-[#C3F400]/10 px-2.5 py-1 rounded-full border border-[#C3F400]/20">${session.spots} SPOTS LEFT</span>`
        : `<span class="text-xs font-bold text-[#FF3366] bg-[#FF3366]/10 px-2.5 py-1 rounded-full border border-[#FF3366]/20">WAITLIST ONLY</span>`;

      row.innerHTML = `
        <div class="md:col-span-3 text-sm font-semibold text-[#94A3B8] flex items-center gap-2">
          <span class="material-symbols-outlined text-base text-[#00EEFC]">schedule</span>
          ${session.time}
        </div>
        <div class="md:col-span-4">
          <h4 class="font-bebas text-2xl text-white tracking-wide">${session.name}</h4>
          <p class="text-xs text-[#94A3B8]">Coach: <span class="text-[#D4E4FA]">${session.coach}</span></p>
        </div>
        <div class="md:col-span-2 flex items-center">
          <span class="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#122131] text-[#00EEFC] border border-[#00EEFC]/20">
            ${session.intensity}
          </span>
        </div>
        <div class="md:col-span-3 flex items-center justify-between md:justify-end gap-4">
          ${spotsBadge}
          <button onclick="alert('Session booked for ${session.name}!')" class="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#C3F400] text-[#161E00] hover:scale-105 transition-all">
            Book
          </button>
        </div>
      `;
      container.appendChild(row);
    });
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => {
        p.classList.remove('bg-[#C3F400]', 'text-[#161E00]');
        p.classList.add('bg-[#122131]', 'text-[#D4E4FA]', 'hover:bg-[#1c2b3c]');
      });
      pill.classList.remove('bg-[#122131]', 'text-[#D4E4FA]', 'hover:bg-[#1c2b3c]');
      pill.classList.add('bg-[#C3F400]', 'text-[#161E00]');
      renderDay(pill.getAttribute('data-day'));
    });
  });

  // Default to Monday
  renderDay('mon');
}

/* BMI & Training Prescription Calculator */
function initBmiCalculator() {
  const form = document.getElementById('bmi-form');
  const unitToggle = document.getElementById('unit-switcher');
  const heightInput = document.getElementById('calc-height');
  const weightInput = document.getElementById('calc-weight');
  const heightLabel = document.getElementById('height-unit-label');
  const weightLabel = document.getElementById('weight-unit-label');
  const resultCard = document.getElementById('bmi-result-card');

  if (!form) return;

  let unitSystem = 'imperial'; // 'imperial' or 'metric'

  unitToggle.addEventListener('change', () => {
    unitSystem = unitToggle.checked ? 'metric' : 'imperial';
    if (unitSystem === 'metric') {
      heightLabel.innerText = 'HEIGHT (CM)';
      weightLabel.innerText = 'WEIGHT (KG)';
      heightInput.placeholder = '180';
      weightInput.placeholder = '80';
    } else {
      heightLabel.innerText = 'HEIGHT (INCHES)';
      weightLabel.innerText = 'WEIGHT (LBS)';
      heightInput.placeholder = '71';
      weightInput.placeholder = '175';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const h = parseFloat(heightInput.value);
    const w = parseFloat(weightInput.value);

    if (!h || !w || h <= 0 || w <= 0) {
      alert('Please enter valid positive numbers for height and weight.');
      return;
    }

    let bmi = 0;
    if (unitSystem === 'imperial') {
      bmi = (w / (h * h)) * 703;
    } else {
      const heightInMeters = h / 100;
      bmi = w / (heightInMeters * heightInMeters);
    }

    bmi = parseFloat(bmi.toFixed(1));

    let category = '';
    let track = '';
    let description = '';
    let meterPercentage = 0;

    if (bmi < 18.5) {
      category = 'Underweight';
      track = 'Hypertrophy & Strength Foundation';
      description = 'Focus on high-volume powerlifting compounds and strategic protein surplus.';
      meterPercentage = 20;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Optimal Athletic Range';
      track = 'Peak MetCon & Powerlifting Fusion';
      description = 'Ideal athletic baseline. Recommended track: Advanced MetCon + Contrast Recovery.';
      meterPercentage = 50;
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      category = 'Overweight / Muscular Mass';
      track = 'Zone 4 Fat Re-partitioning & Conditioning';
      description = 'High output conditioning combined with DEXA-guided nutrition plans.';
      meterPercentage = 75;
    } else {
      category = 'High Density';
      track = 'Metabolic Engine Reboot';
      description = 'Low-impact high-caloric burn, boxing mechanics, and joint mobility protocol.';
      meterPercentage = 95;
    }

    // Display Results
    document.getElementById('res-score').innerText = bmi;
    document.getElementById('res-category').innerText = category;
    document.getElementById('res-track').innerText = track;
    document.getElementById('res-desc').innerText = description;
    document.getElementById('meter-bar').style.width = `${Math.min(meterPercentage, 100)}%`;

    resultCard.classList.remove('hidden');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

/* Dynamic FAQ Accordion */
function initFaqAccordion() {
  const container = document.getElementById('faq-container');
  if (!container || typeof FAQ_DATA === 'undefined') return;

  container.innerHTML = '';
  FAQ_DATA.forEach((item, index) => {
    const faqEl = document.createElement('div');
    faqEl.className = 'faq-item rounded-2xl bg-[#122131] border border-white/5 overflow-hidden transition-all duration-200';
    faqEl.innerHTML = `
      <button class="w-full text-left p-6 flex justify-between items-center gap-4 text-white font-bebas text-xl md:text-2xl tracking-wide focus:outline-none">
        <span>${item.q}</span>
        <span class="material-symbols-outlined faq-chevron text-[#C3F400] transition-transform duration-300">expand_more</span>
      </button>
      <div class="faq-answer px-6 pb-6 text-[#94A3B8] text-sm md:text-base leading-relaxed">
        ${item.a}
      </div>
    `;

    faqEl.querySelector('button').addEventListener('click', () => {
      const isActive = faqEl.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
      if (!isActive) faqEl.classList.add('active');
    });

    container.appendChild(faqEl);
  });
}

/* Contact/Squadron Form Submission */
function initContactForm() {
  const form = document.getElementById('squadron-form');
  const responseMsg = document.getElementById('form-response');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      fullName: document.getElementById('lead-name').value,
      email: document.getElementById('lead-email').value,
      phone: document.getElementById('lead-phone').value,
      mainGoal: document.getElementById('lead-goal').value,
      trialConsent: document.getElementById('lead-consent').checked
    };

    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        responseMsg.className = 'p-4 rounded-xl bg-[#C3F400]/10 border border-[#C3F400]/30 text-[#C3F400] font-semibold text-sm';
        responseMsg.innerText = `⚡ SUCCESS: ${data.message}`;
        responseMsg.classList.remove('hidden');
        form.reset();
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      responseMsg.className = 'p-4 rounded-xl bg-[#FF3366]/10 border border-[#FF3366]/30 text-[#FF3366] font-semibold text-sm';
      responseMsg.innerText = `❌ ERROR: ${err.message || 'Submission failed. Try again.'}`;
      responseMsg.classList.remove('hidden');
    }
  });
}