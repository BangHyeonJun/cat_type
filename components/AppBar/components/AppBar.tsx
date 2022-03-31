import React, { useEffect } from "react";
import Title from "./Title";
import AppBarForMUI from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import ArrowButton from "./ArrowButton";
import SearchButton from "./SearchButton";

const CustomeAppBar = styled(AppBarForMUI)(({ theme }) => ({
	backgroundColor: theme.palette.common.white,
	boxShadow: "0 0 0 0",
}));

interface _IAppBarProps {
	children: React.ReactChild;
	isBackBtn?: boolean;
	isSearchBtn?: boolean;
	onClickBack?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onClickSearch?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function AppBar({
	children,
	isBackBtn = false,
	isSearchBtn = false,
	onClickBack = () => {},
	onClickSearch = () => {},
}: _IAppBarProps) {
	return (
		<CustomeAppBar position="sticky">
			<Toolbar>
				{isBackBtn && <ArrowButton onClick={onClickBack} />}
				<Title>{children}</Title>
				{isSearchBtn && <SearchButton onClick={onClickSearch} />}
			</Toolbar>
		</CustomeAppBar>
	);
}

export default React.memo(AppBar);
