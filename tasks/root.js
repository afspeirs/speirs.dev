import { dest, src } from 'gulp';

import del from 'del';
import { paths } from '../gulp.config';

export const rootClean = () => del([`${paths.build}*.*`, `!${paths.build}*.html`]);
export const rootFiles = () => src(`${paths.src}*.*`)
	.pipe(dest(paths.build));
