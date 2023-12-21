import { Component } from "react";
import "../style/header.css";

export class HeaderClass extends Component {
  render() {
    return (
      <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
          <li>about us</li>
          <li>info</li>
          <li>support us</li>
        </nav>
      </header>
    );
  }
}