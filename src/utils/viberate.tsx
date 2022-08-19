const vibrateOnceOnClick = () => {
	// A simple one-liner is all that's needed.
	// To use a single vibration, we simple
	// provide an integer representing the ms
	// a single pulse should last.
	window.navigator?.vibrate?.(200);
};

const vibratePatternOnClick = () => {
	// For more than one puse, an array has to be
	// provided, again defining each pulse's lenght
	// in milliseconds.
	window.navigator?.vibrate?.([50, 200, 50, 200]);
};

export { vibrateOnceOnClick, vibratePatternOnClick };
