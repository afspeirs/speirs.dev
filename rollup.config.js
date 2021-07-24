import alias from 'rollup-plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import config from 'sapper/config/rollup';
import glob from 'rollup-plugin-glob';
import markdown from '@jackfranklin/rollup-plugin-markdown';
import path from 'path';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import url from '@rollup/plugin-url';
import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

// eslint-disable-next-line no-shadow
const onwarn = (warning, onwarn) => (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message))
	|| (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message))
	|| onwarn(warning);

const aliases = alias({
	resolve: ['.js', '.svelte', '.svg'],
	entries: [
		{ find: '@components', replacement: `${__dirname}/src/components` },
		{ find: '@content', replacement: `${__dirname}/src/content` },
		{ find: '@images', replacement: `${__dirname}/src/images` },
		{ find: '@utils', replacement: `${__dirname}/src/utils` },
	],
});

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			aliases,
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
				'process.env.PACKAGE_VERSION': pkg.version,
			}),
			markdown(),
			glob(),
			svelte({
				compilerOptions: {
					dev,
					hydratable: true,
				},
				emitCss: true,
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/',
			}),
			resolve({
				browser: true,
				dedupe: ['svelte'],
			}),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead',
					}],
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true,
					}],
				],
			}),

			!dev && terser({
				module: true,
			}),
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			aliases,
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode),
				'process.env.PACKAGE_VERSION': pkg.version,
			}),
			markdown(),
			glob(),
			svelte({
				compilerOptions: {
					generate: 'ssr',
					hydratable: true,
					dev,
				},
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/',
				emitFiles: false, // already emitted by client build
			}),
			resolve({
				dedupe: ['svelte'],
			}),
			commonjs(),
		],
		// eslint-disable-next-line global-require
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),

		preserveEntrySignatures: 'strict',
		onwarn,
	},
};
