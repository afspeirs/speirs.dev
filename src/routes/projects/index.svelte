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
		<ProjectList posts={projects} />
	</Card>
</section>
