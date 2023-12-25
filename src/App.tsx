import "./style/reset.css";
import "./style/App.css";
import { characters } from "./data/characterData";
import { CharacterRatings } from "./component/CharacterRating";
import { HeaderClass } from "./component/HeaderClass";
import { CharacterCard } from "./component/CharacterCard";

export function App() {
  return (
    <>
      <HeaderClass />
      <CharacterRatings character={characters} />
      <CharacterCard character={characters} />
    </>
  );
}
