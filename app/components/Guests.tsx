"use client";

const logos = [
  "/images/Guests/cureveda.png",
  // "/images/Guests/gap.png",
  "/images/Guests/chrian-tea.png",
  "/images/Guests/country-bean.webp",
  "/images/Guests/jimmys.png",
  "/images/Guests/mtr.png",
  "/images/Guests/nua.png",
  "/images/Guests/peps.png",
  "/images/Guests/sathi.png",
  "/images/Guests/sfs.png",
  "/images/Guests/vahdam.png",
  "/images/Guests/wingreens.png",
  "/images/detailed_page/SIE_BRANDING/SIE-branding-logo.PNG",
];

const logoNames = [
  "Cureveda",
  "Chrian Tea",
  "Country Bean",
  "Jimmy's",
  "MTR",
  "NUA",
  "PEPS",
  "Sathi",
  "SFS",
  "Vahdam",
  "Wingreens",
  "SIE Branding",
];

function LogoTrack({ reverse = false }: { reverse?: boolean }) {
  const trackLogos = [...logos, ...logos];

  return (
    <div className={`resident-logo-row ${reverse ? "resident-logo-row--reverse" : ""}`}>
      <div className="resident-logo-track">
        {trackLogos.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt={`${logoNames[index % logos.length]} logo`}
            className="resident-logo"
          />
        ))}
      </div>
    </div>
  );
}

export default function Guests() {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] bg-[#220319] overflow-hidden select-none">
      {/* Top right "Drag to Explore" tag */}
    
      <div className="absolute inset-0 z-10 pointer-events-none">
        <h2
          className="font-semibold uppercase text-[#FAF9F6] text-center flex items-center justify-center h-full w-full mx-auto max-w-7xl px-4 py-8 md:px-10 md:py-20"
          style={{
            letterSpacing: "0.02em",
            fontFamily: '"Jersey 15", serif',
            fontSize: "clamp(40px, 12vw, 98px)",
            lineHeight: 1.05,
          }}
        >
        Few Of Our Residents
        </h2>
      </div>
      <div className="absolute inset-0 z-10 flex flex-col justify-between py-[12vh] md:py-[15vh]">
        <LogoTrack />
        <LogoTrack reverse />
      </div>

      <style>{`
        .resident-logo-row {
          width: 100%;
          overflow: hidden;
          pointer-events: auto;
        }

        .resident-logo-track {
          display: flex;
          width: max-content;
          align-items: center;
          gap: clamp(3.5rem, 10vw, 11rem);
          animation: residents-left-to-right 32s linear infinite;
        }

        .resident-logo-row--reverse .resident-logo-track {
          animation-name: residents-right-to-left;
        }

        .resident-logo {
          width: clamp(7rem, 15vw, 13rem);
          height: clamp(3.5rem, 7vw, 6rem);
          flex: 0 0 auto;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.72;
          transition: filter 300ms ease, opacity 300ms ease, transform 300ms ease;
        }

        .resident-logo:hover,
        .resident-logo:focus-visible {
          filter: grayscale(0);
          opacity: 1;
          transform: scale(1.08);
        }

        @keyframes residents-left-to-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        @keyframes residents-right-to-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .resident-logo-track { animation-play-state: paused; }
        }
      `}</style>
    </section>
  );
}
