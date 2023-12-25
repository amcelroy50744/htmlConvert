//Class example
import "../style/characterRatings.css";
import { Component } from "react";
import { Character, sortCharacterCard } from "../data/characterData";

type PropTypes = {
  character: Character[];
};

export class CharacterRatings extends Component<PropTypes> {
  render() {
    const characterElement = this.props.character
      .slice()
      .sort(sortCharacterCard)
      .slice(0, 5)
      .map((card, index) => (
        <tr key={card.name} className={index % 2 === 0 ? "dark" : "light"}>
          <td>{card.name}</td>
          <td>{card.skillset}</td>
          <td>{card.votes}</td>
        </tr>
      ));
    return (
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>{characterElement}</tbody>
        </table>
      </section>
    );
  }
}
