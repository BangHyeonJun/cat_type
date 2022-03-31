import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { styled } from "@mui/material/styles";

const SearchIcon = styled(SearchRoundedIcon)(({ theme }) => ({
	color: theme.palette.common.black,
}));

interface _ISearchButtonProps {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function SearchButton({ onClick }: _ISearchButtonProps) {
	return (
		<IconButton aria-label="검색" sx={{ marginRight: "4px" }} onClick={onClick}>
			<SearchIcon />
		</IconButton>
	);
}

export default React.memo(SearchButton);
