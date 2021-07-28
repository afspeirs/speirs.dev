<script context="module">
	import content, { getPageContent } from '@/content';

	export function preload() {
		const { projects } = content;

		return {
			home: getPageContent('home'),
			about: getPageContent('about'),
			projects,
		};
	}
</script>

<script>
	import Card from '@/components/Card';
	import ProjectList from '@/components/ProjectList';
	import Section from '@/components/Section';

	export let about;
	export let home;
	export let projects;
</script>

<svelte:head>
	<title>AFSpeirs</title>
</svelte:head>

<Section id="home">
	<Card title={home.title} content={home.html} />
</Section>

<Section id="projects" title="Projects">
	<Card>
		<ProjectList posts={projects} />
	</Card>
</Section>

<Section id="about" title={about.title}>
	<Card content={about.html} />
</Section>
