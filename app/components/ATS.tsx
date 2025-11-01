type Suggestion = { type: "good" | "improve"; tip: string };

const getGradientClass = (score: number) => {
  if (score > 70) return "from-green-100";
  if (score > 49) return "from-yellow-100";
  return "from-red-100";
};

const getStatusIcon = (score: number) => {
  if (score > 70) return "/icons/ats-good.svg";
  if (score > 49) return "/icons/ats-warning.svg";
  return "/icons/ats-bad.svg";
};

const ATS = ({
  score,
  suggestions,
}: {
  score: number;
  suggestions: Suggestion[];
}) => {
  const gradient = getGradientClass(score);
  const statusIcon = getStatusIcon(score);

  const subtitle = score > 70
    ? 'Great job!'
      : score > 49
    ? 'You can do better!' : 'Needs work';

  return (
    <div className={`rounded-2xl shadow-md w-full bg-gradient-to-br ${gradient} to-white p-5`}>
      {/* Top section: icon + headline */}
      <div className="flex items-center gap-4 mb-4">
        <img src={statusIcon} alt="ATS status" className="w-10 h-10" />
        <h3 className="text-2xl font-bold">
          ATS score - {score}/100
        </h3>
      </div>

      {/* Description section */}
      <div className="bg-white/70 rounded-xl p-4">
        <h3 className="text-xl font-semibold mb-2">{subtitle}</h3>
        <p className="text-sm text-gray-500 mt-1">
          Your resume is evaluated for ATS friendliness: structure, keyword usage, and parsing readiness. Use the suggestions below to improve how well your resume gets parsed and matched to job descriptions.
        </p>

        <ul className="mt-4 flex flex-col gap-3">
          {suggestions && suggestions.length > 0 ? (
            suggestions.map((s, idx) => (
              <li key={`${s.tip}-${idx}`} className="flex items-start gap-3">
                <img
                  src={s.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"}
                  alt={s.type === "good" ? "Good" : "Improve"}
                  className="w-5 h-5 mt-0.5"
                />
                <span className={s.type === "good" ? "text-gray-800" : "text-gray-800"}>
                  {s.tip}
                </span>
              </li>
            ))
          ) : (
            <li className="text-sm text-gray-500">No ATS suggestions available.</li>
          )}
        </ul>

        <p className="text-sm text-gray-600 mt-4">
          Keep iterating — small tweaks to formatting and keywords can significantly boost ATS compatibility.
        </p>
      </div>
    </div>
  );
};

export default ATS;