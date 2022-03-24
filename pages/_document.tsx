import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>
				<meta name="description" content="Description" />
				<meta name="keywords" content="Keywords" />

				<meta name="author" content=""></meta>
				<meta name="apple-mobile-web-app-capable" content="yes"></meta>
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="default"
				></meta>
				<meta name="apple-mobile-web-app-title" content="방현준"></meta>

				{/* 컬러 */}
				<meta name="msapplication-TileColor" content="#FF98BA"></meta>
				<meta name="theme-color" content="#FF98BA"></meta>

				{/* 매니 패스트*/}
				<link rel="manifest" href="/manifest.json" />

				{/* 아이콘 */}
				<link rel="apple-touch-icon" href="/apple-icon.png"></link>

				{/* 파비콘 */}
				<link
					href="images/favicons/favicon-16x16.png"
					rel="icon"
					type="image/png"
					sizes="16x16"
				/>
				<link
					href="images/favicons/favicon-32x32.png"
					rel="icon"
					type="image/png"
					sizes="32x32"
				/>

				{/* 스플래시 */}
				<link
					rel="apple-touch-startup-image"
					href="/images/splashscreens/iphone5_splash.png"
					media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				></link>
				<link
					rel="apple-touch-startup-image"
					href="/images/splashscreens/iphone6_splash.png"
					media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
				></link>
				<link
					rel="apple-touch-startup-image"
					href="/images/splashscreens/iphoneplus_splash.png"
					media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				></link>
				<link
					rel="apple-touch-startup-image"
					href="/images/splashscreens/iphonex_splash.png"
					media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
				></link>
				<link
					rel="apple-touch-startup-image"
					href="/images/splashscreens/ipad_splash.png"
					media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
				></link>
				<link
					rel="apple-touch-startup-image"
					href="/images/splashscreens/ipadpro1_splash.png"
					media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
				></link>
				<link
					rel="apple-touch-startup-image"
					href="/images/splashscreens/ipadpro2_splash.png"
					media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
				></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
