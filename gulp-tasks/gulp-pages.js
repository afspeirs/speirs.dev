import { spawn } from 'child_process';
import del from 'del';

// import errorHandler from './errorHandler';
import { paths } from '../gulp.config';

export const pagesClean = () => del(`${paths.build}*.html`);
export const pagesFiles = () => spawn('npx', ['@11ty/eleventy'], { stdio: 'inherit' });
