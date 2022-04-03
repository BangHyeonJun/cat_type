import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const HomeIcon = styled(HomeRoundedIcon)(({ theme }) => ({
	color: theme.palette.common.black,
}));

interface _ISearchButtonProps {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function SearchButton({ onClick }: _ISearchButtonProps) {
	return (
		<IconButton aria-label="검색" sx={{ marginRight: "4px" }} onClick={onClick}>
			<HomeIcon />
		</IconButton>
	);
}

export default React.memo(SearchButton);
