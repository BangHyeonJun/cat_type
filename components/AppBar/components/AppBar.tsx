import React, { useEffect } from "react";
import Title from "./Title";
import AppBarForMUI from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import ArrowButton from "./ArrowButton";
import SearchButton from "./SearchButton";
import HomeButton from "./HomeButton";

const CustomeAppBar = styled(AppBarForMUI)(({ theme }) => ({
	backgroundColor: theme.palette.common.white,
	boxShadow: "0px 1px 0px #DEDEDE",
}));

interface _IAppBarProps {
	children: React.ReactChild;
	isBackBtn?: boolean;
	isHomeBtn?: boolean;
	onClickBack?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onClickHome?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function AppBar({
	children,
	isBackBtn = false,
	isHomeBtn = false,
	onClickBack = () => {},
	onClickHome = () => {},
}: _IAppBarProps) {
	return (
		<CustomeAppBar position="sticky">
			<Toolbar>
				{isBackBtn && <ArrowButton onClick={onClickBack} />}
				<Title>{children}</Title>
				{isHomeBtn && <HomeButton onClick={onClickHome} />}
			</Toolbar>
		</CustomeAppBar>
	);
}

export default React.memo(AppBar);
