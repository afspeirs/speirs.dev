<script context="module">
	import content, { getProjectByTag } from '@content';

	// Sapper calls this to load our data
	export function preload(page) {
		const currentTag = content.tags.find((tag) => tag.slug === page.params.slug);
		const projects = getProjectByTag(page.params.slug);

		return {
			tag: currentTag,
			projects,
		};
	}
</script>

<script>
	import BackButton from '@components/BackButton';
	import Card from '@components/Card';
	import ProjectList from '@components/ProjectList';
	import Section from '@components/Section';

	export let tag;
	export let projects;
</script>

<svelte:head>
	<title>{tag.title} | Tags | AFSpeirs</title>
</svelte:head>

<BackButton page="Tags" />

<Section>
	<Card title={tag.title}>
		<ProjectList posts={projects} />
	</Card>
</Section>
