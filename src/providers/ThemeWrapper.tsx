import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { muiTheme } from "../theme/theme";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("normal");

  useEffect(() => {
    const savedTheme = sessionStorage.getItem("theme") || "normal";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
