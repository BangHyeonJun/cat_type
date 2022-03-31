import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { styled } from "@mui/material/styles";

const Arrow = styled(ArrowBackIosNewRoundedIcon)(({ theme }) => ({
	color: theme.palette.common.black,
}));

interface _IArrowButtonProps {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function ArrowButton({ onClick }: _IArrowButtonProps) {
	return (
		<IconButton
			aria-label="뒤로가기"
			sx={{ marginRight: "4px" }}
			onClick={onClick}
		>
			<Arrow />
		</IconButton>
	);
}

export default React.memo(ArrowButton);
