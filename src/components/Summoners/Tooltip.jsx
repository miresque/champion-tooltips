import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { getSpellIconUrl } from "../../utils/apiRequests";

const ToolTip = ({ dataTip, summonerSpellData }) => {
  const [summonerSpell, setSummonerSpell] = useState({});
  const spellIconUrl = getSpellIconUrl(summonerSpellData.image.full, dataTip);

  useEffect(() => {
    console.log("testingas testin", summonerSpell);
    setSummonerSpell(summonerSpellData);
    ReactTooltip.rebuild();
  }, [summonerSpellData]);

  return (
    <div className={"tooltip-" + dataTip?.toLowerCase()}>
      <img src={spellIconUrl} alt={summonerSpell.name + " icon"} />
      <h3>
        {summonerSpell.name +
          " (" +
          (dataTip === "summoner1" ? "Summoner Spell 1" : "Summoner Spell 2") +
          ")"}
      </h3>
      {dataTip !== "Passive" && (
        <>
          <p className="manacost">No Cost</p>
          <p className="cooldown">
            {"Cooldown: " + summonerSpell.cooldownBurn}
          </p>
        </>
      )}
      <p className="spell-description">{summonerSpell.description}</p>
    </div>
  );
};

export default ToolTip;
