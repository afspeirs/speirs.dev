import { parallel, series } from 'gulp';

import { clean } from './gulp-tasks/gulp-clean';
import { cssFiles } from './gulp-tasks/gulp-css';
import { setDev, setProd } from './gulp-tasks/gulp-env';
import { imgFiles } from './gulp-tasks/gulp-img';
import { jsFiles } from './gulp-tasks/gulp-js';
import { pagesFiles } from './gulp-tasks/gulp-pages';
import { rootFiles } from './gulp-tasks/gulp-root';
import { server } from './gulp-tasks/gulp-server';

// ==========================================================================================
// ====  Compile  ===========================================================================
// ==========================================================================================

const compile = series(
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
// ====  Build  =============================================================================
// ==========================================================================================

// Removes html files and everything from assets folder, then compiles to build folder
export const build = series(
	setProd,
	compile,
);


// ==========================================================================================
// ====  Serve  =============================================================================
// ==========================================================================================

export const serve = series(
	setDev,
	compile,
	server,
);


// ==========================================================================================
// ====  Default  ===========================================================================
// ==========================================================================================

export default serve;
