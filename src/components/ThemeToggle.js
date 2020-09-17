import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import styled from "@emotion/styled";

const Switch = styled.label`
  position: relative;
  display: flex;
  height: 20px;
  width: 31px;
  margin: auto;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--copy);
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 4px;
    bottom: 4px;
    background-color: var(--bg);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--copy);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--copy);
  }

  input:checked + .slider:before {
    transform: translateX(12px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default class ThemeToggle extends React.Component {
  render() {
    return (
      <div style={{ width: "10%" }}>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <Switch>
              <input
                type="checkbox"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? "dark" : "light")
                }
                checked={theme === "dark"}
              />{" "}
              <span className="slider round"></span>
            </Switch>
          )}
        </ThemeToggler>
      </div>
    );
  }
}
