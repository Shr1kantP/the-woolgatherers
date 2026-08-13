import Image from "next/image";

export default function HostCard4() {
  return (
    <div className="panel host-card w-screen h-screen flex-shrink-0 relative overflow-hidden bg-[#FBCE6E] transition-all duration-300 ease-out">
      <div className="absolute inset-x-0 top-0 flex justify-center pt-[8vh] px-[6vw]">
        <div className="w-[78vw] max-w-[1200px] bg-transparent">
          <Image
            src="/images/host_4thslide.jpg"
            alt="Geometric host collage"
            width={1200}
            height={900}
            className="h-[450px] w-full object-cover"
            priority
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[16vh] flex items-end justify-center px-[6vw]">
        <p
          className="text-center leading-[0.85] tracking-[-0.06em]"
          style={{
            color: "#3F022F",
            fontFamily: '"Inter", "Segoe UI", sans-serif',
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "43px",
          }}
        >
          Behind every stay is a different perspective.
        </p>
      </div>

      <div className="absolute bottom-[3.5rem] right-[3.5rem] text-hosts-plum text-[clamp(2rem,3vw,4rem)] leading-none">
        →
      </div>
    </div>
  );
}
