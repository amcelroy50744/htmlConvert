import "./style/reset.css";
import "./style/App.css";
import { data, sortCharacterCard } from "./data/characterData";
import { CharacterRatings } from "./component/CharacterRating";
import { HeaderClass } from "./component/HeaderClass";
import { CharacterCard } from "./component/CharacterCard";

export function App() {
  return (
    <>
      <HeaderClass />
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>SkillSet</th>
            <th>Votes</th>
          </tr>
          {data
            .slice()
            .sort(sortCharacterCard)
            .slice(0, 5)
            .map((card) => (
              <CharacterRatings key={card.name} character={card} />
            ))}
        </table>
      </section>
      <section id="character-cards">
        {data.map((card) => (
          <CharacterCard key={card.name} character={card} />
        ))}
      </section>
    </>
  );
}
