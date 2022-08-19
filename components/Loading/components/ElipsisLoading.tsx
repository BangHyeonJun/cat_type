import { Box } from "@mui/material";
import Image from "next/image";
import loadingGIF from "../assets/loading.gif";

function ElipsisLoading() {
	return (
		<Box sx={{ position: "relative" }}>
			<Image src={loadingGIF} width={120} height={120}></Image>
		</Box>
	);
}

export default ElipsisLoading;
