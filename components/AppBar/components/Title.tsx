import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";

const CustomeTilte = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: "1.25rem",
	fontWeight: 700,
	paddingTop: 4,
}));

interface _ITitleProps {
	children: React.ReactChild;
}

function Title({ children }: _ITitleProps) {
	return (
		<CustomeTilte variant="h1" sx={{ flexGrow: 1 }}>
			{children}
		</CustomeTilte>
	);
}

export default Title;
