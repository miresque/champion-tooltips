import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { getSpellIconUrl } from "../../utils/apiRequests";

const ToolTip = ({ dataTip, abilityData }) => {
  const [ability, setAbility] = useState({});
  const spellIconUrl = getSpellIconUrl(abilityData.image.full, dataTip);

  useEffect(() => {
    console.log("testingas testin", ability);
    setAbility(abilityData);
    ReactTooltip.rebuild();
  }, [abilityData]);

  return (
    <div className={"tooltip-" + dataTip?.toLowerCase()}>
      <img src={spellIconUrl} alt={ability.name + " icon"} />
      <h3>{ability.name + " (" + dataTip + ")"}</h3>
      {dataTip !== "Passive" && (
        <>
          <p className="manacost">{"Cost: " + ability.costBurn}</p>
          <p className="cooldown">{"Cooldown: " + ability.cooldownBurn}</p>
        </>
      )}
      <p className="spell-description">{ability.description}</p>
    </div>
  );
};

export default ToolTip;
