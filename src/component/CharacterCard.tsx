//Functional example
import "../style/characterCard.css";
import { Character } from "../data/characterData";

type CharacterCardProp = {
  character: Character[];
};
export function CharacterCard({ character }: CharacterCardProp) {
  const cardElements = character.map((card: Character) => (
    <div key={card.name} className="card">
      <div className="card-titles">
        <h3>{card.name}</h3>
        {card.nickName && <h4>{card.nickName}</h4>}
      </div>
      <img src={card.imageUrl} alt="" />
      <p>{card.background}</p>
    </div>
  ));
  return <section id="character-cards">{cardElements}</section>;
}
