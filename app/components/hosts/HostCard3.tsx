export default function HostCard3() {
  return (
    <div className="panel host-card w-screen md:w-screen h-screen flex-shrink-0 relative overflow-hidden bg-[#5D1515] ease-out">
      <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10">
        <blockquote
          className="text-center uppercase leading-[0.82] tracking-[-0.05em]"
          style={{
            fontFamily: '"Instrument Serif", "Times New Roman", serif',
            fontStyle: "italic",
            fontSize: "clamp(28px, 7vw, 99px)",
            lineHeight: 0.88,
            color: "#FBCE6E",
          }}
        >
          {"IT'S IN THE CONVERSATION"}
          <br />
          {"BETWEEN THEM THAT OUR"}
          <br />
          {"BEST WORK BEGINS."}
        </blockquote>
      </div>

      {/* Navigation arrows — kept in corners but with safe min inset */}
      <div
        className="absolute text-[#FBCE6E] leading-none"
        style={{
          bottom: "clamp(1.25rem, 4vh, 3.5rem)",
          left: "clamp(1.25rem, 4vw, 3.5rem)",
          fontSize: "clamp(1.5rem, 3vw, 4rem)",
        }}
        aria-hidden="true"
      >
        ←
      </div>
      <div
        className="absolute text-[#FBCE6E] leading-none"
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
