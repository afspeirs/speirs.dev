<script context="module">
	import content, { getPageContent } from '@/content';

	export function preload() {
		const page = getPageContent('tags');

		return {
			page,
			tags: content.tags,
		};
	}
</script>

<script>
	import Card from '@/components/Card';
	import ProjectList from '@/components/ProjectList';
	import Section from '@/components/Section';

	export let page;
	export let tags;
</script>

<svelte:head>
	<title>{page.title} | AFSpeirs</title>
</svelte:head>

<Section>
	<Card title={page.title} content={page.html} />
</Section>

<Section>
	<Card>
		<ProjectList posts={tags} />
	</Card>
</Section>
