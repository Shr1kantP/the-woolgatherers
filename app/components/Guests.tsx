"use client";

const logos = [
  "/images/Guests/vahdam-white.webp",
  "/images/Guests/cureveda.png",
  // "/images/Guests/gap.png",
  "/images/Guests/chrian-tea.png",
  "/images/Guests/country-bean.webp",
  "/images/Guests/mtr.png",
  "/images/Guests/jimmys.png",
  "/images/Guests/nua.png",
  "/images/Guests/sathi.png",
  "/images/Guests/peps.png",
  "/images/Guests/wingreens.png",
  "/images/Guests/sfs.png",
  /*  "/images/Guests/sie-full.PNG", */
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
            className={`resident-logo ${src.includes("cureveda") || src.includes("jimmys")
                ? `resident-logo--small ${src.includes("cureveda") ? "resident-logo--spaced" : ""
                }`
                : src.includes("chrian-tea") ||
                  src.includes("/mtr.") ||
                  src.includes("/sathi.") ||
                  src.includes("/wingreens.")
                  ? "resident-logo--large"
                  : ""
              } ${src.includes("chrian-tea") || src.includes("country-bean")
                ? "resident-logo--spaced"
                : ""
              } ${src.includes("/sathi.") || src.includes("country-bean") || src.includes("vahdam") ? "resident-logo--white" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Guests() {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[90vh] select-none"
      style={{
        background: "linear-gradient(to bottom, #1D0121 0%, #1D0121 8%, #220319 28%, #220319 100%)",
      }}
    >
      {/* Top right "Drag to Explore" tag */}

      <div className="absolute inset-0 z-10 pointer-events-none">
        <h2
          className="font-semibold uppercase text-[#F5E9D0] text-center flex items-center justify-center h-full w-full mx-auto max-w-7xl px-4 py-8 md:px-10 md:py-20"
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
      <div className="absolute inset-0 z-10 flex flex-col justify-between py-[12vh] md:py-[15vh] pointer-events-none">
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
          gap: 0;
          animation: residents-left-to-right 55s linear infinite;
        }

        .resident-logo-row--reverse .resident-logo-track {
          animation-name: residents-right-to-left;
          animation-delay: -27.5s;
        }

        .resident-logo {
          width: clamp(7rem, 15vw, 13rem);
          height: clamp(3.5rem, 7vw, 6rem);
          flex: 0 0 auto;
          object-fit: contain;
          filter: grayscale(0);
          
          opacity: 0.72;
          transition: filter 300ms ease, opacity 300ms ease, transform 300ms ease;
        }

        .resident-logo:not(:first-child) {
          margin-left: clamp(-2rem, -3vw, -0.75rem);
        }

        .resident-logo--spaced {
          margin-left: clamp(1rem, 3vw, 3rem) !important;
        }

        .resident-logo--large {
          width: clamp(9rem, 19vw, 16rem);
          height: clamp(4.5rem, 9vw, 7.5rem);
        }

        .resident-logo--small {
          width: clamp(5.5rem, 11vw, 9.5rem);
          height: clamp(2.75rem, 5.5vw, 4.5rem);
        }

        .resident-logo--white {
          filter: brightness(0) invert(1);
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
