import {
	parallel,
	series,
} from 'gulp';

import { clean } from './tasks/clean';
import { cssFiles } from './tasks/css';
import { imgFiles } from './tasks/img';
import { jsFiles } from './tasks/js';
import { pagesFiles } from './tasks/pages';
import { rootFiles } from './tasks/root';
import { server } from './tasks/server';

// ==========================================================================================
// ====  Environment  =======================================================================
// ==========================================================================================

// Set environment variables
const setDev = (done) => {
	global.env = 'dev';
	done();
};
const setProd = (done) => {
	global.env = 'prod';
	done();
};

// ==========================================================================================
// ====  Build  =============================================================================
// ==========================================================================================

// Removes html files and everything from assets folder, then compiles to build folder
export const build = series(
	setProd,
	clean,
	parallel(
		cssFiles,
		imgFiles,
		jsFiles,
		pagesFiles,
		rootFiles,
	),
);


// ==========================================================================================
// ====  default  ===========================================================================
// ==========================================================================================

export const serve = series(
	setDev,
	clean,
	parallel(
		cssFiles,
		imgFiles,
		jsFiles,
		pagesFiles,
		rootFiles,
	),
	server,
);

export default serve;
