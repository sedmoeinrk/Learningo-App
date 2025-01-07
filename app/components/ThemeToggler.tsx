import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faMoon,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider, useTheme } from "../providers/theme";

interface Props {
  className: string;
}

const ThemeToggler: React.FC<Props> = props => {
  const { theme, setTheme } = useTheme();

  const themeChanger = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as "light" | "dark" | "system");
  };

  return (
    <ThemeProvider>
      <div
        className={`${props.className} flex items-center justify-center ${
          theme === "dark" ? "dark" : ""
        }`}
      >
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="">
              <Button className="">
                {theme === "light" && <FontAwesomeIcon icon={faLightbulb} />}
                {theme === "dark" && <FontAwesomeIcon icon={faMoon} />}
                {theme === "system" && <FontAwesomeIcon icon={faLaptop} />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary/70 text-primary-foreground outline-none border-none justify-center min-w-20">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ThemeToggler;
