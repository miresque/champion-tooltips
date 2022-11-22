import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { getSpellIconUrl } from "../../utils/apiRequests";

const ToolTip = ({ dataTip, summonerSpellData }) => {
  const [summonerSpell, setSummonerSpell] = useState({});
  const spellIconUrl = getSpellIconUrl(summonerSpellData.image.full, dataTip);

  useEffect(() => {
    setSummonerSpell(summonerSpellData);
    ReactTooltip.rebuild();
    // eslint-disable-next-line
  }, [summonerSpellData]);

  return (
    <div className="tooltip">
      <header className="tooltip-header">
        <img src={spellIconUrl} alt={summonerSpell.name + " icon"} />
        <div>
          <h4>
            {summonerSpell.name +
              " (" +
              (dataTip === "summoner1" ? "Summoner Spell 1" : "Summoner Spell 2") +
              ")"}
          </h4>
          {dataTip !== "Passive" && (
            <>
              <p className="manacost">No Cost</p>
              <p className="cooldown">
                {"Cooldown: " + summonerSpell.cooldownBurn}
              </p>
            </>
          )}
        </div>
      </header>
      <main className="tooltip-main">
        <p className="spell-description">{summonerSpell.description}</p>
      </main>
    </div>
  );
};

export default ToolTip;
