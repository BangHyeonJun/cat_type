import type { NextPage } from "next";
import Container from "@mui/material/Container";
import { styled, alpha } from "@mui/material/styles";
import MUIAppBar from "@mui/material/AppBar";
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
import { Button, CardActionArea, CardActions } from "@mui/material";
import { cats as catsData } from "../data/cats";
import type { CatType } from "../data/cats";
import Link from "next/link";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

const AppBar = styled(MUIAppBar)(({ theme }) => ({
	backgroundColor: "#ffffff",
	color: "#000000",
	boxShadow: "none",
}));

const CatCard = styled(Card)(({ theme }) => ({
	backgroundColor: "#ffffff",
	color: "#000000",
	boxShadow: "none",
}));

interface HomeProps {
	cats: CatType[];
}

function Home({ cats }: HomeProps) {
	return (
		<Container disableGutters maxWidth={false}>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="sticky">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							무슨종이냥?
						</Typography>
					</Toolbar>
				</AppBar>
				<Box sx={{ padding: "10px 20px 0px 20px" }}>
					{cats.map(({ id, name, type, images }) => (
						<Link key={id} href={`cat/${type}`}>
							<Card
								sx={{ width: "100%", marginBottom: "30px", border: "30px" }}
							>
								<CardActionArea>
									<CardMedia
										component="img"
										height="372px"
										image={`/images/cat/${type}/${images[0]}`}
										alt="green iguana"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											{name}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Link>
					))}
				</Box>
			</Box>
		</Container>
	);
}

export const getStaticProps = async () => {
	return {
		props: { cats: catsData },
	};
};

export default Home;
