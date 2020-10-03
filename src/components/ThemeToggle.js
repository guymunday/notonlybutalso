import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import styled from "@emotion/styled";

const Switch = styled.label`
  position: fixed;
  top: 14px;
  left: 16px;
  z-index: 999;
  display: flex;
  height: 15px;
  width: 25px;
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
    box-shadow: var(--shadow);
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 9px;
    width: 9px;
    left: 3px;
    bottom: 3.5px;
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
    transform: translateX(10px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 30px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default class ThemeToggle extends React.Component {
  render() {
    return (
      <div>
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
