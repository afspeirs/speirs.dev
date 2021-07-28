<script context="module">
	import { getProjectPost } from '@/content';

	// Sapper calls this to load our data
	export function preload(page) {
		const post = getProjectPost(page.params.slug);
		return { post };
	}
</script>

<script>
	import BackButton from '@/components/BackButton';
	import Card from '@/components/Card';
	import ProjectDetails from '@/components/ProjectDetails';
	import Section from '@/components/Section';

	export let post;
</script>

<svelte:head>
	<title>{post.title} | Projects | AFSpeirs</title>
</svelte:head>

<BackButton page="Projects" />

<Section>
	<Card title={post.title}>
		<ProjectDetails post={post} />
	</Card>
</Section>

<Section>
	<Card content={post.html} />
</Section>
