export const WaveBackground = () => {
  return (
    <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
      <svg
        className="absolute top-0 left-0 h-[800px] w-full"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0 0H1440V600C1440 600 1100 800 720 700C340 600 0 800 0 800V0Z" fill="#F2E6EA" />
      </svg>
    </div>
  );
};
