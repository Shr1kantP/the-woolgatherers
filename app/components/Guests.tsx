"use client";

const residents = [
  { src: "/images/guests/vahdam-white.webp", name: "Vahdam", id: "vahdam" },
  { src: "/images/guests/cureveda.webp", name: "Cureveda", id: "cureveda" },
  { src: "/images/guests/chrian-tea.webp", name: "Chrian Tea", id: "chrian-tea" },
  { src: "/images/guests/country-bean.webp", name: "Country Bean", id: "country-bean" },
  { src: "/images/guests/mtr.webp", name: "MTR", id: "mtr" },
  { src: "/images/guests/jimmys.webp", name: "Jimmy's", id: "jimmys" },
  { src: "/images/guests/nua.webp", name: "NUA", id: "nua" },
  { src: "/images/guests/sathi.webp", name: "Sathi", id: "sathi" },
  { src: "/images/guests/peps.webp", name: "PEPS", id: "peps" },
  { src: "/images/guests/wingreens.webp", name: "Wingreens", id: "wingreens" },
  { src: "/images/guests/sfs.webp", name: "SFS", id: "sfs" },
];

function LogoTrack({ reverse = false }: { reverse?: boolean }) {
  const trackLogos = [...residents, ...residents];

  return (
    <div className={`resident-logo-row ${reverse ? "resident-logo-row--reverse" : ""}`}>
      <div className="resident-logo-track">
        {trackLogos.map((resident, index) => (
          <img
            key={`${resident.id}-${index}`}
            src={resident.src}
            alt={`${resident.name} logo`}
            className={`resident-logo ${
              resident.id === "cureveda" || resident.id === "jimmys"
                ? `resident-logo--small ${resident.id === "cureveda" ? "resident-logo--spaced" : ""}`
                : resident.id === "chrian-tea" ||
                  resident.id === "mtr" ||
                  resident.id === "sathi" ||
                  resident.id === "wingreens"
                ? "resident-logo--large"
                : ""
            } ${
              resident.id === "chrian-tea" || resident.id === "country-bean"
                ? "resident-logo--spaced"
                : ""
            } ${
              resident.id === "sathi" || resident.id === "country-bean" || resident.id === "vahdam"
                ? "resident-logo--white"
                : ""
            }`}
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
