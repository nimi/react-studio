export default function isValidFunction(maybeFunction) {
	const isFunction = Object.prototype.toString.call(maybeFunction) === '[object Function]';

	if (typeof maybeFunction !== 'string' && !isFunction) { return false; }

	try {
		if (isFunction) { return true; }
		return new Function(`return ${maybeFunction};`)() && true;
	}
	catch (e) {
		return false;
	}
}
