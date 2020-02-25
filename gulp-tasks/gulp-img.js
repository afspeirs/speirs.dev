import { dest, src } from 'gulp';

import del from 'del';
import { paths } from './gulp.config';

export const imgClean = () => del(paths.build + paths.img);
export const imgFiles = () => src([`${paths.src + paths.img}**/*`, `!${paths.src + paths.img}**/*.{ai,psd,svg}`])
	.pipe(dest(paths.build + paths.img));
