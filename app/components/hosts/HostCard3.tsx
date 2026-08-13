export default function HostCard3() {
  return (
    <div className="panel host-card w-screen h-screen flex-shrink-0 relative overflow-hidden bg-[#5D1515] ease-out">
      <div className="absolute inset-0 flex items-center justify-center">
        <blockquote
          className="text-hosts-mustard text-center uppercase leading-[0.82] tracking-[-0.05em]"
          style={{
            fontFamily: '"Instrument Serif", "Times New Roman", serif',
            fontStyle: "italic",
            fontSize: "99px",
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

      <div className="absolute bottom-[3.5rem] left-[3.5rem] text-hosts-mustard text-[clamp(2rem,3vw,4rem)] leading-none">
        ←
      </div>
      <div className="absolute bottom-[3.5rem] right-[3.5rem] text-hosts-mustard text-[clamp(2rem,3vw,4rem)] leading-none">
        →
      </div>
    </div>
  );
}
