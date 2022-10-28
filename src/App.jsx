import "./App.css";
import { useEffect, useState } from "react";
import { getTooltipData } from "./utils/apiRequests";
import Ability from "./components/Abilities/Ability";
import Item from "./components/Items/Item";
import Runes from "./components/Runes/Runes";
import ReactTooltip from "react-tooltip";
import SummonerSpell from "./components/Summoners/SummonerSpell";

const abilityBuilder = ['Passive', 'Q', 'W', 'E', 'R']
const summonersBuilder = ['summoner1', 'summoner2']

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
          </ul>
            
          <ul className="champ-abilities_summoners">
            {
              summonersBuilder.map((sum, index) => 
                <SummonerSpell
                  key={index}
                  dataTip={sum}
                  summonerSpellData={summonerData?.summonerSpells[index]}
                />
              )
            }
          </ul>
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
