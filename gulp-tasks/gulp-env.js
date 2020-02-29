export const setDev = (done) => {
	process.env.NODE_ENV = 'dev';
	done();
};
export const setProd = (done) => {
	process.env.NODE_ENV = 'prod';
	done();
};
