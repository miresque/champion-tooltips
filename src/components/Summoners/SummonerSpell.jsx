import React, { useEffect } from "react";
import { MoonLoader } from "react-spinners";
import ReactTooltip from "react-tooltip";
import ToolTip from "./Tooltip";

const SummonerSpell = ({ dataTip, summonerSpellData }) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  }, [summonerSpellData, dataTip]);

  return (
    <li className={dataTip + "-wrapper"}>
      <p
        className={dataTip}
        data-for={dataTip + "-tooltip_wrapper"}
        data-tip={dataTip}
      ></p>
      <ReactTooltip
        id={dataTip + "-tooltip_wrapper"}
        getContent={dataTip =>
          summonerSpellData ? (
            <ToolTip
             dataTip={dataTip} 
             summonerSpellData={summonerSpellData}
            />
          ) : (
            <>
              <p>Fetching game data...</p>
              <MoonLoader color="#36d7b7" size={30} />
            </>
          )
        }
        effect="solid"
      />
    </li>
  );
};

export default SummonerSpell;
