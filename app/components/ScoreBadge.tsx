import React from "react";

type ScoreBadgeProps = {
  score: number;
};

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let label = "";
  let badgeClass = "";
  let textClass = "";

  if (score > 70) {
    label = "Strong";
    badgeClass = "bg-badge-green text-green-600";
  } else if (score > 49) {
    label = "Good Start";
    badgeClass = "bg-badge-yellow text-yellow-600";
  } else {
    label = "Needs Work";
    badgeClass = "bg-badge-red text-red-600";
  }

  return (
    <div className={`rounded-full px-3 py-1 ${badgeClass}`}>
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default ScoreBadge;
