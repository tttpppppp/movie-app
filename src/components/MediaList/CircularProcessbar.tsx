const CircularProcessbar = ({
  percent,
  size,
  strokeColor = "green",
}: {
  percent: number;
  size: number;
  strokeColor: string;
}) => {
  return (
    <div>
      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle
          cx="25px"
          cy="25px"
          r="20px"
          stroke="white"
          strokeWidth="5"
          fill="none"
        />
        <circle
          cx="25px"
          cy="25px"
          r="20px"
          stroke={strokeColor}
          strokeWidth="5"
          fill="none"
          strokeDasharray="125.65"
          strokeDashoffset={125.65 - (percent / 100) * 125.65}
          transform="rotate(-90 25 25)"
          strokeLinecap="round"
        />
        <text
          x="25"
          y="28"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize="20"
          fill="white"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProcessbar;
