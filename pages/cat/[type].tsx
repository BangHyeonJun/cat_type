import { useRef, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { cats as catsData } from "../../data/cats";
import type { CatType } from "../../data/cats";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import {
	Box,
	Container,
	ImageList,
	ImageListItem,
	Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { AppBar } from "@components/AppBar";
import { useRouter } from "next/router";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import ImageGallery from "react-image-gallery";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

function Cat({ cat }: { cat: CatType }) {
	const router = useRouter();
	const imgGalleryRef = useRef(null);
	const [isShowFullscreen, setIsShowFullscreen] = useState(false);

	useEffect(() => {
		if (router.asPath.indexOf("#fullscreen") >= 0) {
			router.back();
		}
	}, []);

	useEffect(() => {
		const onHashChangeStart = (url: string) => {
			if (url.indexOf("#fullscreen") >= 0) {
				showFullScreenImg();
			} else {
				hideFullScreenImg();
			}
		};

		router.events.on("hashChangeStart", onHashChangeStart);

		return () => {
			router.events.off("hashChangeStart", onHashChangeStart);
		};
	}, [router]);

	const handleClickBack = () => {
		router.back();
	};

	const handleClickHome = () => {
		router.push("/");
	};

	const handleClickImg = (idx: number) => {
		moveToIndexInFullScreen(idx);
	};

	const moveToIndexInFullScreen = (idx: number) => {
		if (imgGalleryRef.current) {
			(imgGalleryRef.current as any).slideToIndex(idx);
		}
	};

	const showFullScreenImg = () => {
		if (imgGalleryRef.current) {
			document.body.style.overflowY = "hidden";
			document.body.style.scrollBehavior = "none";
			setIsShowFullscreen(true);
			(imgGalleryRef.current as any).fullScreen();
		}
	};

	const hideFullScreenImg = () => {
		if (imgGalleryRef.current) {
			document.body.style.overflowY = "auto";
			document.body.style.scrollBehavior = "auto";
			setIsShowFullscreen(false);
			(imgGalleryRef.current as any).exitFullScreen();
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
				{cat.name}
			</AppBar>

			<main style={{ margin: "20px 12px" }}>
				<Container
					disableGutters
					maxWidth={"md"}
					sx={{ border: "3px solid #FF5A79" }}
				>
					{/* 프로필 이미지 */}
					<Container disableGutters>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: "#FF5A79",
								padding: "8px 0px",
							}}
						>
							<Typography
								component="h2"
								sx={{ color: "#ffffff", fontSize: "1.3rem", fontWeight: 800 }}
							>
								{cat.name}
							</Typography>
							<Typography
								component="h2"
								sx={{ color: "#ffffff", fontSize: "1rem", fontWeight: 500 }}
							>
								({cat.enName})
							</Typography>
						</Box>

						<Box>
							<Link href={"#fullscreen"} passHref>
								<Image
									src={`/images/cat/${cat.type}/${cat.thumb}`}
									alt="고양이 썸네일"
									width={"100%"}
									height={70}
									layout="responsive"
									objectFit="contain"
									onClick={() => handleClickImg(cat.images.length)}
								/>
							</Link>
						</Box>
					</Container>

					{/* 출생지 */}
					<Stack direction="row">
						<Box
							sx={{
								backgroundColor: "#FF5A79",
								padding: "8px 0px",
								width: 120,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								borderTop: "1px solid #ffffff",
							}}
						>
							<Typography
								component="h3"
								sx={{
									color: "#ffffff",
									fontSize: "1rem",
									fontWeight: 500,
								}}
							>
								출생지
							</Typography>
						</Box>
						<Box
							sx={{
								width: "Calc(100% - 120px)",
								padding: "8px 0px 8px 16px",
								borderTop: "1px solid #FF5A79",
							}}
						>
							<Typography
								component="p"
								sx={{
									fontSize: "1rem",
									fontWeight: 400,
								}}
							>
								{cat.home}
							</Typography>
						</Box>
					</Stack>

					{/* 체형 */}
					<Stack direction="row">
						<Box
							sx={{
								backgroundColor: "#FF5A79",
								padding: "8px 0px",
								width: 120,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								borderTop: "1px solid #ffffff",
							}}
						>
							<Typography
								component="h3"
								sx={{
									color: "#ffffff",
									fontSize: "1rem",
									fontWeight: 500,
								}}
							>
								체형
							</Typography>
						</Box>
						<Box
							sx={{
								width: "Calc(100% - 120px)",
								padding: "8px 0px 8px 16px",
								borderTop: "1px solid #FF5A79",
							}}
						>
							<Typography
								component="p"
								sx={{
									fontSize: "1rem",
									fontWeight: 400,
								}}
							>
								{cat.bodyType}
							</Typography>
						</Box>
					</Stack>

					{/* 체중 */}
					<Stack direction="row">
						<Box
							sx={{
								backgroundColor: "#FF5A79",
								padding: "8px 0px",
								width: 120,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								borderTop: "1px solid #ffffff",
							}}
						>
							<Typography
								component="h3"
								sx={{
									color: "#ffffff",
									fontSize: "1rem",
									fontWeight: 500,
								}}
							>
								체중
							</Typography>
						</Box>
						<Box
							sx={{
								width: "Calc(100% - 120px)",
								padding: "8px 0px 8px 16px",
								borderTop: "1px solid #FF5A79",
							}}
						>
							<Typography
								component="p"
								sx={{
									fontSize: "1rem",
									fontWeight: 400,
								}}
							>
								{cat.weight}
							</Typography>
						</Box>
					</Stack>

					{/* 털 */}
					<Stack direction="row">
						<Box
							sx={{
								backgroundColor: "#FF5A79",
								padding: "8px 0px",
								width: 120,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								borderTop: "1px solid #ffffff",
							}}
						>
							<Typography
								component="h3"
								sx={{
									color: "#ffffff",
									fontSize: "1rem",
									fontWeight: 500,
								}}
							>
								털
							</Typography>
						</Box>
						<Box
							sx={{
								width: "Calc(100% - 120px)",
								padding: "8px 0px 8px 16px",
								borderTop: "1px solid #FF5A79",
							}}
						>
							<Typography
								component="p"
								sx={{
									fontSize: "1rem",
									fontWeight: 400,
								}}
							>
								{cat.fur}
							</Typography>
						</Box>
					</Stack>
				</Container>

				{/* 설명 */}
				<Container
					disableGutters
					maxWidth={"md"}
					sx={{
						marginTop: 2,
					}}
				>
					<Accordion defaultExpanded={true}>
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
								설명
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
										fontWeight: 300,
										lineHeight: "1.7rem",
									}}
								>
									{cat.description}
								</Typography>
							</Box>
						</AccordionDetails>
					</Accordion>
				</Container>

				{/* 외모 */}
				<Container
					disableGutters
					maxWidth={"md"}
					sx={{
						marginTop: 2,
					}}
				>
					<Accordion defaultExpanded={true}>
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
								외모
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
										fontWeight: 300,
										lineHeight: "1.7rem",
									}}
								>
									{cat.face}
								</Typography>
							</Box>
						</AccordionDetails>
					</Accordion>
				</Container>

				{/* 털 모양 */}
				<Container
					disableGutters
					maxWidth={"md"}
					sx={{
						marginTop: 2,
					}}
				>
					<Accordion defaultExpanded={true}>
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
								털 모양
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
										fontWeight: 300,
										lineHeight: "1.7rem",
									}}
								>
									{cat.furDetail}
								</Typography>
							</Box>
						</AccordionDetails>
					</Accordion>
				</Container>

				{/* 성격 */}
				<Container
					disableGutters
					maxWidth={"md"}
					sx={{
						marginTop: 2,
					}}
				>
					<Accordion defaultExpanded={true}>
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
								성격
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
										fontWeight: 300,
										lineHeight: "1.7rem",
									}}
								>
									{cat.personality}
								</Typography>
							</Box>
						</AccordionDetails>
					</Accordion>
				</Container>

				{/* 돌보는 방법 */}
				<Container
					disableGutters
					maxWidth={"md"}
					sx={{
						marginTop: 2,
					}}
				>
					<Accordion defaultExpanded={true}>
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
								돌보는 방법
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
										fontWeight: 300,
										lineHeight: "1.7rem",
									}}
								>
									{cat.care}
								</Typography>
							</Box>
						</AccordionDetails>
					</Accordion>
				</Container>

				{/* 사진 */}
				<Container
					disableGutters
					maxWidth={"md"}
					sx={{
						marginTop: 2,
					}}
				>
					<Accordion defaultExpanded={false}>
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
									color: "",
								}}
							>
								사진
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Box
								sx={{
									width: "100%",
								}}
							>
								<ImageList>
									{cat.images.map((image, i) => (
										<Link key={image} href={"#fullscreen"} passHref>
											<ImageListItem>
												<Image
													src={`/images/cat/${cat.type}/${image}`}
													width={300}
													height={300}
													onClick={() => handleClickImg(i)}
												/>
											</ImageListItem>
										</Link>
									))}
								</ImageList>
							</Box>
						</AccordionDetails>
					</Accordion>
				</Container>
				<ToastContainer />

				<Box sx={{ display: isShowFullscreen ? "block" : "none" }}>
					<ImageGallery
						ref={imgGalleryRef}
						items={[...cat.images, cat.thumb].map((image) => ({
							original: `/images/cat/${cat.type}/${image}`,
						}))}
						showFullscreenButton={false}
						showPlayButton={false}
						showBullets={false}
						showThumbnails={false}
						useBrowserFullscreen={false}
						slideDuration={250}
					/>
				</Box>
			</main>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const cats: CatType[] = catsData;
	const paths = cats.map((cat) => `/cat/${cat.type}`);

	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const data = (catsData as CatType[]).filter(
		(cat) => cat.type === (params as any).type
	);

	if (!data.length)
		return {
			props: {
				cat: null,
			},
		};

	return {
		props: {
			cat: data[0],
		},
	};
};

export default Cat;
