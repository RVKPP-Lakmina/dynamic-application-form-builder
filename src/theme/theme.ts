import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--primary-color)",
          width: "var(--button-width)",
          height: "var(--button-height)",
          padding: "var(--button-padding)",
          "&:hover": {
            backgroundColor: "var(--primary-color)",
            opacity: 0.9,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "var(--text-color)",
            width: "var(--textfield-width)",
            height: "var(--textfield-height)",
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiSelect-select": {
            color: "var(--text-color)",
            width: "var(--textfield-width)",
            height: "var(--textfield-height)",
          },
        },
      },
    },
  },
});
