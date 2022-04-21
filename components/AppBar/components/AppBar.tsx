import React, { useEffect } from "react";
import Title from "./Title";
import AppBarForMUI from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import ArrowButton from "./ArrowButton";
import HomeButton from "./HomeButton";
import { Button, Typography } from "@mui/material";
import DownloadButton from "./DownloadButton";

const CustomeAppBar = styled(AppBarForMUI)(({ theme }) => ({
	backgroundColor: theme.palette.common.white,
	boxShadow: "0px 1px 0px #DEDEDE",
}));

interface _IAppBarProps {
	children: React.ReactChild;
	isBackBtn?: boolean;
	isHomeBtn?: boolean;
	isDownloadBtn?: boolean;
	onClickBack?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onClickHome?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function AppBar({
	children,
	isBackBtn = false,
	isHomeBtn = false,
	isDownloadBtn = false,
	onClickBack = () => {},
	onClickHome = () => {},
}: _IAppBarProps) {
	return (
		<CustomeAppBar position="sticky">
			<Toolbar>
				{isBackBtn && <ArrowButton onClick={onClickBack} />}
				<Title>{children}</Title>
				{isHomeBtn && <HomeButton onClick={onClickHome} />}
				{isDownloadBtn && <DownloadButton />}
			</Toolbar>
		</CustomeAppBar>
	);
}

export default React.memo(AppBar);
