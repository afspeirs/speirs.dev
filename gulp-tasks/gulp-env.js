export const setDev = (done) => {
	process.env.NODE_ENV = 'dev';

	// if --debug argument is passed. Enable debug mode
	if (process.env.npm_config_debug) {
		process.env.DEBUG = 'Eleventy*';
	}

	done();
};
export const setProd = (done) => {
	process.env.NODE_ENV = 'prod';
	done();
};
