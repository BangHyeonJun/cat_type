import ReactDOM from "react-dom";
import ElipsisLoading from "../components/ElipsisLoading";

let container: null | HTMLDivElement = null;

const getContainer = (): HTMLDivElement => {
	var $container = document.createElement("DIV") as HTMLDivElement;

	// 스타일 추가
	$container.style.position = "fixed";
	$container.style.display = "flex";
	$container.style.alignItems = "center";
	$container.style.justifyContent = "center";
	$container.style.zIndex = "9999";
	$container.style.width = "100vw";
	$container.style.height = "100vh";
	$container.style.top = "0px";
	$container.style.left = "0px";

	return $container;
};

function useLoading() {
	const show = () => {
		if (container !== null) return;

		container = getContainer();
		document.body.insertAdjacentElement("beforeend", container);

		ReactDOM.render(<ElipsisLoading />, container);
	};

	const hide = () => {
		if (container === null) return;

		ReactDOM.unmountComponentAtNode(container as HTMLDivElement);

		if (container?.parentNode) {
			container?.parentNode.removeChild(container);
			container = null;
		}
	};

	return {
		show,
		hide,
	};
}

export default useLoading;
