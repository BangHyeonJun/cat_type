import React, { useState } from "react";
import { AppBar } from "@components/AppBar";
import { useRouter } from "next/router";
import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
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
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreRoundedIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
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
						</AccordionSummary>
						<AccordionDetails>
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
									사이트를 열어줍니다.
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
									2. 상단에 메뉴 버튼을 클릭해줍니다.
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
									3. 메뉴 항목 중 앱 설치 메뉴를 클릭해줍니다.
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
									4. 설치 버튼을 클릭해줍니다.
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
									5. 앱이 설치된 것을 확인할 수 있습니다.
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
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreRoundedIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography
								component="h3"
								sx={{
									fontSize: "1.5rem",
									fontWeight: 600,
									marginTop: "4px",
									marginLeft: 1,
								}}
							>
								IOS 설치 방법
							</Typography>
						</AccordionSummary>
						<AccordionDetails></AccordionDetails>
					</Accordion>
				</Container>
			</main>
		</>
	);
}

export default Install;