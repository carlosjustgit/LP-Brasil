import { Button } from '@/components/ui/button'
import { scrollToForm } from '@/lib/scrollToForm'

import { ArrowRight } from 'lucide-react'

export default function FinalCTASection() {
  

  return (
    
      <section className="py-10 md:py-20 lg:py-32 relative overflow-hidden">
        {/* Left circular arc with fading edges (thicker, gradient) */}
        <svg className="pointer-events-none absolute left-0 top-0 h-full w-[28vw] -translate-x-[60%]" viewBox="0 0 600 1200" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="arcStroke" x1="0" y1="0" x2="0" y2="1200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8943FE" stopOpacity="0" />
              <stop offset="20%" stopColor="#A78BFA" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#7C3AED" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8943FE" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="arcHighlight" x1="0" y1="0" x2="0" y2="1200" gradientUnits="userSpaceOnUse">
              <stop offset="15%" stopColor="#E9D5FF" stopOpacity="0.7" />
              <stop offset="85%" stopColor="#C4B5FD" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="fadeMask" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="10%" stopColor="white" stopOpacity="1" />
              <stop offset="90%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="arcMask">
              <rect x="0" y="0" width="600" height="1200" fill="url(#fadeMask)" />
            </mask>
          </defs>
          {/* Large circle centered off-canvas to the left; only an arc shows */}
          <g mask="url(#arcMask)">
            <circle cx="-360" cy="600" r="520" stroke="url(#arcStroke)" strokeWidth="10" fill="none" />
            {/* inner highlight */}
            <circle cx="-360" cy="600" r="514" stroke="url(#arcHighlight)" strokeWidth="2" fill="none" />
          </g>
        </svg>

        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-7xl relative">
            {/* Absolute badges at the very top corners */}
            <div className="absolute -top-2 left-0 inline-flex items-center gap-2 px-3 py-2 bg-white border border-witfy-500 rounded-full text-xs sm:text-sm">
              <div className="flex -space-x-1">
                <img src="/image-likes-1.png" alt="" className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border border-white object-cover" />
                <img src="/image-likes-2.png" alt="" className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border border-white object-cover" />
                <img src="/image-likes-3.png" alt="" className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border border-white object-cover" />
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-witfy-500">125K+</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="sm:w-4 sm:h-4"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-witfy-500"/></svg>
              </div>
            </div>

            {/* Main Content - Three Columns: Image, Title+Buttons, Description */}
            <div className="grid lg:grid-cols-[auto_1fr_auto] gap-x-0 gap-y-8 items-start mt-4">
              
              {/* LEFT: Image Card */}
              <div className="relative flex items-center justify-center lg:justify-start mt-12 lg:mt-28">
                <div className="relative w-36 md:w-44 transform rotate-[-8deg]">
                  {/* Connected engagement bubble */}
                  <div className="absolute -top-8 left-4 z-10">
                    <div className="bg-witfy-500 text-white px-4 py-2 rounded-full flex items-center gap-4 text-[11px] md:text-xs font-semibold relative shadow-md">
                      <span className="flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4a2 2 0 00-2 2v12a2 2 0 002 2h3l5 4 5-4h3a2 2 0 002-2V4a2 2 0 00-2-2z"/></svg>
                        99
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.22 2.53C11.09 5.01 12.76 4 14.5 4 17 4 19 6 19 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        6K
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5c-7.633 0-10 7-10 7s2.367 7 10 7 10-7 10-7-2.367-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10z"/></svg>
                        1K
                      </span>
                      {/* pointer connecting bubble to image */}
                      <div className="absolute -bottom-2 left-12 w-0 h-0" style={{
                        borderLeft: '7px solid transparent',
                        borderRight: '7px solid transparent',
                        borderTop: '9px solid #8943FE'
                      }}></div>
                    </div>
                  </div>

                  {/* Image with subtle reflection overlay */}
                  <div className="relative">
                    <img
                      src="/social-post-image.png"
                      alt="Social media post"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-lg" style={{ background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 45%)' }}></div>
                  </div>
                </div>
              </div>

              {/* MIDDLE: Title and Buttons */}
              <div className="space-y-6 relative ml-0 lg:ml-20">
                {/* Main Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-witfy-text">
                  Torna a tua <img src="/Dizzy.png" alt="Dizzy" className="inline-block w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 align-middle" /><br />
                  presença digital<br />
                
                  mais <em className="italic relative inline-block">
                    <span className="relative z-10">smart</span>
                    <span className="absolute inset-0 bg-witfy-100 opacity-60 rounded-md -z-0" style={{ 
                      backgroundImage: 'linear-gradient(to right, rgba(137, 67, 254, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(137, 67, 254, 0.1) 1px, transparent 1px)',
                      backgroundSize: '8px 8px'
                    }}></span>
                  </em>.
                </h2>

                {/* Purple Dots */}
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-witfy-500"></div>
                  <div className="h-2 w-2 rounded-full bg-witfy-500"></div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    variant="witfy"
                    size="xl"
                    asChild
                    className="uppercase font-semibold rounded-lg h-12 sm:h-14 px-4 sm:px-8 text-xs sm:text-sm whitespace-normal"
                  >
                    <a href="https://app.witfy.social/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Começa agora com a Witfy
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    onClick={() => scrollToForm()}
                    className="uppercase font-semibold border-2 border-witfy-500 text-witfy-500 hover:bg-witfy-50 rounded-lg h-12 sm:h-14 px-4 sm:px-8 text-xs sm:text-sm whitespace-normal"
                  >
                    Agenda uma demo
                  </Button>
                </div>
                
                {/* Description Text - Show on mobile below buttons */}
                <div className="lg:hidden space-y-4 mt-6">
                  <p className="text-sm text-witfy-500 font-medium">
                    Menos stress, mais likes (e tempo livre).
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#3A3F47' }}>
                    Menos esforço. Mais resultados. Deixa a Witfy cuidar das tuas redes, enquanto tu cuidas do teu negócio.
                  </p>
                </div>
              </div>

              {/* FAR RIGHT: Description Text */}
              <div className="max-w-xs -ml-32 hidden lg:block">
                {/* Top helper text */}
                <p className="text-sm text-witfy-500 font-medium mb-4">
                  Menos stress, mais likes<br/>(e tempo livre).
                </p>
                
                {/* Description */}
                <p className="text-base leading-relaxed" style={{ color: '#3A3F47', marginTop: '80px' }}>
                  Menos esforço. Mais resultados. Deixa a Witfy cuidar das tuas redes, enquanto tu cuidas do teu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    
  )
}

