import { cats as catsData } from "../../data/cats";
import type { CatType } from "../../data/cats";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import {
	Box,
	Container,
	IconButton,
	ImageList,
	ImageListItem,
	Toolbar,
	Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { AppBar } from "@components/AppBar";
import { useRouter } from "next/router";

function Cat({ cat }: { cat: CatType }) {
	const router = useRouter();

	const handleOnClick = () => {
		router.back();
	};

	return (
		<>
			{/* 앱 바 */}
			<AppBar isBackBtn={true} onClickBack={handleOnClick}>
				{cat.name}
			</AppBar>

			<main style={{ margin: "8px 12px" }}>
				<Container disableGutters sx={{ border: "3px solid #FF5A79" }}>
					{/* 프로필 이미지 */}
					<Stack>
						<Container sx={{ backgroundColor: "#FF5A79" }} maxWidth={"xl"}>
							<Typography
								variant={"subtitle1"}
								component="strong"
								sx={{ color: "#ffffff" }}
							>
								프로필
							</Typography>
						</Container>
						<Container disableGutters maxWidth={"lg"}>
							<Image
								src={`/images/cat/${cat.type}/${cat.thumb}`}
								alt="고양이 썸네일"
								width={"100%"}
								height={70}
								layout="responsive"
								objectFit="contain"
							/>
						</Container>
					</Stack>

					<Stack direction="row" spacing={2}>
						<Box>
							<Typography variant={"subtitle1"} component="strong">
								출생지
							</Typography>
						</Box>
						<Box>
							<Typography component="span">{cat.home}</Typography>
						</Box>
					</Stack>
				</Container>
			</main>

			<Typography>{cat.bodyType}</Typography>
			<Typography>{cat.weight}</Typography>
			<Typography>{cat.fur}</Typography>
			<Typography>{cat.description}</Typography>
			<Typography>{cat.face}</Typography>
			<Typography>{cat.furDetail}</Typography>
			<Typography>{cat.personality}</Typography>
			<Typography>{cat.care}</Typography>
			<Box>
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
