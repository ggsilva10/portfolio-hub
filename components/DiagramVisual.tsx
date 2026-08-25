import React from 'react';

export const DiagramVisual = ({ type }: { type: string }) => {
  switch (type) {
    case 'microservices-flow':
      return (
        <svg viewBox="0 0 540 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-[85px]">
          <g transform="translate(15, 20)">
            <rect x="0" y="0" width="70" height="58" rx="8" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />
            <text x="35" y="26" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FLASK</text>
            <text x="35" y="44" fill="#a7f3d0" fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">REST API</text>
          </g>
          <path d="M85 49 H 125" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="3 3" />
          <polygon points="127,49 121,45 121,53" fill="#ffffff" />
          <g transform="translate(130, 15)">
            <rect x="0" y="0" width="75" height="68" rx="8" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />
            <ellipse cx="37.5" cy="18" rx="26" ry="7" fill="#000000" stroke="#ffffff" strokeWidth="2" />
            <ellipse cx="37.5" cy="34" rx="26" ry="7" fill="#000000" stroke="#ffffff" strokeWidth="2" />
            <ellipse cx="37.5" cy="50" rx="26" ry="7" fill="#000000" stroke="#ffffff" strokeWidth="2" />
            <text x="37.5" y="38" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">REDIS</text>
          </g>
          <path d="M205 49 H 245" stroke="#ffffff" strokeWidth="2.5" />
          <polygon points="247,49 241,45 241,53" fill="#ffffff" />
          <g transform="translate(250, 16)">
            <rect x="0" y="0" width="80" height="66" rx="8" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />
            <circle cx="22" cy="33" r="12" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
            <text x="22" y="37" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">C</text>
            <circle cx="56" cy="33" r="12" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
            <text x="56" y="37" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">C</text>
            <text x="40" y="58" fill="#ffffff" fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">WORKERS</text>
          </g>
          <path d="M330 49 H 365" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="3 3" />
          <polygon points="367,49 361,45 361,53" fill="#ffffff" />
          <g transform="translate(370, 18)">
            <path d="M36 4 L64 16 V38 C64 54 36 66 36 66 C36 66 8 54 8 38 V16 Z" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />
            <circle cx="36" cy="32" r="10" fill="#f59e0b" />
            <text x="36" y="36" fill="#000000" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif"> </text>
            <text x="36" y="58" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">BYPASS</text>
          </g>
          <path d="M440 49 H 465" stroke="#ffffff" strokeWidth="2.5" />
          <polygon points="467,49 461,45 461,53" fill="#ffffff" />
          <g transform="translate(470, 20)">
            <rect x="0" y="0" width="58" height="58" rx="8" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />
            <ellipse cx="29" cy="18" rx="20" ry="7" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
            <path d="M9 18 V38 C9 45 49 45 49 38 V18" stroke="#ffffff" strokeWidth="1.5" />
            <path d="M9 28 C9 35 49 35 49 28" stroke="#ffffff" strokeWidth="1.5" />
            <text x="29" y="50" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">POSTGRES</text>
          </g>
        </svg>
      );
    case 'layered-fastify-jwt':
      return (
        <svg viewBox="0 0 540 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-[85px]">
          <g transform="translate(10, 16)">
            <rect x="0" y="0" width="76" height="66" rx="8" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />
            <text x="38" y="24" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FASTIFY</text>
            <text x="38" y="40" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">LAYERED</text>
            <text x="38" y="56" fill="#a7f3d0" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">ROUTES</text>
          </g>
          <path d="M86 49 H 122" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="3 3" />
          <polygon points="124,49 118,45 118,53" fill="#ffffff" />
          <g transform="translate(126, 14)">
            <rect x="0" y="0" width="82" height="70" rx="8" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />
            <path d="M41 12 L64 22 V42 C64 54 41 62 41 62 C41 62 18 54 18 42 V22 Z" fill="#000000" stroke="#e879f9" strokeWidth="2" />
            <text x="41" y="32" fill="#fdf4ff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">JWT</text>
            <text x="41" y="46" fill="#f43f5e" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">BCRYPT</text>
          </g>
          <path d="M208 49 H 244" stroke="#ffffff" strokeWidth="2.5" />
          <polygon points="246,49 240,45 240,53" fill="#ffffff" />
          <g transform="translate(248, 16)">
            <rect x="0" y="0" width="82" height="66" rx="8" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />
            <text x="41" y="24" fill="#fb923c" fontSize="11" fontWeight="extrabold" textAnchor="middle" fontFamily="sans-serif">KNEX.JS</text>
            <rect x="12" y="32" width="58" height="12" rx="3" fill="#1e202b" stroke="#ffffff" strokeWidth="1" />
            <text x="41" y="41" fill="#e2e8f0" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">MIGRATIONS</text>
            <text x="41" y="58" fill="#cbd5e1" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">UUID PKs</text>
          </g>
          <path d="M330 49 H 366" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="3 3" />
          <polygon points="368,49 362,45 362,53" fill="#ffffff" />
          <g transform="translate(370, 10)">
            <rect x="0" y="0" width="160" height="78" rx="8" fill="#0b0f19" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
            <text x="80" y="16" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">DOCKER CONTAINER</text>
            <g transform="translate(18, 20)">
              <rect x="0" y="0" width="124" height="50" rx="6" fill="#000000" stroke="#ffffff" strokeWidth="2" />
              <ellipse cx="62" cy="14" rx="46" ry="6" fill="#336791" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M16 14 V36 C16 42 108 42 108 36 V14" stroke="#ffffff" strokeWidth="1.5" />
              <text x="62" y="32" fill="#ffffff" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">POSTGRESQL</text>
              <text x="62" y="44" fill="#a7f3d0" fontSize="7" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">REFERENTIAL INTEGRITY</text>
            </g>
          </g>
        </svg>
      );
    case 'movie-dashboard-state':
      return (
        <svg viewBox="0 0 540 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-[85px]">
          <g transform="translate(10, 14)">
            <rect x="0" y="0" width="82" height="70" rx="8" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />
            <circle cx="24" cy="24" r="10" fill="#111827" stroke="#38bdf8" strokeWidth="1.5" />
            <path d="M31 31 L38 38" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            <text x="54" y="24" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">NEXT.JS</text>
            <text x="54" y="36" fill="#61dafb" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">REACT UI</text>
            <rect x="8" y="46" width="66" height="14" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />
            <text x="41" y="56" fill="#94a3b8" fontSize="7.5" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">  SEARCH / FILTER</text>
          </g>
          <path d="M92 49 H 128" stroke="#ffffff" strokeWidth="2.5" />
          <polygon points="130,49 124,45 124,53" fill="#ffffff" />
          <g transform="translate(132, 14)">
            <rect x="0" y="0" width="88" height="70" rx="8" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />
            <rect x="8" y="8" width="72" height="18" rx="4" fill="#d97706" />
            <text x="44" y="21" fill="#ffffff" fontSize="8.5" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">  ZUSTAND STORE</text>
            <text x="44" y="38" fill="#fde68a" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">GLOBAL STATE</text>
            <text x="44" y="52" fill="#cbd5e1" fontSize="7" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">CACHE & FAVORITES</text>
            <path d="M12 60 H 76" stroke="#475569" strokeWidth="1" />
          </g>
          <path d="M220 49 H 256" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="3 3" />
          <polygon points="258,49 252,45 252,53" fill="#ffffff" />
          <g transform="translate(260, 14)">
            <rect x="0" y="0" width="100" height="70" rx="8" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />
            <text x="50" y="16" fill="#38bdf8" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">RESPONSIVE GRID</text>
            <g transform="translate(8, 22)">
              <rect x="0" y="0" width="24" height="38" rx="3" fill="#1e293b" stroke="#f43f5e" strokeWidth="1.2" />
              <rect x="28" y="0" width="24" height="38" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.2" />
              <rect x="56" y="0" width="24" height="38" rx="3" fill="#1e293b" stroke="#10b981" strokeWidth="1.2" />
              <polygon points="10,16 16,19 10,22" fill="#f43f5e" />
              <polygon points="38,16 44,19 38,22" fill="#38bdf8" />
              <polygon points="66,16 72,19 66,22" fill="#10b981" />
            </g>
          </g>
          <path d="M360 49 H 396" stroke="#ffffff" strokeWidth="2.5" />
          <polygon points="398,49 392,45 392,53" fill="#ffffff" />
          <g transform="translate(400, 10)">
            <rect x="0" y="0" width="130" height="78" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
            <text x="65" y="16" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">TAILWIND STYLING</text>
            <g transform="translate(12, 22)">
              <rect x="0" y="0" width="106" height="46" rx="5" fill="#000000" stroke="#ffffff" strokeWidth="1.5" />
              <rect x="6" y="6" width="30" height="34" rx="2" fill="#0284c7" opacity="0.6" />
              <rect x="40" y="8" width="58" height="6" rx="2" fill="#e2e8f0" />
              <rect x="40" y="18" width="46" height="4" rx="2" fill="#94a3b8" />
              <rect x="40" y="26" width="52" height="4" rx="2" fill="#94a3b8" />
              <rect x="40" y="34" width="36" height="4" rx="2" fill="#38bdf8" />
            </g>
          </g>
        </svg>
      );
    case 'habit-progress-tracker':
      return (
        <svg viewBox="0 0 540 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-h-[85px]">
          <g transform="translate(10, 14)">
            <rect x="0" y="0" width="84" height="70" rx="8" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />
            <text x="42" y="22" fill="#ffffff" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">FLASK API</text>
            <rect x="8" y="28" width="68" height="15" rx="3" fill="#1e293b" stroke="#ffffff" strokeWidth="1" />
            <text x="42" y="39" fill="#38bdf8" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">/api/habits</text>
            <rect x="8" y="47" width="68" height="15" rx="3" fill="#1e293b" stroke="#ffffff" strokeWidth="1" />
            <text x="42" y="58" fill="#a7f3d0" fontSize="7.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">/api/progress</text>
          </g>
          <path d="M94 49 H 128" stroke="#ffffff" strokeWidth="2.5" />
          <polygon points="130,49 124,45 124,53" fill="#ffffff" />
          <g transform="translate(132, 14)">
            <rect x="0" y="0" width="94" height="70" rx="8" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />
            <text x="47" y="18" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">  DAILY STREAKS</text>
            <g transform="translate(10, 24)">
              <rect x="0" y="0" width="12" height="12" rx="2" fill="#10b981" />
              <rect x="15" y="0" width="12" height="12" rx="2" fill="#10b981" />
              <rect x="30" y="0" width="12" height="12" rx="2" fill="#10b981" />
              <rect x="45" y="0" width="12" height="12" rx="2" fill="#10b981" />
              <rect x="60" y="0" width="12" height="12" rx="2" fill="#334155" />
              <rect x="0" y="16" width="12" height="12" rx="2" fill="#10b981" />
              <rect x="15" y="16" width="12" height="12" rx="2" fill="#10b981" />
              <rect x="30" y="16" width="12" height="12" rx="2" fill="#10b981" />
              <rect x="45" y="16" width="12" height="12" rx="2" fill="#f59e0b" />
              <rect x="60" y="16" width="12" height="12" rx="2" fill="#10b981" />
            </g>
            <text x="47" y="62" fill="#cbd5e1" fontSize="7" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">PROGRESS LOGS</text>
          </g>
          <path d="M226 49 H 260" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="3 3" />
          <polygon points="262,49 256,45 256,53" fill="#ffffff" />
          <g transform="translate(264, 14)">
            <rect x="0" y="0" width="94" height="70" rx="8" fill="#000000" stroke="#ffffff" strokeWidth="2.5" />
            <text x="47" y="20" fill="#a855f7" fontSize="8.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ANALYTICS</text>
            <circle cx="47" cy="40" r="14" stroke="#334155" strokeWidth="3" fill="none" />
            <circle cx="47" cy="40" r="14" stroke="#10b981" strokeWidth="3" strokeDasharray="65 100" fill="none" transform="rotate(-90 47 40)" />
            <text x="47" y="44" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">85%</text>
            <text x="47" y="62" fill="#a7f3d0" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">COMPLETION</text>
          </g>
          <path d="M358 49 H 392" stroke="#ffffff" strokeWidth="2.5" />
          <polygon points="394,49 388,45 388,53" fill="#ffffff" />
          <g transform="translate(396, 12)">
            <rect x="0" y="0" width="134" height="74" rx="8" fill="#0b0f19" stroke="#336791" strokeWidth="2" strokeDasharray="4 2" />
            <text x="67" y="16" fill="#60a5fa" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">DATA PERSISTENCE</text>
            <g transform="translate(10, 20)">
              <rect x="0" y="0" width="114" height="46" rx="6" fill="#000000" stroke="#ffffff" strokeWidth="1.8" />
              <ellipse cx="57" cy="12" rx="42" ry="5" fill="#336791" stroke="#ffffff" strokeWidth="1.2" />
              <path d="M15 12 V32 C15 37 99 37 99 32 V12" stroke="#ffffff" strokeWidth="1.2" />
              <text x="57" y="28" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">POSTGRESQL</text>
              <text x="57" y="40" fill="#94a3b8" fontSize="7" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">USERS   HABITS   LOGS</text>
            </g>
          </g>
        </svg>
      );
    default:
      return null;
  }
};