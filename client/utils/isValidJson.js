export default function isValidJson(maybeJson) {
	const isObject = Object.prototype.toString.call(maybeJson) === '[object Object]';

	if (typeof maybeJson !== 'string' && !isObject) { return false; }
	console.log(isObject, maybeJson, typeof maybeJson !== 'string');

	try {
		if (isObject) { return true; }
		return JSON.parse(maybeJson) && true;
	}
	catch (e) {
		return false;
	}
}
