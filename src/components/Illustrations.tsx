import React from 'react';

export const SchoolHeroIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <svg
      viewBox="0 -75 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Gradient */}
      <rect x="0" y="-75" width="800" height="600" fill="url(#bg-grad)" rx="16" />

      {/* Grid Pattern */}
      <g opacity="0.05">
        <path d="M0 -50 H800 M0 0 H800 M0 50 H800 M0 100 H800 M0 150 H800 M0 200 H800 M0 250 H800 M0 300 H800 M0 350 H800 M0 400 H800 M0 450 H800 M0 500 H800" stroke="#000" strokeWidth="1" />
        <path d="M100 -75 V525 M200 -75 V525 M300 -75 V525 M400 -75 V525 M500 -75 V525 M600 -75 V525 M700 -75 V525" stroke="#000" strokeWidth="1" />
      </g>

      {/* Sun or Circle */}
      <circle cx="680" cy="120" r="45" fill="url(#sun-grad)" opacity="0.8" />

      {/* Clouds */}
      <g opacity="0.7">
        <path d="M120 120 C120 100 140 90 160 100 C170 90 190 90 200 100 C210 100 220 110 220 120 H120 Z" fill="#FFFFFF" />
        <path d="M580 80 C580 65 595 58 610 65 C618 58 632 58 640 65 C648 65 655 72 655 80 H580 Z" fill="#FFFFFF" opacity="0.5" />
      </g>

      {/* Distant Hills / Horizon */}
      <path d="M0 380 Q200 340 400 370 T800 360 V550 H0 Z" fill="url(#hill-grad-1)" />
      <path d="M0 395 Q300 370 600 390 T800 380 V550 H0 Z" fill="url(#hill-grad-2)" />

      {/* Modern School Building */}
      {/* Left wing */}
      <rect x="180" y="200" width="140" height="200" fill="#E2E8F0" rx="4" />
      <rect x="180" y="200" width="140" height="15" fill="#3B82F6" />
      {/* Windows Left Wing */}
      <g fill="#93C5FD">
        <rect x="200" y="235" width="25" height="30" rx="2" />
        <rect x="237" y="235" width="25" height="30" rx="2" />
        <rect x="275" y="235" width="25" height="30" rx="2" />
        <rect x="200" y="280" width="25" height="30" rx="2" />
        <rect x="237" y="280" width="25" height="30" rx="2" />
        <rect x="275" y="280" width="25" height="30" rx="2" />
        <rect x="200" y="325" width="25" height="30" rx="2" />
        <rect x="237" y="325" width="25" height="30" rx="2" />
        <rect x="275" y="325" width="25" height="30" rx="2" />
      </g>

      {/* Right wing */}
      <rect x="480" y="220" width="140" height="180" fill="#EDF2F7" rx="4" />
      <rect x="480" y="220" width="140" height="15" fill="#3B82F6" />
      {/* Windows Right Wing */}
      <g fill="#93C5FD">
        <rect x="500" y="250" width="25" height="30" rx="2" />
        <rect x="537" y="250" width="25" height="30" rx="2" />
        <rect x="575" y="250" width="25" height="30" rx="2" />
        <rect x="500" y="295" width="25" height="30" rx="2" />
        <rect x="537" y="295" width="25" height="30" rx="2" />
        <rect x="575" y="295" width="25" height="30" rx="2" />
        <rect x="500" y="340" width="25" height="30" rx="2" />
        <rect x="537" y="340" width="25" height="30" rx="2" />
        <rect x="575" y="340" width="25" height="30" rx="2" />
      </g>

      {/* Main Center Building (Tallest) */}
      <rect x="290" y="150" width="220" height="250" fill="#FFFFFF" rx="6" />
      <rect x="290" y="150" width="220" height="20" fill="#2563EB" rx="2" />
      
      {/* School Name / Logo Emblem in main building */}
      <circle cx="400" cy="200" r="18" fill="#DBEAFE" />
      <path d="M394 204 L400 192 L406 204 M396 200 H404" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Large glass wall panels in center */}
      <rect x="315" y="235" width="40" height="100" fill="url(#glass-grad)" rx="3" />
      <rect x="445" y="235" width="40" height="100" fill="url(#glass-grad)" rx="3" />

      {/* Clock above entrance */}
      <circle cx="400" cy="250" r="12" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
      <path d="M400 242 V250 H405" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />

      {/* Main Entrance Pillars & Door */}
      <rect x="365" y="315" width="70" height="85" fill="#E2E8F0" rx="2" />
      <rect x="360" y="310" width="80" height="8" fill="#1E3A8A" />
      <rect x="375" y="335" width="50" height="65" fill="#1E293B" />
      <line x1="400" y1="335" x2="400" y2="400" stroke="#FFFFFF" strokeWidth="1" />
      <circle cx="394" cy="365" r="1.5" fill="#FFD700" />
      <circle cx="406" cy="365" r="1.5" fill="#FFD700" />

      {/* Flagpole */}
      <line x1="110" y1="210" x2="110" y2="395" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
      <circle cx="110" cy="210" r="5" fill="#CBD5E1" />
      {/* Indonesian Flag */}
      <path d="M110 215 H155 V230 H110 Z" fill="#EF4444" />
      <path d="M110 230 H155 V245 H110 Z" fill="#F8FAFC" />

      {/* Trees & Shrubbery */}
      <g fill="#10B981">
        <circle cx="140" cy="380" r="25" />
        <circle cx="160" cy="390" r="18" />
        <circle cx="650" cy="385" r="28" />
        <circle cx="680" cy="395" r="20" />
        <path d="M15 410 C15 390 35 380 50 395 C65 380 85 390 85 410 Z" />
      </g>
      <g fill="#047857">
        <rect x="135" y="390" width="10" height="15" />
        <rect x="645" y="395" width="10" height="15" />
      </g>

      {/* Foreground Walkway & Grass */}
      <rect x="0" y="400" width="800" height="150" fill="#34D399" />
      <path d="M350 400 L310 550 H490 L450 400 Z" fill="#94A3B8" />

      {/* Tiny Minimalist Birds */}
      <g stroke="#1E3A8A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4">
        <path d="M220 80 Q225 75 230 80 Q235 75 240 80" />
        <path d="M250 90 Q255 85 260 90 Q265 85 270 90" />
        <path d="M480 70 Q485 65 490 70 Q495 65 500 70" />
      </g>

      {/* Gradients definitions */}
      <defs>
        <linearGradient id="bg-grad" x1="0" y1="-75" x2="800" y2="525" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EFF6FF" />
          <stop stopColor="#DBEAFE" />
          <stop stopColor="#BFDBFE" />
        </linearGradient>
        <linearGradient id="sun-grad" x1="680" y1="75" x2="680" y2="165" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEE2E2" />
          <stop stopColor="#3B82F6" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="hill-grad-1" x1="400" y1="350" x2="400" y2="550" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A7F3D0" />
          <stop stopColor="#34D399" />
        </linearGradient>
        <linearGradient id="hill-grad-2" x1="400" y1="370" x2="400" y2="550" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6EE7B7" />
          <stop stopColor="#059669" />
        </linearGradient>
        <linearGradient id="glass-grad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop stopColor="#60A5FA" />
          <stop stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const PrincipalIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <circle cx="100" cy="100" r="90" fill="url(#avatar-bg)" />
      
      {/* Subtle Grid Accent */}
      <circle cx="100" cy="100" r="75" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

      {/* Shoulders / Suit */}
      <path d="M40 160 C40 135 60 120 100 120 C140 120 160 135 160 160 V185 H40 V160 Z" fill="#1E3A8A" />
      
      {/* White Shirt Collar */}
      <path d="M80 120 L100 145 L120 120" fill="#FFFFFF" />
      
      {/* Blue Tie */}
      <path d="M96 135 L104 135 L106 170 L100 176 L94 170 Z" fill="#2563EB" />

      {/* Neck */}
      <path d="M85 105 H115 V125 H85 Z" fill="#FBCFE8" opacity="0.9" />
      <path d="M85 118 C85 118 95 125 100 125 C105 125 115 118 115 118" fill="#F472B6" opacity="0.3" />

      {/* Head / Face */}
      <rect x="75" y="55" width="50" height="55" rx="25" fill="#FBCFE8" />

      {/* Hair (Slightly grey/black side hair for principal look) */}
      <path d="M73 70 C70 65 74 52 90 50 C100 48 115 50 125 55 C128 58 128 65 126 70 C124 64 115 56 100 56 C85 56 76 64 73 70 Z" fill="#475569" />
      <path d="M72 70 C72 70 70 80 74 85 C75 80 75 75 73 70 Z" fill="#94A3B8" /> {/* Grey hair details */}
      <path d="M128 70 C128 70 130 80 126 85 C125 80 125 75 128 70 Z" fill="#94A3B8" />

      {/* Glasses */}
      <rect x="78" y="72" width="18" height="12" rx="2" stroke="#334155" strokeWidth="2" fill="#E2E8F0" fillOpacity="0.4" />
      <rect x="104" y="72" width="18" height="12" rx="2" stroke="#334155" strokeWidth="2" fill="#E2E8F0" fillOpacity="0.4" />
      <line x1="96" y1="78" x2="104" y2="78" stroke="#334155" strokeWidth="2" />
      <line x1="72" y1="76" x2="78" y2="76" stroke="#334155" strokeWidth="1.5" />
      <line x1="122" y1="76" x2="128" y2="76" stroke="#334155" strokeWidth="1.5" />

      {/* Eyes (behind glasses, simple dots) */}
      <circle cx="87" cy="78" r="1.5" fill="#1E293B" />
      <circle cx="113" cy="78" r="1.5" fill="#1E293B" />

      {/* Smile */}
      <path d="M93 93 Q100 98 107 93" stroke="#334155" strokeWidth="2" strokeLinecap="round" />

      {/* Peci/Kopiah (Traditional Indonesian Formal Cap) */}
      <path d="M76 56 H124 L121 44 H79 Z" fill="#0F172A" />

      <defs>
        <linearGradient id="avatar-bg" x1="100" y1="10" x2="100" y2="190" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ClassroomIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="400" height="300" fill="url(#class-bg-grad)" rx="12" />

      {/* Wall Board */}
      <rect x="50" y="30" width="300" height="130" fill="#1E293B" rx="4" stroke="#64748B" strokeWidth="6" />
      
      {/* Board drawings (Math / Science concept) */}
      <g stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
        {/* Math equation */}
        <text x="70" y="70" fill="#94A3B8" fontSize="14" fontFamily="monospace">E = mc²</text>
        <text x="70" y="95" fill="#94A3B8" fontSize="12" fontFamily="monospace">f(x) = x³ - 2x + 5</text>
        {/* Geometric drawing */}
        <path d="M260 50 L310 110 H210 Z" fill="none" stroke="#60A5FA" strokeWidth="2" />
        <line x1="260" y1="50" x2="260" y2="110" stroke="#F87171" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="265" y="85" fill="#F87171" fontSize="10">h</text>
        <text x="250" y="123" fill="#60A5FA" fontSize="10">alas (b)</text>
      </g>

      {/* Teacher Desk & Laptop */}
      <rect x="260" y="190" width="110" height="70" fill="#3B82F6" rx="2" />
      <rect x="250" y="185" width="130" height="8" fill="#1D4ED8" rx="2" />
      {/* Laptop */}
      <rect x="290" y="165" width="30" height="18" fill="#E2E8F0" rx="1" />
      <line x1="285" y1="183" x2="325" y2="183" stroke="#94A3B8" strokeWidth="2" />

      {/* Student Desk (Foreground Left) */}
      <rect x="40" y="210" width="140" height="80" fill="#DBEAFE" rx="3" stroke="#93C5FD" strokeWidth="2" />
      <rect x="30" y="202" width="160" height="10" fill="#2563EB" rx="2" />
      
      {/* Stack of Books */}
      <rect x="60" y="185" width="35" height="6" fill="#F87171" rx="1" />
      <rect x="58" y="191" width="38" height="6" fill="#60A5FA" rx="1" />
      <rect x="62" y="179" width="30" height="6" fill="#34D399" rx="1" />

      {/* Pencil Holder */}
      <rect x="135" y="187" width="12" height="15" rx="1" fill="#94A3B8" />
      <line x1="138" y1="180" x2="138" y2="187" stroke="#F59E0B" strokeWidth="2" />
      <line x1="142" y1="178" x2="144" y2="187" stroke="#EF4444" strokeWidth="2" />
      <line x1="144" y1="182" x2="141" y2="187" stroke="#10B981" strokeWidth="2" />

      {/* Globe */}
      <circle cx="160" cy="180" r="10" fill="#93C5FD" stroke="#475569" strokeWidth="1.5" />
      <path d="M152 180 C154 175 166 175 168 180 C166 185 154 185 152 180 Z" stroke="#10B981" strokeWidth="1" fill="none" />
      <path d="M160 170 V190" stroke="#475569" strokeWidth="1" />
      {/* Stand */}
      <path d="M160 190 Q150 190 152 195 H168 Q170 190 160 190 Z" fill="#475569" />

      <defs>
        <linearGradient id="class-bg-grad" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F0F9FF" />
          <stop stopColor="#E0F2FE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ContactIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background with Circular Elements */}
      <rect width="300" height="300" fill="url(#contact-bg-grad)" rx="12" />
      <circle cx="230" cy="70" r="50" fill="#60A5FA" opacity="0.2" />
      <circle cx="60" cy="220" r="40" fill="#3B82F6" opacity="0.1" />

      {/* Letter Envelope Graphic */}
      <rect x="60" y="80" width="180" height="120" fill="#FFFFFF" rx="8" stroke="#3B82F6" strokeWidth="3" />
      
      {/* Envelope Flap Lines */}
      <path d="M60 83 L150 145 L240 83" stroke="#3B82F6" strokeWidth="3" strokeLinejoin="round" />
      <path d="M60 197 L120 145" stroke="#93C5FD" strokeWidth="2.5" />
      <path d="M240 197 L180 145" stroke="#93C5FD" strokeWidth="2.5" />

      {/* Floating Sparkles/Email Icons */}
      <g opacity="0.8">
        {/* Mini mail icon 1 */}
        <g transform="translate(40, 50) scale(0.7)">
          <rect width="30" height="20" rx="3" fill="#2563EB" />
          <path d="M0 2 L15 10 L30 2" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
        </g>
        {/* Mini mail icon 2 */}
        <g transform="translate(220, 200) scale(0.8)">
          <rect width="30" height="20" rx="3" fill="#3B82F6" />
          <path d="M0 2 L15 10 L30 2" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
        </g>
      </g>

      {/* Phone Silhouette inside circular icon */}
      <circle cx="150" cy="220" r="28" fill="#2563EB" />
      <path d="M144 212 C142 212 140 214 140 216 C140 224 146 230 154 230 C156 230 158 228 158 226 L155 221 C154 220 152 220 151 221 L148 224 C146 222 144 220 142 218 L145 215 C146 214 146 212 145 211 L144 212 Z" fill="#FFFFFF" transform="scale(1.1) translate(-13, -19)" />

      {/* Interactive Floating Chat bubble */}
      <path d="M190 65 C190 51 205 40 225 40 C245 40 260 51 260 65 C260 72 255 79 247 83 L250 93 L238 88 C233 89 229 90 225 90 C205 90 190 79 190 65 Z" fill="#34D399" />
      <circle cx="213" cy="65" r="2" fill="#FFFFFF" />
      <circle cx="225" cy="65" r="2" fill="#FFFFFF" />
      <circle cx="237" cy="65" r="2" fill="#FFFFFF" />

      <defs>
        <linearGradient id="contact-bg-grad" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EFF6FF" />
          <stop stopColor="#DBEAFE" />
        </linearGradient>
      </defs>
    </svg>
  );
};
