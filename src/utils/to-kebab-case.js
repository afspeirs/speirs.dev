const toKebabCase = (str) => str
	.replace(/([a-z])([A-Z])/g, '$1-$2') // Get all lowercase letters that are near to uppercase ones
	.replace(/[\s_.]+/g, '-') // Replace all spaces, underscore and full stops
	.toLowerCase();

export default toKebabCase;
