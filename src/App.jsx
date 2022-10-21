import "./App.css";
import Ability from "./components/AbilityTooltip/Ability";
import Item from "./components/ItemTooltip/Item";
import Runes from "./components/RunesTooltip/Runes";

function App() {
  return (
    <div className="App">
      <nav className="champ-hud">

          <div className="champ-runes">
            <Runes />
          </div>

          <div className="champ-abilities">
            <ul className="champ-abilities_spells">
              <li className="spellPassive"><Ability /></li>
              <li className="spellQ"><Ability /></li>
              <li className="spellW"><Ability /></li>
              <li className="spellE"><Ability /></li>
              <li className="spellR"><Ability /></li>
            </ul>
            <ul className="champ-abilities_summoners">
              <li className="summoner1"><Ability /></li>
              <li className="summoner2"><Ability /></li>
            </ul>
          </div>

          <div className="champ-inventory">
            <ul className="champ-inventory_items">
              <li className="item-slot1"><Item /></li>
              <li className="item-slot2"><Item /></li>
              <li className="item-slot3"><Item /></li>
              <li className="item-slot4"><Item /></li>
              <li className="item-slot5"><Item /></li>
              <li className="item-slot6"><Item /></li>
            </ul>
          </div>

      </nav>
    </div>
  );
}

export default App;
