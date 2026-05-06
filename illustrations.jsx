// ============================================
// SVG ILLUSTRATIONS — Product visuals & icons
// ============================================

const Illustrations = {
  // Bottle for liquid products
  Bottle: ({ color = '#5e8c34', label = '', size = 200 }) => (
    <svg viewBox="0 0 200 240" width={size} height={size * 1.2} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`bg-${label}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor={color} stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id={`gloss-${label}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Cap */}
      <rect x="78" y="10" width="44" height="32" rx="4" fill="#3a2916" />
      <rect x="74" y="38" width="52" height="14" rx="3" fill="#523a1f" />
      {/* Neck */}
      <rect x="86" y="50" width="28" height="20" fill="#2a4218" />
      {/* Bottle body */}
      <path d="M 60 75 Q 50 90 50 110 L 50 210 Q 50 228 70 228 L 130 228 Q 150 228 150 210 L 150 110 Q 150 90 140 75 Z"
            fill={`url(#bg-${label})`} stroke={color} strokeWidth="1.5" />
      {/* Gloss */}
      <path d="M 60 90 Q 55 110 55 200 L 70 200 L 70 95 Z" fill={`url(#gloss-${label})`} />
      {/* Label */}
      <rect x="60" y="125" width="80" height="70" rx="4" fill="white" opacity="0.95" />
      <rect x="60" y="125" width="80" height="14" fill={color} opacity="0.8" />
      <text x="100" y="135" textAnchor="middle" fontSize="9" fill="white" fontWeight="600" fontFamily="sans-serif" letterSpacing="1">CoA-BLG</text>
      <text x="100" y="158" textAnchor="middle" fontSize="13" fill={color} fontWeight="700" fontFamily="serif">{label}</text>
      <text x="100" y="174" textAnchor="middle" fontSize="7" fill="#666" fontFamily="sans-serif">ORGANIC CERTIFIED</text>
      <line x1="68" y1="182" x2="132" y2="182" stroke={color} strokeWidth="0.5" opacity="0.4" />
      <text x="100" y="192" textAnchor="middle" fontSize="6" fill="#888" fontFamily="sans-serif">Net Vol. 1000 ml</text>
    </svg>
  ),

  // Sack for dry products
  Sack: ({ color = '#3a2916', label = '', size = 200 }) => (
    <svg viewBox="0 0 200 240" width={size} height={size * 1.2} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`sack-${label}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* Tied top */}
      <path d="M 70 30 Q 100 15 130 30 L 135 50 Q 100 40 65 50 Z" fill={color} opacity="0.7" />
      <ellipse cx="100" cy="35" rx="8" ry="3" fill="#523a1f" />
      <line x1="100" y1="20" x2="100" y2="48" stroke="#523a1f" strokeWidth="2" />
      {/* Sack body */}
      <path d="M 50 55 Q 45 65 50 80 L 55 215 Q 56 230 70 230 L 130 230 Q 144 230 145 215 L 150 80 Q 155 65 150 55 Z"
            fill={`url(#sack-${label})`} stroke={color} strokeWidth="1.5" />
      {/* Texture lines */}
      <g opacity="0.15" stroke="white" strokeWidth="0.5">
        {[60, 75, 90, 105, 120, 135].map(y => <line key={y} x1="55" y1={y + 30} x2="145" y2={y + 30} />)}
      </g>
      {/* Label */}
      <rect x="60" y="115" width="80" height="80" rx="4" fill="#fdfaf3" />
      <rect x="60" y="115" width="80" height="16" fill={color} />
      <text x="100" y="126" textAnchor="middle" fontSize="9" fill="white" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">CoA-BLG</text>
      <text x="100" y="152" textAnchor="middle" fontSize="14" fill={color} fontWeight="700" fontFamily="serif">{label}</text>
      <text x="100" y="168" textAnchor="middle" fontSize="7" fill="#666" fontFamily="sans-serif">100% ORGANIC</text>
      <circle cx="100" cy="182" r="6" fill="none" stroke={color} strokeWidth="1" />
      <text x="100" y="185" textAnchor="middle" fontSize="6" fill={color} fontWeight="700">5 KG</text>
    </svg>
  ),

  // Worm jar
  WormJar: ({ size = 200 }) => (
    <svg viewBox="0 0 200 240" width={size} height={size * 1.2} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="soil-grad" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="#6e4e28" />
          <stop offset="100%" stopColor="#3a2916" />
        </radialGradient>
      </defs>
      {/* Lid */}
      <rect x="50" y="20" width="100" height="20" rx="4" fill="#523a1f" />
      <rect x="50" y="38" width="100" height="6" fill="#3a2916" />
      {/* Jar */}
      <path d="M 55 44 L 50 220 Q 50 232 62 232 L 138 232 Q 150 232 150 220 L 145 44 Z"
            fill="rgba(243, 247, 238, 0.8)" stroke="#a3c279" strokeWidth="2" />
      {/* Soil layer */}
      <path d="M 55 130 L 145 130 L 148 220 Q 148 230 138 230 L 62 230 Q 52 230 52 220 Z"
            fill="url(#soil-grad)" />
      {/* Worms */}
      <g stroke="#c8542a" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M 70 150 Q 80 145 90 155 Q 100 165 110 160" />
        <path d="M 85 175 Q 95 170 105 180 Q 115 185 125 178" />
        <path d="M 65 195 Q 75 200 85 195 Q 95 190 105 200" />
        <path d="M 110 205 Q 120 200 130 210" />
        <path d="M 75 215 Q 90 210 100 220" />
      </g>
      {/* Air holes */}
      {[80, 100, 120].map(x => <circle key={x} cx={x} cy="30" r="2" fill="#1a221c" />)}
      {/* Label */}
      <rect x="65" y="60" width="70" height="50" rx="3" fill="white" opacity="0.95" />
      <text x="100" y="78" textAnchor="middle" fontSize="11" fill="#523a1f" fontWeight="700" fontFamily="serif">Live Worms</text>
      <text x="100" y="92" textAnchor="middle" fontSize="7" fill="#888" fontFamily="sans-serif">Eisenia fetida</text>
      <text x="100" y="103" textAnchor="middle" fontSize="9" fill="#5e8c34" fontWeight="600" fontFamily="sans-serif">1 KG</text>
    </svg>
  ),

  // Algae petri dish for BGA
  Petri: ({ size = 200 }) => (
    <svg viewBox="0 0 200 240" width={size} height={size * 1.2} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="algae-grad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#7fa84f" />
          <stop offset="60%" stopColor="#466d24" />
          <stop offset="100%" stopColor="#2a4218" />
        </radialGradient>
      </defs>
      {/* Shadow */}
      <ellipse cx="100" cy="200" rx="70" ry="10" fill="black" opacity="0.1" />
      {/* Petri dish */}
      <ellipse cx="100" cy="120" rx="80" ry="20" fill="#e3edd5" stroke="#a3c279" strokeWidth="1.5" />
      <ellipse cx="100" cy="115" rx="80" ry="20" fill="url(#algae-grad)" />
      {/* Algae texture */}
      <g opacity="0.6">
        {[...Array(15)].map((_, i) => {
          const angle = (i / 15) * Math.PI * 2;
          const r = 30 + Math.random() * 30;
          const x = 100 + Math.cos(angle) * r;
          const y = 115 + Math.sin(angle) * r * 0.25;
          return <circle key={i} cx={x} cy={y} r={3 + Math.random() * 4} fill="#36531d" opacity={0.4 + Math.random() * 0.4} />;
        })}
      </g>
      {/* Top glass rim */}
      <ellipse cx="100" cy="115" rx="80" ry="20" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
      {/* Label */}
      <rect x="70" y="155" width="60" height="40" rx="3" fill="white" stroke="#c8dbab" />
      <text x="100" y="170" textAnchor="middle" fontSize="10" fill="#466d24" fontWeight="700" fontFamily="serif">BGA Culture</text>
      <text x="100" y="183" textAnchor="middle" fontSize="7" fill="#888" fontFamily="sans-serif">Anabaena spp.</text>
      <text x="100" y="192" textAnchor="middle" fontSize="6" fill="#5e8c34">500g</text>
    </svg>
  ),

  // Cow icon for Panchgavya
  CowJar: ({ size = 200 }) => (
    <svg viewBox="0 0 200 240" width={size} height={size * 1.2} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gavya-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f1c40f" />
          <stop offset="100%" stopColor="#a8814d" />
        </linearGradient>
      </defs>
      {/* Lid */}
      <ellipse cx="100" cy="38" rx="50" ry="8" fill="#8b6535" />
      <rect x="50" y="38" width="100" height="14" fill="#6e4e28" />
      <ellipse cx="100" cy="52" rx="50" ry="6" fill="#523a1f" />
      {/* Jar */}
      <path d="M 55 55 Q 50 70 50 90 L 50 215 Q 50 230 65 230 L 135 230 Q 150 230 150 215 L 150 90 Q 150 70 145 55 Z"
            fill="rgba(255,255,255,0.4)" stroke="#c4a574" strokeWidth="1.5" />
      {/* Liquid */}
      <path d="M 55 100 L 50 215 Q 50 228 65 228 L 135 228 Q 150 228 150 215 L 145 100 Z"
            fill="url(#gavya-liquid)" opacity="0.85" />
      {/* Surface ripple */}
      <ellipse cx="100" cy="100" rx="48" ry="6" fill="#f1c40f" opacity="0.6" />
      {/* Cow silhouette label */}
      <rect x="65" y="125" width="70" height="80" rx="4" fill="#fdfaf3" />
      <rect x="65" y="125" width="70" height="16" fill="#e8a838" />
      <text x="100" y="136" textAnchor="middle" fontSize="9" fill="white" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">PANCHGAVYA</text>
      {/* Cow */}
      <g transform="translate(85,150)">
        <ellipse cx="15" cy="18" rx="14" ry="8" fill="#523a1f" />
        <circle cx="5" cy="14" r="6" fill="#523a1f" />
        <circle cx="2" cy="11" r="2" fill="#523a1f" />
        <circle cx="8" cy="11" r="2" fill="#523a1f" />
        <line x1="8" y1="22" x2="8" y2="28" stroke="#523a1f" strokeWidth="1.5" />
        <line x1="22" y1="22" x2="22" y2="28" stroke="#523a1f" strokeWidth="1.5" />
      </g>
      <text x="100" y="195" textAnchor="middle" fontSize="7" fill="#666" fontFamily="sans-serif">SACRED FORMULATION</text>
    </svg>
  ),

  // Logo mark
  Logo: ({ size = 44 }) => (
    <svg viewBox="0 0 44 44" width={size} height={size}>
      <circle cx="22" cy="22" r="22" fill="#36531d" />
      {/* Leaf */}
      <path d="M 22 8 Q 14 14 14 24 Q 14 32 22 36 Q 30 32 30 24 Q 30 14 22 8 Z" fill="#a3c279" />
      <line x1="22" y1="10" x2="22" y2="34" stroke="#36531d" strokeWidth="0.8" />
      {/* Veins */}
      <path d="M 22 16 L 18 20 M 22 20 L 26 24 M 22 24 L 18 28 M 22 28 L 26 32" stroke="#36531d" strokeWidth="0.5" fill="none" />
    </svg>
  ),

  // Decorative seedling
  Seedling: ({ size = 80, color = '#5e8c34' }) => (
    <svg viewBox="0 0 80 80" width={size} height={size}>
      <path d="M 40 75 L 40 45" stroke={color} strokeWidth="2" />
      <path d="M 40 50 Q 25 45 20 30 Q 30 35 40 45 Z" fill={color} />
      <path d="M 40 42 Q 55 37 60 22 Q 50 27 40 37 Z" fill={color} opacity="0.85" />
      <ellipse cx="40" cy="76" rx="18" ry="3" fill="#3a2916" opacity="0.3" />
    </svg>
  ),

  // Hero illustration — farm scene
  HeroArt: ({ size = 500 }) => (
    <svg viewBox="0 0 500 550" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="sun-grad" cx="0.5" cy="0.5">
          <stop offset="0%" stopColor="#fff5d6" />
          <stop offset="100%" stopColor="#e8a838" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hill-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7fa84f" />
          <stop offset="100%" stopColor="#36531d" />
        </linearGradient>
        <linearGradient id="jar-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a3c279" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#36531d" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Sun glow */}
      <circle cx="380" cy="120" r="120" fill="url(#sun-grad)" />
      <circle cx="380" cy="120" r="55" fill="#e8a838" opacity="0.4" />
      <circle cx="380" cy="120" r="38" fill="#fff5d6" />

      {/* Back hills */}
      <path d="M 0 380 Q 100 320 200 350 Q 300 380 400 330 Q 480 300 500 320 L 500 550 L 0 550 Z"
            fill="url(#hill-grad)" opacity="0.4" />
      <path d="M 0 410 Q 120 360 240 390 Q 360 420 500 380 L 500 550 L 0 550 Z"
            fill="url(#hill-grad)" opacity="0.6" />
      <path d="M 0 440 Q 150 410 300 430 Q 420 450 500 420 L 500 550 L 0 550 Z"
            fill="#466d24" />

      {/* Field rows */}
      <g opacity="0.4">
        {[460, 480, 500, 520].map((y, i) => (
          <path key={i} d={`M 0 ${y} Q 250 ${y - 10} 500 ${y}`} stroke="#36531d" strokeWidth="1.5" fill="none" />
        ))}
      </g>

      {/* Center jar with plant */}
      <g transform="translate(180,180)">
        {/* Jar */}
        <ellipse cx="70" cy="290" rx="80" ry="12" fill="black" opacity="0.15" />
        <path d="M 20 130 Q 15 145 15 165 L 15 280 Q 15 295 30 295 L 110 295 Q 125 295 125 280 L 125 165 Q 125 145 120 130 Z"
              fill="rgba(253,250,243,0.85)" stroke="#36531d" strokeWidth="2" />
        <path d="M 20 220 L 15 280 Q 15 293 30 293 L 110 293 Q 125 293 125 280 L 120 220 Z"
              fill="url(#jar-glow)" />
        {/* Soil */}
        <ellipse cx="70" cy="220" rx="55" ry="10" fill="#523a1f" />
        <path d="M 20 220 L 18 260 L 122 260 L 120 220 Z" fill="#3a2916" />
        {/* Worms in soil */}
        <g stroke="#c8542a" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.8">
          <path d="M 30 240 Q 40 235 50 245" />
          <path d="M 70 250 Q 80 245 90 252" />
          <path d="M 95 235 Q 105 240 115 235" />
        </g>
        {/* Plant */}
        <g>
          <line x1="70" y1="220" x2="70" y2="100" stroke="#36531d" strokeWidth="3" />
          {/* Leaves */}
          <path d="M 70 180 Q 35 165 25 130 Q 50 145 70 170 Z" fill="#5e8c34" />
          <path d="M 70 160 Q 105 145 115 110 Q 90 125 70 150 Z" fill="#7fa84f" />
          <path d="M 70 140 Q 35 125 30 95 Q 55 105 70 130 Z" fill="#5e8c34" />
          <path d="M 70 120 Q 100 105 105 80 Q 85 90 70 110 Z" fill="#7fa84f" />
          {/* Top sprout */}
          <ellipse cx="70" cy="92" rx="6" ry="12" fill="#a3c279" />
          <ellipse cx="65" cy="98" rx="4" ry="8" fill="#7fa84f" />
          <ellipse cx="75" cy="98" rx="4" ry="8" fill="#7fa84f" />
        </g>
      </g>

      {/* Floating leaves */}
      <g opacity="0.7">
        <path d="M 70 100 Q 50 110 60 130 Q 80 120 70 100" fill="#7fa84f" transform="rotate(-15 65 115)">
          <animateTransform attributeName="transform" type="rotate" from="-15 65 115" to="15 65 115" dur="6s" repeatCount="indefinite" values="-15 65 115; 15 65 115; -15 65 115" />
        </path>
        <path d="M 420 200 Q 405 210 415 230 Q 430 220 420 200" fill="#5e8c34">
          <animateTransform attributeName="transform" type="rotate" from="0 420 215" to="360 420 215" dur="20s" repeatCount="indefinite" />
        </path>
        <path d="M 80 280 Q 65 290 75 310 Q 90 300 80 280" fill="#7fa84f">
          <animateTransform attributeName="transform" type="rotate" from="0 80 295" to="-360 80 295" dur="25s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Small birds */}
      <g fill="none" stroke="#36531d" strokeWidth="2" strokeLinecap="round">
        <path d="M 100 80 Q 105 75 110 80 Q 115 75 120 80" />
        <path d="M 150 60 Q 155 55 160 60 Q 165 55 170 60" />
      </g>
    </svg>
  ),

  Star: ({ filled = true, size = 14 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={filled ? '#e8a838' : 'none'} stroke="#e8a838" strokeWidth="1.5">
      <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" />
    </svg>
  ),
};

window.Illustrations = Illustrations;
