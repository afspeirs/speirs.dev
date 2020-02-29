import { series } from 'gulp';
import { spawn } from 'child_process';
import del from 'del';

import { paths } from './gulp.config';

export const pagesClean = () => del(`${paths.build}*.html`);
export const pagesFiles = () => spawn('npx', ['@11ty/eleventy'], { stdio: 'inherit', shell: true });

export default series(pagesClean, pagesFiles);
