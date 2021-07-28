<script>
	export let id = null;
	export let title = null;
</script>

<style>
	section {
		padding-bottom: var(--section-spacing);
	}
	section > * {
		margin-bottom: 0.75em;
	}

	#home {
		font-size: 1.3rem;
		text-align: center;
	}
</style>

<section id={id}>
	{#if title}
		<h2>{title}</h2>
	{/if}

	<slot />
</section>
