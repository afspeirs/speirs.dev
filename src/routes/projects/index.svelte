<script context="module">
	import content, { getPageContent } from '@content';

	export function preload() {
		const { projects } = content;

		return {
			page: getPageContent('projects'),
			projects,
		};
	}
</script>

<script>
	import Card from '@components/Card';
	import ProjectList from '@components/ProjectList';
	import FilterPosts from '@components/FilterPosts';

	export let page;
	export let projects;
</script>

<svelte:head>
	<title>Projects | AFSpeirs</title>
</svelte:head>

<section>
	<Card title={page.title} content={page.html} />
</section>

<section>
	<Card>
		<FilterPosts bind:posts={projects} />
		<ProjectList posts={projects} />
	</Card>
</section>
