//Class example
import "../style/characterRatings.css";
import { Component } from "react";
import { Character, IsThemeDark, DarkLightToggle } from "../data/characterData";

type PropTypes = {
  character: Character;
};

export class CharacterRatings extends Component<PropTypes> {
  render() {
    const { name, skillset, votes } = this.props.character;
    return (
      //format table to light and dark themes
      <tr className={IsThemeDark(DarkLightToggle)}>
        <td>{name}</td>
        <td>{skillset}</td>
        <td>{votes}</td>
      </tr>
    );
  }
}
