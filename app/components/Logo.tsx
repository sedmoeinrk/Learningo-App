import { ThemeProvider, useTheme } from "../providers/theme";

interface Props {
  className: string;
}

const Logo: React.FC<Props> = props => {
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <div className={`${props.className}`}>
        <img
          src={`
        ${theme !== "light" ? "/images/Logo-dark.svg" : "/images/Logo.svg"}`}
          alt="logo here"
        />
      </div>
    </ThemeProvider>
  );
};

export default Logo;
