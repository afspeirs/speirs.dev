import del from 'del';
import { paths } from '../gulp.config';

export const clean = () => del(paths.build);

export default clean;
