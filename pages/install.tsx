import React, { useState } from "react";
import { AppBar } from "@components/AppBar";
import { useRouter } from "next/router";
import {
	Collapse,
	Container,
	IconButton,
	Link,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Image from "next/image";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

function Install() {
	const [isOpenAos, setIsOpenAos] = useState(false);
	const [isOpenIos, setIsOpenIos] = useState(false);
	const router = useRouter();

	const handleClickBack = () => {
		router.back();
	};

	const handleClickHome = () => {
		router.push("/");
	};

	const showShareDialog = () => {
		if (navigator.share) {
			navigator
				.share({
					title: "무슨종이냥?",
					url: location.origin,
				})
				.then(() => {
					console.log("Thanks for sharing!");
				})
				.catch(console.error);
		}
	};

	return (
		<>
			{/* 앱 바 */}
			<AppBar
				isBackBtn={true}
				onClickBack={handleClickBack}
				isHomeBtn={true}
				onClickHome={handleClickHome}
			>
				앱 설치 방법
			</AppBar>

			<main style={{ margin: "20px 12px" }}>
				<Container
					disableGutters
					maxWidth={"sm"}
					sx={{
						marginTop: 2,
					}}
				>
					<Container disableGutters>
						<Box
							sx={{
								width: "100%",
								display: "flex",
								alignItems: "center",
								borderBottom: "1px solid #000000",
								paddingTop: 1,
								paddingBottom: 1,
							}}
						>
							<IconButton
								aria-label="확장 버튼"
								sx={{
									transform: `rotate(${isOpenAos ? "90" : "0"}deg)`,
									transition: "transform 0.2s ease-in-out",
								}}
								onClick={() => setIsOpenAos((old) => !old)}
							>
								<ArrowForwardIosRoundedIcon
									sx={{
										width: "18px",
										height: "18px",
									}}
								/>
							</IconButton>
							<Typography
								component="h3"
								sx={{
									fontSize: "1.5rem",
									fontWeight: 600,
									marginTop: "4px",
									marginLeft: 1,
								}}
							>
								Android 설치 방법
							</Typography>
						</Box>

						<Collapse in={isOpenAos} timeout="auto" unmountOnExit>
							<Box
								sx={{
									width: "100%",
									paddingTop: 2,
								}}
							>
								<Typography
									component="p"
									sx={{
										fontSize: "1rem",
										fontWeight: 500,
									}}
								>
									1. Chrome으로{" "}
									<Link onClick={showShareDialog} sx={{ cursor: "pointer" }}>
										무슨종이냥?
									</Link>
									을 열어줍니다.
								</Typography>

								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/aos/1.jpg"}
										width={100}
										height={100}
										layout="responsive"
									/>
								</Box>
							</Box>

							<Box
								sx={{
									width: "100%",
									paddingTop: 2,
								}}
							>
								<Typography
									component="p"
									sx={{
										fontSize: "1rem",
										fontWeight: 500,
									}}
								>
									1. Chrome으로{" "}
									<Link onClick={showShareDialog} sx={{ cursor: "pointer" }}>
										무슨종이냥?
									</Link>
									을 열어줍니다.
								</Typography>

								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/aos/2.jpg"}
										width={100}
										height={100}
										layout="responsive"
									/>
								</Box>
							</Box>

							<Box
								sx={{
									width: "100%",
									paddingTop: 2,
								}}
							>
								<Typography
									component="p"
									sx={{
										fontSize: "1rem",
										fontWeight: 500,
									}}
								>
									1. Chrome으로{" "}
									<Link onClick={showShareDialog} sx={{ cursor: "pointer" }}>
										무슨종이냥?
									</Link>
									을 열어줍니다.
								</Typography>

								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/aos/3.jpg"}
										width={1080}
										height={1949}
										layout="responsive"
									/>
								</Box>
							</Box>

							<Box
								sx={{
									width: "100%",
									paddingTop: 2,
								}}
							>
								<Typography
									component="p"
									sx={{
										fontSize: "1rem",
										fontWeight: 500,
									}}
								>
									1. Chrome으로{" "}
									<Link onClick={showShareDialog} sx={{ cursor: "pointer" }}>
										무슨종이냥?
									</Link>
									을 열어줍니다.
								</Typography>

								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/aos/4.jpg"}
										width={100}
										height={100}
										layout="responsive"
									/>
								</Box>
							</Box>

							<Box
								sx={{
									width: "100%",
									paddingTop: 2,
								}}
							>
								<Typography
									component="p"
									sx={{
										fontSize: "1rem",
										fontWeight: 500,
									}}
								>
									1. Chrome으로{" "}
									<Link onClick={showShareDialog} sx={{ cursor: "pointer" }}>
										무슨종이냥?
									</Link>
									을 열어줍니다.
								</Typography>

								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/aos/5.jpg"}
										width={100}
										height={100}
										layout="responsive"
									/>
								</Box>
							</Box>
						</Collapse>
					</Container>
				</Container>
			</main>
		</>
	);
}

export default Install;
