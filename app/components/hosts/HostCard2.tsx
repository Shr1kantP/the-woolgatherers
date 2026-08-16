import Image from "next/image";

export default function HostCard2() {
  return (
    <div className="panel host-card w-screen md:w-screen h-screen flex-shrink-0 relative overflow-hidden bg-[#5A5532] transition-all duration-300 ease-out">
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-[4vw] py-[6vh]">
        <Image
          src="/images/host_2ndslide.png"
          alt="Different generations and disciplines"
          width={900}
          height={300}
          priority
          className="h-auto w-full max-w-[860px] object-contain"
          style={{ maxWidth: "min(88vw, 860px)" }}
        />
      </div>
    </div>
  );
}
