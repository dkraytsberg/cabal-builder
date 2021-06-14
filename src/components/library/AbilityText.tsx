import React from "react";

interface AbilityTextProps {
  readonly text: string;
}

const AbilityText: React.FC<AbilityTextProps> = ({ text }) => {
  return <p className="AbilityText">{text}</p>;
};

export default AbilityText;
