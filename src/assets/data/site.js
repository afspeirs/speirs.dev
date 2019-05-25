import manifest from '../../manifest';

module.exports = {
	debug: global.env === 'dev',
	manifest,
};
