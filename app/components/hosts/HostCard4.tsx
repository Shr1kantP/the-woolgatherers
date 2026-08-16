import Image from "next/image";

export default function HostCard4() {
  return (
    <div className="panel host-card w-screen md:w-screen h-screen flex-shrink-0 relative overflow-hidden bg-[#FBCE6E] transition-all duration-300 ease-out">
      <div className="absolute inset-x-0 top-0 flex justify-center pt-[6vh] px-4 sm:px-[6vw]">
        <div className="w-full max-w-[1200px]" style={{ maxWidth: "min(90vw, 1200px)" }}>
          <Image
            src="/images/host_4thslide.jpg"
            alt="Geometric host collage"
            width={1200}
            height={900}
            className="w-full object-cover"
            style={{ height: "clamp(160px, 38vh, 450px)" }}
            priority
          />
        </div>
      </div>

      <div
        className="absolute inset-x-0 flex items-end justify-center px-4 sm:px-[6vw]"
        style={{ bottom: "clamp(4rem, 18vh, 20vh)" }}
      >
        <p
          className="text-center leading-[0.85] tracking-[-0.06em]"
          style={{
            color: "#3F022F",
            fontFamily: '"Inter", "Segoe UI", sans-serif',
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(18px, 3.5vw, 43px)",
            maxWidth: "min(90vw, 820px)",
          }}
        >
          Behind every stay is a different perspective.
        </p>
      </div>

      <div
        className="absolute text-[#3F022F] leading-none"
        style={{
          bottom: "clamp(1.25rem, 4vh, 3.5rem)",
          right: "clamp(1.25rem, 4vw, 3.5rem)",
          fontSize: "clamp(1.5rem, 3vw, 4rem)",
        }}
        aria-hidden="true"
      >
        →
      </div>
    </div>
  );
}
