function Loader({ text = "Loading movies..." }) {
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-4">
      <svg className="w-14 h-14" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="90 150"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>

        <defs>
          <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9747FF" />
            <stop offset="100%" stopColor="#FACC15" />
          </linearGradient>
        </defs>
      </svg>

      <p className="text-sm tracking-wide text-yellow-50/80">{text}</p>
    </div>
  );
}

export default Loader;
