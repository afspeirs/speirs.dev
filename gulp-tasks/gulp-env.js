export const setDev = (done) => {
	global.env = 'dev';
	done();
};
export const setProd = (done) => {
	global.env = 'prod';
	done();
};
