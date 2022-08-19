import React, { useEffect } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import Script from "next/script";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import { pwaTrackingListeners } from "../src/pwaEventlisteners";
import Router from "next/router";

import "react-image-gallery/styles/scss/image-gallery.scss";
import { useElipsisLoading } from "@components/Loading";

// import { useRouter } from "next/router";

// import * as ga from "../src/ga";

const isBrowser = typeof window !== "undefined";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

if (isBrowser) {
	pwaTrackingListeners();
}

function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const Loading = useElipsisLoading();

	useEffect(() => {
		const LoadingShow = () => {
			Loading.show();
		};
		const LoadingHide = () => {
			Loading.hide();
		};

		Router.events.on("routeChangeStart", LoadingShow);
		Router.events.on("routeChangeComplete", LoadingHide);
		Router.events.on("routeChangeError", LoadingHide);

		return () => {
			Router.events.off("routeChangeStart", LoadingShow);
			Router.events.off("routeChangeComplete", LoadingHide);
			Router.events.off("routeChangeError", LoadingHide);
		};
	}, []);

	// const router = useRouter();

	// useEffect(() => {
	// 	const handleRouteChange = (url: string) => {
	// 		ga.pageview(url);
	// 	};

	// 	router.events.on("routeChangeComplete", handleRouteChange);

	// 	return () => {
	// 		router.events.off("routeChangeComplete", handleRouteChange);
	// 	};
	// }, [router.events]);

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				{/* Google Tag Manager */}
				<Script id="google-tag-manager" strategy="afterInteractive">
					{`
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}');
					`}
				</Script>

				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />

				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}

if (isBrowser && "serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("/service-worker.js")
			.then(() => {
				console.log("Service worker registered");
			})
			.catch((err) => {
				console.log("Service worker registration failed", err);
			});
	});
}

export default MyApp;
