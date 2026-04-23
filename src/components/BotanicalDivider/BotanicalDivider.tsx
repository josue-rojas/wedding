export function BotanicalDivider() {
  return (
    <svg
      aria-hidden="true"
      className="botanical-divider"
      fill="none"
      viewBox="0 0 200 56"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left branch — main stem */}
      <path
        d="M100 36 Q80 34 62 28 Q46 22 34 16"
        stroke="#9aaa7a"
        strokeLinecap="round"
        strokeWidth="1.2"
      />
      {/* Left upper leaves */}
      <path d="M82 31 C76 22 67 21 63 25 C68 22 77 25 82 31" fill="#9aaa7a" opacity="0.85" />
      <path d="M70 27 C64 18 55 17 51 21 C56 18 65 21 70 27" fill="#9aaa7a" opacity="0.78" />
      <path d="M58 22 C52 13 43 12 39 16 C44 13 53 16 58 22" fill="#9aaa7a" opacity="0.70" />
      {/* Left lower leaves */}
      <path d="M79 33 C77 41 70 44 67 41 C70 43 77 40 79 33" fill="#9aaa7a" opacity="0.62" />
      <path d="M66 28 C64 36 57 39 54 36 C57 38 64 35 66 28" fill="#9aaa7a" opacity="0.56" />

      {/* Right branch — main stem (mirror) */}
      <path
        d="M100 36 Q120 34 138 28 Q154 22 166 16"
        stroke="#9aaa7a"
        strokeLinecap="round"
        strokeWidth="1.2"
      />
      {/* Right upper leaves */}
      <path d="M118 31 C124 22 133 21 137 25 C132 22 123 25 118 31" fill="#9aaa7a" opacity="0.85" />
      <path d="M130 27 C136 18 145 17 149 21 C144 18 135 21 130 27" fill="#9aaa7a" opacity="0.78" />
      <path d="M142 22 C148 13 157 12 161 16 C156 13 147 16 142 22" fill="#9aaa7a" opacity="0.70" />
      {/* Right lower leaves */}
      <path d="M121 33 C123 41 130 44 133 41 C130 43 123 40 121 33" fill="#9aaa7a" opacity="0.62" />
      <path d="M134 28 C136 36 143 39 146 36 C143 38 136 35 134 28" fill="#9aaa7a" opacity="0.56" />

      {/* Center berry/dot */}
      <circle cx="100" cy="36" fill="#9aaa7a" opacity="0.65" r="2.2" />
    </svg>
  )
}
