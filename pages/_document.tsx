import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="ko">
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="description"
						content="당신의 고양이가 무슨 종인지 알 수 있도록 해줍니다."
					/>
					<meta name="keywords" content="무슨종이냥,고양이,집사" />

					<meta name="author" content="방현준"></meta>
					<meta name="apple-mobile-web-app-capable" content="yes"></meta>
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					></meta>
					<meta name="apple-mobile-web-app-title" content="무슨종이냥"></meta>

					{/* 컬러 */}
					<meta name="msapplication-TileColor" content="#FF98BA"></meta>
					<meta name="theme-color" content={theme.palette.primary.main}></meta>

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

					{/* 폰트 */}
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>

					{/* Inject MUI styles first to match with the prepend: true configuration. */}
					{(this.props as any).emotionStyleTags}

					{/* GA 스크립트 */}
					{/* <script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
									page_path: window.location.pathname,
								});
							`,
						}}
					/> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	const originalRenderPage = ctx.renderPage;

	// You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
	// However, be aware that it can have global side effects.
	const cache = createEmotionCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App: any) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />;
				},
		});

	const initialProps = await Document.getInitialProps(ctx);
	// This is important. It prevents emotion to render invalid HTML.
	// See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(" ")}`}
			key={style.key}
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		emotionStyleTags,
	};
};

export default MyDocument;
