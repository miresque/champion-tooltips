import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

const ToolTip = ({ dataTip, abilityData }) => {
  const [ability, setAbility] = useState({});
  useEffect(() => {
    console.log("testingas testin", ability);
    setAbility(abilityData);
    ReactTooltip.rebuild();
  }, [abilityData]);
  return (
    <div className={"tooltip-" + dataTip?.toLowerCase()}>
      <h3>{ability.name + " (" + dataTip + ")"}</h3>
      {dataTip !== 'Passive' && (
        <>
          <p className="manacost">{"Cost " + ability.costBurn}</p>
          <p className="cooldown">{"Cooldown " + ability.cooldownBurn}</p>
        </>
      )}
    </div>
  );
};

export default ToolTip;
