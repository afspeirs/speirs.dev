<script context="module">
	import { getPageContent } from '@content';

	export function preload() {
		const page = getPageContent('about');

		return { page };
	}
</script>

<script>
	import Card from '@components/Card';
	import Section from '@components/Section';

	export let page;
</script>

<svelte:head>
	<title>About | AFSpeirs</title>
</svelte:head>

<Section>
	<Card title={page.title} content={page.html} />
</Section>
