/* eslint-disable import/no-unresolved */
import { toKebabCase } from '@utils';
import allPages from './pages/*.md';
import allProjects from './projects/*.md';
/* eslint-enable import/no-unresolved */

const transform = (array, type) => array
	.map(({ filename, html, metadata }) => ({
		...metadata,
		date: new Date(metadata.date),
		filename,
		html,
		slug: filename.replace(/\.md$/, ''),
		type,
	}))
	.filter((item) => !item.disable)
	.sort((a, b) => a.date - b.date);

const pages = transform(allPages, 'pages');
const projects = transform(allProjects, 'projects');

const allTags = projects
	.map((post) => post.tags)
	.flat();

const tags = [...new Set(allTags)]
	.map((tag) => ({
		title: tag,
		slug: toKebabCase(tag),
		type: 'tags',
	}));

export const getPageContent = (slug) => pages.find((item) => item.slug === slug);
export const getProjectPost = (slug) => projects.find((item) => item.slug === slug);
export const getProjectByTag = (slug) => projects.filter((post) => {
	const array = post.tags.map((tag) => toKebabCase(tag));
	return array.includes(slug);
});

export default {
	pages,
	projects,
	tags,
};
