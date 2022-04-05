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
import {
	Button,
	CardActionArea,
	CardActions,
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

	useEffect(() => {
		handleOpen();
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

				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={open}>
						<Box sx={style}>
							<Typography
								id="transition-modal-title"
								variant="h6"
								component="h2"
							>
								무슨종이냥?
							</Typography>
							<Typography id="transition-modal-description" sx={{ mt: 2 }}>
								사이트가 마음에드시나요?
								<br />
								무슨종이냥을 앱으로도 즐길 수 있습니다.
							</Typography>

							<Button onClick={() => router.push("/install")}>
								앱 다운로드
							</Button>
							<Button onClick={() => handleClose()}>취소</Button>
						</Box>
					</Fade>
				</Modal>

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
