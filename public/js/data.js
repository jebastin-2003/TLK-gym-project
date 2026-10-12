/**
 * IRONPULSE ATX - Static Datasets
 */

const SCHEDULE_DATA = [
  // MONDAY
  { day: 'mon', time: '05:30 AM - 06:30 AM', name: 'HYPERSTROKE METCON', coach: 'Elena Rostova', intensity: 'Zone 5 Peak', spots: 3 },
  { day: 'mon', time: '07:00 AM - 08:15 AM', name: 'OLYMPIC BARBELL CLUB', coach: 'Marcus Sterling', intensity: 'Heavy Strength', spots: 5 },
  { day: 'mon', time: '12:00 PM - 01:00 PM', name: 'RHYTHM STRIKE BOXING', coach: 'Jaxson Cole', intensity: 'Zone 4 Cardio', spots: 2 },
  { day: 'mon', time: '05:30 PM - 06:45 PM', name: 'POWERLIFTING TRIBE HUB', coach: 'Marcus Sterling', intensity: 'Max Effort', spots: 1 },
  { day: 'mon', time: '07:00 PM - 08:00 PM', name: 'CONTRAST RECOVERY & FLOW', coach: 'Elena Rostova', intensity: 'Active Reset', spots: 8 },

  // TUESDAY
  { day: 'tue', time: '06:00 AM - 07:00 AM', name: 'FUNCTIONAL WAVE CIRCUIT', coach: 'Elena Rostova', intensity: 'Zone 4 Metabolic', spots: 6 },
  { day: 'tue', time: '08:30 AM - 09:30 AM', name: 'COMBAT & AGILITY DRILLS', coach: 'Jaxson Cole', intensity: 'High Speed', spots: 4 },
  { day: 'tue', time: '04:30 PM - 05:30 PM', name: 'SQUAT & BENCH HYPERTROPHY', coach: 'Marcus Sterling', intensity: 'Strength/Volume', spots: 3 },
  { day: 'tue', time: '06:30 PM - 07:30 PM', name: 'RHYTHM STRIKE BOXING', coach: 'Jaxson Cole', intensity: 'Zone 4 Cardio', spots: 7 },

  // WEDNESDAY
  { day: 'wed', time: '05:30 AM - 06:30 AM', name: 'HYPERSTROKE METCON', coach: 'Elena Rostova', intensity: 'Zone 5 Peak', spots: 2 },
  { day: 'wed', time: '07:00 AM - 08:15 AM', name: 'DEADLIFT & POSTERIOR CHAIN', coach: 'Marcus Sterling', intensity: 'Max Effort', spots: 4 },
  { day: 'wed', time: '05:30 PM - 06:30 PM', name: 'CROSSFIT WAVE APEX', coach: 'Elena Rostova', intensity: 'Zone 5 High', spots: 0 },
  { day: 'wed', time: '07:00 PM - 08:00 PM', name: 'ATHLETIC MOBILITY & YOGA', coach: 'Jaxson Cole', intensity: 'Recovery', spots: 10 },

  // THURSDAY
  { day: 'thu', time: '06:00 AM - 07:00 AM', name: 'COMBAT CONDITIONING', coach: 'Jaxson Cole', intensity: 'Zone 4 High', spots: 5 },
  { day: 'thu', time: '08:30 AM - 09:45 AM', name: 'OLYMPIC TECHNIQUE CLINIC', coach: 'Marcus Sterling', intensity: 'Skill & Power', spots: 6 },
  { day: 'thu', time: '05:00 PM - 06:00 PM', name: 'METCON 360 PULSE', coach: 'Elena Rostova', intensity: 'Zone 5 Peak', spots: 2 },
  { day: 'thu', time: '06:30 PM - 07:30 PM', name: 'POWERLIFTING OPEN MAT', coach: 'Marcus Sterling', intensity: 'Self-Directed', spots: 12 },

  // FRIDAY
  { day: 'fri', time: '05:30 AM - 06:30 AM', name: 'FRIDAY ENGINE METCON', coach: 'Elena Rostova', intensity: 'Zone 5 Peak', spots: 4 },
  { day: 'fri', time: '07:00 AM - 08:00 AM', name: 'STRIKE & FOOTWORK MASTERCLASS', coach: 'Jaxson Cole', intensity: 'Zone 4 Cardio', spots: 3 },
  { day: 'fri', time: '12:00 PM - 01:00 PM', name: 'LUNCH HOUR POWER BREAK', coach: 'Marcus Sterling', intensity: 'Heavy Compound', spots: 6 },
  { day: 'fri', time: '05:30 PM - 06:30 PM', name: 'WEEKEND WARRIOR PREP', coach: 'Elena Rostova', intensity: 'Metabolic', spots: 8 },

  // SATURDAY
  { day: 'sat', time: '08:00 AM - 09:30 AM', name: 'ATX POWERLIFTING SHOWDOWN', coach: 'Marcus Sterling', intensity: 'Peak Effort', spots: 3 },
  { day: 'sat', time: '10:00 AM - 11:15 AM', name: 'TEAM HYPERSTROKE MATRIX', coach: 'Elena Rostova', intensity: 'Zone 5 Team', spots: 1 },
  { day: 'sat', time: '11:30 AM - 12:30 PM', name: 'COLD PLUNGE & BREATHWORK', coach: 'Jaxson Cole', intensity: 'Contrast Reset', spots: 15 },

  // SUNDAY
  { day: 'sun', time: '09:00 AM - 10:30 AM', name: 'SUNDAY RECOVERY YOGA & MOBILITY', coach: 'Elena Rostova', intensity: 'Regeneration', spots: 12 },
  { day: 'sun', time: '11:00 AM - 01:00 PM', name: 'OPEN LIFT & PLUNGE SUITE', coach: 'Staff CSCS', intensity: 'Flex Access', spots: 20 }
];

const FAQ_DATA = [
  {
    q: "How does the 7-Day Free Trial work?",
    a: "Your trial includes unlimited access to our 25,000 sq ft strength floor, all scheduled MetCon and Powerlifting classes, complete access to our contrast recovery suite (cold plunge & sauna), and an initial InBody 570 body composition scan. No long-term lock-in."
  },
  {
    q: "Is IronPulse ATX too intense for beginners?",
    a: "Not at all. Over 40% of our active members started with zero prior barbell or high-intensity conditioning experience. Every single session is coached by a CSCS-certified specialist who scales loads, movement mechanics, and heart-rate intensity to your exact biometric level."
  },
  {
    q: "How does the 24/7 Biometric Entry function?",
    a: "Pro and VIP members receive facial recognition and mobile Bluetooth pass access through the IronPulse app. Downtown access is monitored with high-definition AI security and full floor safety systems, allowing you to train on your schedule 365 days a year."
  },
  {
    q: "What are the rules and protocols for the Contrast Recovery Suite?",
    a: "Our suite features continuous 38°F filtration cold plunges and a custom 190°F cedar dry sauna. We recommend 3 rounds of 12-15 minutes in the sauna followed by 2-3 minutes in the plunge for optimal nervous system recovery and cellular inflammation reduction."
  },
  {
    q: "What is your contract length and cancellation policy?",
    a: "We believe in earning your loyalty through outcomes. All memberships are month-to-month with no hidden cancellation fees. Simply provide a 14-day notice via our member portal to freeze or cancel your account at any time."
  }
];