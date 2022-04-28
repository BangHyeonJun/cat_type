import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { AppBar } from "@components/AppBar";
import { useRouter } from "next/router";
import { Container, IconButton, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Image from "next/image";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import MuiAccordionSummary, {
	AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { NextSeo } from "next-seo";

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor: "rgba(0, 0, 0, .02)",
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

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
		} else {
			window.open("https://cat-type.vercel.app");
		}
	};

	return (
		<>
			{/* 헤드 */}
			<NextSeo
				title="무슨종이냥 | 설치 방법"
				description="당신이 키우는 고양이는 무슨종인지 알려드릴게요"
				canonical="https://cat-type.vercel.app/install"
				openGraph={{
					type: "website",
					locale: "ko_KR",
					url: "https://cat-type.vercel.app/install",
					title: "무슨종이냥 | 설치 방법",
					site_name: "무슨종이냥",
					images: [
						{
							url: "https://cat-type.vercel.app/images/icons/icon-512x512.png",
							width: 512,
							height: 512,
							alt: "무슨종이냥 아이콘",
						},
					],
				}}
			/>

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
								안드로이드에서 앱 설치 방법
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
								아이폰에서 앱 설치 방법
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
									1.{" "}
									<Typography
										component="strong"
										sx={{
											fontWeight: 800,
										}}
									>
										사파리
									</Typography>{" "}
									를 열어줍니다.
								</Typography>

								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/ios/1.jpg"}
										width={232}
										height={139}
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
									2. 주소창에
									<Link onClick={showShareDialog} sx={{ cursor: "pointer" }}>
										무슨종이냥?
									</Link>{" "}
									<Typography
										component="strong"
										sx={{
											fontWeight: 800,
										}}
									>
										사이트 주소
									</Typography>{" "}
									를 입력해줍니다.
								</Typography>

								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/ios/2.jpg"}
										width={100}
										height={60}
										layout="responsive"
									/>
									<Image
										src={"/images/install/ios/3.jpg"}
										width={100}
										height={60}
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
									3. 사파리{" "}
									<Typography
										component="strong"
										sx={{
											fontWeight: 800,
										}}
									>
										메뉴
									</Typography>{" "}
									항목을 열어줍니다.
								</Typography>

								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/ios/4.jpg"}
										width={100}
										height={160}
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
									4.{" "}
									<Typography
										component="strong"
										sx={{
											fontWeight: 800,
										}}
									>
										Add to Home Screen
									</Typography>{" "}
									버튼을 클릭해 줍니다.
								</Typography>

								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/ios/5.jpg"}
										width={100}
										height={160}
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
									5.{" "}
									<Typography
										component="strong"
										sx={{
											fontWeight: 800,
										}}
									>
										Add
									</Typography>{" "}
									버튼을 클릭해 줍니다.
								</Typography>

								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/ios/6.jpg"}
										width={100}
										height={160}
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
									6. 앱이 설치된 것을 확인할 수 있습니다.
								</Typography>
								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/ios/7.jpg"}
										width={100}
										height={160}
										layout="responsive"
									/>
								</Box>
							</Box>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary
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
								크롬 브라우저에서 앱 설치 방법
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
									1.{" "}
									<Typography
										component="strong"
										sx={{
											fontWeight: 800,
										}}
									>
										크롬 브라우저
									</Typography>{" "}
									를 열어줍니다.
								</Typography>

								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/chrome/1.jpg"}
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
									2. 주소창에{" "}
									<Link onClick={showShareDialog} sx={{ cursor: "pointer" }}>
										무슨종이냥?
									</Link>{" "}
									<Typography
										component="strong"
										sx={{
											fontWeight: 800,
										}}
									>
										사이트 주소
									</Typography>{" "}
									를 입력해줍니다.
								</Typography>

								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/chrome/2.jpg"}
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
									3. 주소창 우측에
									<Typography
										component="strong"
										sx={{
											fontWeight: 800,
										}}
									>
										앱 다운로드
									</Typography>{" "}
									아이콘을 클릭해줍니다.
								</Typography>

								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/chrome/3.jpg"}
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
									4.{" "}
									<Typography
										component="strong"
										sx={{
											fontWeight: 800,
										}}
									>
										설치
									</Typography>{" "}
									버튼을 클릭해 줍니다.
								</Typography>

								<Box sx={{ width: "100%" }}>
									<Image
										src={"/images/install/chrome/4.jpg"}
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
										src={"/images/install/chrome/5.jpg"}
										width={100}
										height={100}
										layout="responsive"
									/>
								</Box>
							</Box>
						</AccordionDetails>
					</Accordion>
				</Container>
			</main>
		</>
	);
}

export default Install;
