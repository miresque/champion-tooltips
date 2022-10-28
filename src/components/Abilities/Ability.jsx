import React, { useEffect } from "react";
import { MoonLoader } from "react-spinners";
import ReactTooltip from "react-tooltip";
import ToolTip from "./Tooltip";

const Ability = ({ index, dataTip, abilityData }) => {
  useEffect(() => {
    ReactTooltip.rebuild();
  }, [abilityData, dataTip, index]);

  return (
    <li className={"spell" + dataTip + "-wrapper"}>
      <p
        className={"spell" + dataTip}
        data-for={"spell" + dataTip + "-tooltip_wrapper"}
        data-tip={dataTip}
      ></p>
      <ReactTooltip
        id={"spell" + dataTip + "-tooltip_wrapper"}
        getContent={dataTip =>
          abilityData ? (
            <ToolTip
             dataTip={dataTip} 
             abilityData={abilityData}
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

export default Ability;
