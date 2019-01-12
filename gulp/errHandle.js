/* eslint-disable no-console */

const notify = require('gulp-notify');

function errHandle(err) {
	notify.onError({
		title: `Error found in ${err.plugin || 'a file'}`,
		message: err.message.toString(),
	})(err);
	console.log(err);
	this.emit('end');
}

module.exports = errHandle;
