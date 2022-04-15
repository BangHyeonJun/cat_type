import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import {
	Button,
	CardActionArea,
	CardActions,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Grid,
	Modal,
	Paper,
	Stack,
} from "@mui/material";
import { cats as catsData } from "../data/cats";
import type { CatType } from "../data/cats";
import Link from "next/link";
import { AppBar } from "@components/AppBar";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BottomNavigation } from "@components/BottomNavigation";
import { useRouter } from "next/router";

const CatCard = styled(Card)(({ theme }) => ({
	backgroundColor: "#ffffff",
	color: "#000000",
	boxShadow: "none",
}));

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

interface HomeProps {
	cats: CatType[];
}

function Home({ cats }: HomeProps) {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleClickCloseOneDay = () => {
		const today = new Date();
		const tomorrow = new Date(today.setDate(today.getDate() + 1));
		const yyyy = tomorrow.getFullYear();
		const MM = tomorrow.getMonth() + 1;
		const dd = tomorrow.getDate();

		localStorage.setItem("reOpenDate", `${yyyy}.${MM}.${dd}`);
		setOpen(false);
	};

	useEffect(() => {
		const date = localStorage.getItem("reOpenDate");

		if (date === null || new Date(date) <= new Date()) {
			handleOpen();
			localStorage.removeItem("reOpenDate");
		}
	}, []);

	return (
		<>
			{/* 앱 바 */}
			<AppBar>홈</AppBar>

			{/* 고양이 리스트 */}
			<main>
				<Container
					disableGutters
					maxWidth={"md"}
					sx={{
						padding: "20px 20px 20px 20px",
					}}
				>
					<Grid
						container
						justifyContent="center"
						spacing={{ xs: 2, md: 4 }}
						columns={{ xs: 4, sm: 4, md: 8 }}
					>
						{cats.map(({ id, name, type, thumb }) => (
							<Grid key={id} item xs={4} sm={3} md={4}>
								<Link href={`cat/${type}`}>
									<Card>
										<CardActionArea>
											<CardMedia
												component="img"
												height="372px"
												image={`/images/cat/${type}/${thumb}`}
												alt="green iguana"
											/>
											<CardContent>
												<Stack direction={"row"}>
													<Typography
														variant="h6"
														sx={{
															fontWeight: 500,
															fontSize: "1.125rem",
															flexGrow: 1,
														}}
													>
														{name}
													</Typography>
													<ArrowForwardIosRoundedIcon />
												</Stack>
											</CardContent>
										</CardActionArea>
									</Card>
								</Link>
							</Grid>
						))}
					</Grid>
				</Container>

				<Dialog
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
					open={open}
					onClose={handleClose}
				>
					<DialogTitle id="alert-dialog-title">
						<Typography>사이트가 마음에드시나요?</Typography>
						<IconButton
							aria-label="close"
							onClick={handleClose}
							sx={{
								position: "absolute",
								right: 8,
								top: 8,
								color: (theme) => theme.palette.grey[500],
							}}
						>
							<CloseIcon />
						</IconButton>
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							무슨종이냥을 앱으로도 즐길 수 있습니다.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={() => handleClickCloseOneDay()}
							sx={{ color: "#969696" }}
						>
							하루동안 보지 않기
						</Button>
						<Button onClick={() => router.push("/install")}>앱 다운로드</Button>
					</DialogActions>
				</Dialog>

				{/* 하단 네비게이션 */}
				{/* <BottomNavigation /> */}
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	return {
		props: { cats: catsData },
	};
};

export default Home;
