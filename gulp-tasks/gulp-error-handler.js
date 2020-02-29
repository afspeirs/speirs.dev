import notify from 'gulp-notify';

const errorHandler = (error) => {
	notify.onError({
		title: `Error found in ${error.plugin || 'a file'}`,
		message: error.message.toString(),
	})(error);
	console.log(error); // eslint-disable-line no-console
};

export default errorHandler;
