//Functional example
import '../style/characterCard.css'
import { Character } from "../data/characterData";

type CharacterTypes = {
  character: Character;
};

export function CharacterCard({
  character: { name, nickName, imageUrl, background },
}: CharacterTypes) {
  return(
  <div key={name} className="card">
    {/* <!-- Card # --> */}
    <div className="card-titles">
      {/* <!-- name --> */}
      <h3>{name}</h3>
      {/* <!-- nickname --> */}
      {nickName && <h4>{nickName}</h4>}
    </div>
    {/* <!-- imageUrl --> */}
    <img src={imageUrl} alt="" />
    {/* <!-- description --> */}
    <p>{background}</p>
  </div>)
}
