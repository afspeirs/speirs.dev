const requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });

global.production = process.argv.includes('--production');
