import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { BottomNavigationAction, Paper } from "@mui/material";

import BottomNavigationForMUI from "@mui/material/BottomNavigation";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const BottomNavigationContainer = styled(Paper)(({ theme }) => ({
	position: "fixed",
	bottom: 0,
	left: 0,
	right: 0,
	boxShadow: "0px -1px 0px #DEDEDE",
}));

interface _IAppBarProps {}

function BottomNavigation({}: _IAppBarProps) {
	return (
		<BottomNavigationContainer elevation={0}>
			<BottomNavigationForMUI
				showLabels
				value={0}
				// onChange={(event, newValue) => {
				// 	setValue(newValue);
				// }}
			>
				<BottomNavigationAction label="홈" icon={<HomeRoundedIcon />} />
				<BottomNavigationAction label="검색" icon={<SearchRoundedIcon />} />
			</BottomNavigationForMUI>
		</BottomNavigationContainer>
	);
}

export default React.memo(BottomNavigation);
