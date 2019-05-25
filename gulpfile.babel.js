import { parallel, series } from 'gulp';

import { clean } from './tasks/clean';
import { cssFiles } from './tasks/css';
import { setDev, setProd } from './tasks/env';
import { imgFiles } from './tasks/img';
import { jsFiles } from './tasks/js';
import { pagesFiles } from './tasks/pages';
import { rootFiles } from './tasks/root';
import { server } from './tasks/server';

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
