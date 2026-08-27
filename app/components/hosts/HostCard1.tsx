export default function HostCard1() {
  return (
    <div className="panel host-card w-screen md:w-screen h-screen flex-shrink-0 relative overflow-hidden bg-[#3F022F] transition-all duration-300 ease-out">
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h2
          className="text-center leading-[0.8] tracking-[-0.09em]"
          style={{
            fontFamily: 'var(--font-jersey-15), "Jersey 15", sans-serif',
            fontSize: "clamp(3rem, 14vw, 12rem)",
            fontWeight: 200,
            color: "#FBCE6E",
          }}
        >
          <span className="inline-block ml-4 sm:ml-6 md:ml-10 tracking-normal">THE HOSTS</span>
        </h2>
      </div>
    </div>
  );
}
