<script context="module">
	import content, { getPageContent } from '@content';

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
	import Card from '@components/Card';
	import ProjectList from '@components/ProjectList';

	export let about;
	export let home;
	export let projects;
</script>

<style>
	#home {
		font-size: 1.3rem;
		text-align: center;
	}
</style>

<svelte:head>
	<title>AFSpeirs</title>
</svelte:head>

<section id="home">
	<Card title={home.title} content={home.html} />
</section>

<section id="projects">
	<h2>Projects</h2>

	<Card>
		<ProjectList posts={projects} />
	</Card>
</section>

<section id="about">
	<h2>{about.title}</h2>

	<Card content={about.html} />
</section>
