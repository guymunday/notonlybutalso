import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

export default class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label style={{display: "block", width: "10%"}}>
            <input
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            Dark mode
          </label>
        )}
      </ThemeToggler>
    );
  }
}
