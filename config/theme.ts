import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
	typography: {
		fontFamily: ["Gothic A1"].join(","),
	},
	palette: {
		primary: {
			main: "#ff5a79",
			contrastText: "white",
		},
	},
});

export default theme;
