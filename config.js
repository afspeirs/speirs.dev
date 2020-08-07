module.exports = {
	browserSyncConfig: {
		port: 3000,
	},
	collections: [
		'other',
		'projects',
	],
	paths: {
		input: 'src',
		output: 'dist',
		data: 'data',
		includes: 'templates/includes',
		layouts: 'templates/layouts',
	},
};
