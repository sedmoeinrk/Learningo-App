import React from "react";
import { Button } from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider, useTheme } from "./ThemeContext";

interface Props {
  className: string;
}

const ThemeToggler: React.FC<Props> = props => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider>
      <div
        className={`${props.className} flex items-center justify-center ${
          theme === "dark" ? "dark" : ""
        }`}
      >
        <div>
          <Button onClick={toggleTheme} className="shadow-xl">
            {theme === "dark" ? (
              <FontAwesomeIcon icon={faLightbulb} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ThemeToggler;
