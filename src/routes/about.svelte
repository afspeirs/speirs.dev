<script context="module">
	import { getPageContent } from '@content';

	export function preload() {
		const page = getPageContent('about');

		return { page };
	}
</script>

<script>
	import Card from '@components/Card';

	export let page;
</script>

<svelte:head>
	<title>About | AFSpeirs</title>
</svelte:head>

<section>
	<Card title={page.title} content={page.html} />
</section>
