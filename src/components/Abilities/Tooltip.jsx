import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { getSpellIconUrl } from "../../utils/apiRequests";

const ToolTip = ({ dataTip, abilityData }) => {
  const [ability, setAbility] = useState({});
  const spellIconUrl = getSpellIconUrl(abilityData.image.full, dataTip);

  useEffect(() => {
    setAbility(abilityData);
    ReactTooltip.rebuild();
    // eslint-disable-next-line
  }, [abilityData]);

  return (
    <div className="tooltip">
      <header className="tooltip-header">
        <img src={spellIconUrl} alt={ability.name + " icon"} />
        <div>
          <h4>{ability.name + " (" + dataTip + ")"}</h4>
          {dataTip !== "Passive" && (
            <>
              <p className="manacost">{"Cost: " + ability.costBurn}</p>
              <p className="cooldown">{"Cooldown: " + ability.cooldownBurn}</p>
            </>
          )}
        </div>
      </header>
      <main className="tooltip-main">
        <p className="spell-description">{ability.description}</p>
      </main>
    </div>
  );
};

export default ToolTip;
