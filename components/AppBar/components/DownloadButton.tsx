import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

function DownloadButton() {
	const router = useRouter();

	return (
		<Button
			aria-label="앱 다운로드"
			variant="text"
			sx={{
				fontWeight: 400,
				fontSize: "0.8rem",
				color: "#FF98BA",
			}}
			onClick={() => router.push("/install")}
		>
			앱 다운로드
		</Button>
	);
}

export default React.memo(DownloadButton);
