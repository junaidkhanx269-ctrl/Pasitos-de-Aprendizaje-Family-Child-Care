import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const LogoEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 120,
  className = ""
}) => {
  return (
    <svg
      width={size}
      height={size * 0.72}
      viewBox="0 0 400 288"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-label="Pasitos de Aprendizaje Logo Emblem"
    >
      {/* Decorative Floating Stars */}
      {/* Star 1: Golden Yellow (Top Left) */}
      <polygon
        points="140,24 144,34 154,34 146,40 149,50 140,44 131,50 134,40 126,34 136,34"
        fill="#FBBF24"
      />
      {/* Star 2: Soft Lime Green (Mid-Top Left) */}
      <polygon
        points="175,18 178,25 186,25 180,30 182,37 175,33 168,37 170,30 164,25 172,25"
        fill="#A3E635"
      />
      {/* Star 3: Magenta / Pink (Top Center) */}
      <polygon
        points="220,16 223,24 232,24 225,29 228,37 220,32 212,37 215,29 208,24 217,24"
        fill="#FF6B9D"
      />
      {/* Star 4: Soft Green (Top Right) */}
      <polygon
        points="260,20 263,28 271,28 265,33 267,41 260,36 253,41 255,33 249,28 257,28"
        fill="#86EFAC"
      />
      {/* Star 5: Golden Orange (Far Right) */}
      <polygon
        points="276,46 279,53 287,53 281,58 283,65 276,60 269,65 271,58 265,53 273,53"
        fill="#F59E0B"
      />
      {/* Star 6: Sky Blue (Far Left) */}
      <polygon
        points="120,44 123,51 131,51 125,56 127,63 120,59 113,63 115,56 109,51 117,51"
        fill="#38BDF8"
      />

      {/* LEFT CHILD: Pink Girl Jumping with Ponytail & Outstretched Arms */}
      <g id="pink-girl">
        {/* Head */}
        <circle cx="155" cy="46" r="17" fill="#FF6B9D" />
        {/* Ponytail swinging left */}
        <path
          d="M141 46 C134 46 130 54 135 60 C140 66 148 58 144 50 Z"
          fill="#FF6B9D"
        />
        {/* Left Arm raised up & outward */}
        <path
          d="M144 60 C136 64 128 72 126 77 C125 79 127 82 130 81 C135 79 142 70 148 66 Z"
          fill="#FF6B9D"
        />
        {/* Right Arm raised up toward center */}
        <path
          d="M165 58 C172 52 180 44 186 38 C188 36 190 38 189 40 C184 48 174 58 168 64 Z"
          fill="#FF6B9D"
        />
        {/* Torso & Dress (A-line playful dress) */}
        <path
          d="M145 61 Q155 58 165 61 L178 98 Q155 106 132 98 Z"
          fill="#FF6B9D"
        />
        {/* Left Leg kicking back up */}
        <path
          d="M140 98 C138 106 138 116 142 124 C143 127 146 128 149 126 C152 124 150 114 148 104 Z"
          fill="#FF6B9D"
        />
        {/* Right Leg bent in mid-air jump */}
        <path
          d="M166 98 C172 104 175 112 174 120 C173 123 169 125 166 123 C162 119 160 109 160 102 Z"
          fill="#FF6B9D"
        />
        {/* Foot / shoe curves */}
        <ellipse cx="145" cy="126" rx="5" ry="3.5" fill="#FF6B9D" />
        <ellipse cx="170" cy="123" rx="5" ry="3.5" fill="#FF6B9D" />
      </g>

      {/* RIGHT CHILD: Blue Boy Jumping with Spiky Hair & Outstretched Arms */}
      <g id="blue-boy">
        {/* Head with playful tousled spikes */}
        <circle cx="240" cy="44" r="17" fill="#3AB0FF" />
        {/* Spiky hair tufts on top & right */}
        <path
          d="M236 29 L241 22 L246 29 L251 22 L254 30 L259 25 L258 35 Z"
          fill="#3AB0FF"
        />
        {/* Left Arm raised up toward center */}
        <path
          d="M230 58 C222 50 214 42 208 36 C206 34 204 36 205 38 C211 47 221 57 227 63 Z"
          fill="#3AB0FF"
        />
        {/* Right Arm raised outward right */}
        <path
          d="M250 60 C258 64 266 71 270 76 C272 78 270 81 267 80 C261 78 253 69 247 65 Z"
          fill="#3AB0FF"
        />
        {/* Torso / T-shirt */}
        <path
          d="M228 60 Q239 58 250 60 L254 94 Q240 96 226 94 Z"
          fill="#3AB0FF"
        />
        {/* Shorts */}
        <path
          d="M226 92 L254 92 L257 106 L242 108 L240 101 L238 108 L223 106 Z"
          fill="#3AB0FF"
        />
        {/* Left Leg bent jumping up */}
        <path
          d="M228 107 C226 114 227 122 232 127 C234 129 237 127 237 124 C236 118 234 112 233 107 Z"
          fill="#3AB0FF"
        />
        {/* Right Leg kicking back */}
        <path
          d="M250 107 C253 113 255 121 252 127 C250 130 247 129 246 125 C246 119 247 113 246 107 Z"
          fill="#3AB0FF"
        />
        {/* Boy Shoes */}
        <ellipse cx="233" cy="128" rx="5" ry="3.5" fill="#3AB0FF" />
        <ellipse cx="251" cy="128" rx="5" ry="3.5" fill="#3AB0FF" />
      </g>

      {/* OPEN BOOK: Stylized open pages with soft gray depth and curved red spine */}
      <g id="open-book">
        {/* Red Base / Spine with gentle curve */}
        <path
          d="M106 142 
             C145 158 178 162 200 168 
             C222 162 255 158 294 142 
             C296 148 296 151 292 156 
             C255 174 220 178 200 184 
             C180 178 145 174 108 156 
             C104 151 104 148 106 142 Z"
          fill="#EF4444"
        />

        {/* Lower page depth layer (Soft gray) */}
        <path
          d="M108 138 
             C146 152 178 155 200 162 
             C222 155 254 152 292 138 
             C293 141 293 144 290 148 
             C254 163 221 166 200 172 
             C179 166 146 163 110 148 
             C107 144 107 141 108 138 Z"
          fill="#94A3B8"
        />

        {/* Middle page depth layer (Lighter gray) */}
        <path
          d="M110 134 
             C147 146 178 149 200 156 
             C222 149 253 146 290 134 
             C291 137 291 140 288 144 
             C253 157 221 160 200 166 
             C179 160 147 157 112 144 
             C109 140 109 137 110 134 Z"
          fill="#CBD5E1"
        />

        {/* Main Left Page - Crisp White with subtle outline */}
        <path
          d="M112 130 
             C148 116 176 122 198 144 
             C198 148 198 152 198 156 
             C176 138 148 134 112 144 Z"
          fill="#FFFFFF"
          stroke="#E2E8F0"
          strokeWidth="1.5"
        />

        {/* Main Right Page - Crisp White with subtle outline */}
        <path
          d="M288 130 
             C252 116 224 122 202 144 
             C202 148 202 152 202 156 
             C224 138 252 134 288 144 Z"
          fill="#FFFFFF"
          stroke="#E2E8F0"
          strokeWidth="1.5"
        />

        {/* Book Spine Center Accent */}
        <path
          d="M198 144 Q200 148 202 144 L202 168 Q200 172 198 168 Z"
          fill="#CBD5E1"
        />
      </g>
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = 'horizontal',
  size = 'md',
  showText = true
}) => {
  const emblemSizes = {
    sm: 44,
    md: 58,
    lg: 84,
    xl: 130
  };

  const emblemSize = emblemSizes[size] || 58;

  if (variant === 'icon' || !showText) {
    return <LogoEmblem size={emblemSize} className={className} />;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <LogoEmblem size={emblemSize * 1.5} />
        <div className="mt-1 flex flex-col items-center">
          <span className="font-extrabold tracking-wide uppercase text-[#3AB0FF] text-xl sm:text-2xl md:text-3xl leading-none font-display">
            Pasitos de Aprendizaje
          </span>
          <span className="font-bold tracking-[0.28em] sm:tracking-[0.34em] uppercase text-[#FF6B9D] text-xs sm:text-sm md:text-base mt-1.5 leading-none">
            Family Child Care
          </span>
        </div>
      </div>
    );
  }

  // Horizontal variant (Ideal for sticky navigation)
  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none min-w-0 ${className}`}>
      <div className="shrink-0">
        <LogoEmblem size={size === 'sm' ? 36 : size === 'md' ? 44 : emblemSize} />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="font-extrabold tracking-wide uppercase text-[#3AB0FF] text-[13px] sm:text-base md:text-lg leading-tight font-display truncate">
          Pasitos de Aprendizaje
        </span>
        <span className="font-bold tracking-[0.16em] sm:tracking-[0.24em] uppercase text-[#FF6B9D] text-[9px] sm:text-xs leading-tight truncate">
          Family Child Care
        </span>
      </div>
    </div>
  );
};
export default Logo;
