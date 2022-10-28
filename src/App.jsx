import "./App.css";
import { useEffect, useState } from "react";
import { getTooltipData } from "./utils/apiRequests";
import Ability from "./components/AbilityTooltip/Ability";
import Item from "./components/ItemTooltip/Item";
import Runes from "./components/RunesTooltip/Runes";
import ReactTooltip from "react-tooltip";

const abilityBuilder = ['Passive', 'Q', 'W', 'E', 'R']

function App() {
  const [summonerData, setSummonerData] = useState(null)

  useEffect(() => {
    getTooltipData()
      .then(data => setSummonerData(data))
  }, [])
  
  useEffect(() => {
    console.log('summonerData', summonerData)
    ReactTooltip.rebuild();
  }, [summonerData])

  return (
    <div className="App">
      <nav className="champ-hud">
        <div className="champ-runes">
          <p
            className="runes"
            data-for="runes-tooltip_wrapper"
            data-tip="Passive"
            data-event='click '
          ></p>
          <ReactTooltip
            id="runes-tooltip_wrapper"
            getContent={dataTip => <Runes dataTip={dataTip} />}
            effect="solid"
            globalEventOff='click'
            place={'left'}
          />
        </div>

        <div className="champ-abilities">
          <ul className="champ-abilities_spells">
            {
              abilityBuilder.map((ab, index) => 
                <Ability
                 key={index} 
                 index={index} 
                 dataTip={ab} 
                 abilityData={
                  index === 0
                  ? 
                  summonerData?.abilities.passive
                  :
                  summonerData?.abilities.spells[index - 1]
                 } 
                />
              )
            }
            {/* <li className="spellPassive-wrapper">
              <p
                className="spellPassive"
                data-for="spellMinor-tooltip_wrapper"
                data-tip="Passive"
              ></p>
              <ReactTooltip
                id="spellMinor-tooltip_wrapper"
                getContent={dataTip => <Ability dataTip={dataTip} abilityData={summonerData?.abilities} />}
                effect="solid"
              />
            </li>
            <li className="spellQ-wrapper">
              <p
                className="spellQ"
                data-for="spell-tooltip_wrapper"
                data-tip="Q"
              ></p>
              <ReactTooltip
                id="spell-tooltip_wrapper"
                getContent={dataTip => <Ability dataTip={dataTip} />}
                effect="solid"
              />
            </li>
            <li className="spellW-wrapper">
              <p
                className="spellW"
                data-for="spell-tooltip_wrapper"
                data-tip="W"
              ></p>
              <ReactTooltip
                id="spell-tooltip_wrapper"
                getContent={dataTip => <Ability dataTip={dataTip} />}
                effect="solid"
              />
            </li>
            <li className="spellE-wrapper">
              <p
                className="spellE"
                data-for="spell-tooltip_wrapper"
                data-tip="E"
              ></p>
              <ReactTooltip
                id="spell-tooltip_wrapper"
                getContent={dataTip => <Ability dataTip={dataTip} />}
                effect="solid"
              />
            </li>
            <li className="spellR-wrapper">
              <p
                className="spellR"
                data-for="spell-tooltip_wrapper"
                data-tip="R"
              ></p>
              <ReactTooltip
                id="spell-tooltip_wrapper"
                getContent={dataTip => <Ability dataTip={dataTip} />}
                effect="solid"
              />
            </li> */}
          </ul>
          {/* <ul className="champ-abilities_summoners">
            <li className="summoner1-wrapper">
              <p
                className="summoner1"
                data-for="spellMinor-tooltip_wrapper"
                data-tip="Summoner"
              ></p>
              <ReactTooltip
                id="spellMinor-tooltip_wrapper"
                getContent={dataTip => <Ability dataTip={dataTip} />}
                effect="solid"
              />
            </li>
            <li className="summoner2-wrapper">
              <p
                className="summoner2"
                data-for="spellMinor-tooltip_wrapper"
                data-tip="Summoner"
              ></p>
              <ReactTooltip
                id="spellMinor-tooltip_wrapper"
                getContent={dataTip => <Ability dataTip={dataTip} />}
                effect="solid"
              />
            </li>
          </ul> */}
        </div>

        <div className="champ-inventory">
          <ul className="champ-inventory_items">
            <li className="item-slot1">
              <Item />
            </li>
            <li className="item-slot2">
              <Item />
            </li>
            <li className="item-slot3">
              <Item />
            </li>
            <li className="item-slot4">
              <Item />
            </li>
            <li className="item-slot5">
              <Item />
            </li>
            <li className="item-slot6">
              <Item />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
