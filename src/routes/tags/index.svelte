<script context="module">
	import content, { getPageContent } from '@content';

	export function preload() {
		const page = getPageContent('tags');

		return {
			page,
			tags: content.tags,
		};
	}
</script>

<script>
	import Card from '@components/Card';
	import ProjectList from '@components/ProjectList';

	export let page;
	export let tags;
</script>

<svelte:head>
	<title>{page.title} | AFSpeirs</title>
</svelte:head>

<section>
	<Card title={page.title} content={page.html} />
</section>

<section>
	<Card>
		<ProjectList posts={tags} />
	</Card>
</section>
