import { cats as catsData } from "../../data/cats";
import type { CatType } from "../../data/cats";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import {
	Box,
	Button,
	Collapse,
	Container,
	IconButton,
	ImageList,
	ImageListItem,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { AppBar } from "@components/AppBar";
import { useRouter } from "next/router";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { pwaTrackingListeners } from "scripts/pwaEventlisteners";

const isBrowser = typeof window !== "undefined";

function Cat({ cat }: { cat: CatType }) {
	const router = useRouter();

	const handleClickBack = () => {
		router.back();
	};

	const handleClickHome = () => {
		router.push("/");
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
				<Container>
					<Button
						onClick={() => {
							if (isBrowser) {
								pwaTrackingListeners();
							}
						}}
					>
						다운로드
					</Button>
				</Container>

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
							<Image
								src={`/images/cat/${cat.type}/${cat.thumb}`}
								alt="고양이 썸네일"
								width={"100%"}
								height={70}
								layout="responsive"
								objectFit="contain"
							/>
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

				<Container
					disableGutters
					maxWidth={"md"}
					sx={{
						marginTop: 2,
					}}
				>
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
								transform: "rotate(90deg)",
							}}
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
							설명
						</Typography>
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
								fontWeight: 400,
							}}
						>
							{cat.description}
						</Typography>
					</Box>
				</Container>

				<Container
					disableGutters
					maxWidth={"md"}
					sx={{
						marginTop: 2,
					}}
				>
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
								transform: "rotate(90deg)",
							}}
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
							외모
						</Typography>
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
								fontWeight: 400,
							}}
						>
							{cat.face}
						</Typography>
					</Box>
				</Container>

				<Container
					disableGutters
					maxWidth={"md"}
					sx={{
						marginTop: 2,
					}}
				>
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
								transform: "rotate(90deg)",
							}}
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
							털 모양
						</Typography>
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
								fontWeight: 400,
							}}
						>
							{cat.furDetail}
						</Typography>
					</Box>
				</Container>

				<Container
					disableGutters
					maxWidth={"md"}
					sx={{
						marginTop: 2,
					}}
				>
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
								transform: "rotate(90deg)",
							}}
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
							성격
						</Typography>
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
								fontWeight: 400,
							}}
						>
							{cat.personality}
						</Typography>
					</Box>
				</Container>

				<Container
					disableGutters
					maxWidth={"md"}
					sx={{
						marginTop: 2,
					}}
				>
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
								transform: "rotate(90deg)",
							}}
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
							돌보는 방법
						</Typography>
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
								fontWeight: 400,
							}}
						>
							{cat.care}
						</Typography>
					</Box>
				</Container>

				<Container
					disableGutters
					maxWidth={"md"}
					sx={{
						marginTop: 2,
					}}
				>
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
								transform: "rotate(90deg)",
							}}
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
							사진
						</Typography>
					</Box>

					<Box
						sx={{
							width: "100%",
						}}
					>
						<ImageList>
							{cat.images.map((image) => (
								<ImageListItem key={image}>
									<Image
										src={`/images/cat/${cat.type}/${image}`}
										width={300}
										height={300}
									/>
								</ImageListItem>
							))}
						</ImageList>
					</Box>
				</Container>
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
