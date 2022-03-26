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

export default function Cat({ cat }: { cat: CatType }) {
	return (
		<Container>
			<Typography>{cat.name}</Typography>
			<Typography>{cat.home}</Typography>
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
		</Container>
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
