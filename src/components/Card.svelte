<script>
	export let title = '';
	export let content = '';
</script>

<style>
	.card {
		position: relative;
		background: var(--clr-light);
		box-shadow: 6px 8px 8px rgba(0, 0, 0, 0.25);
		border-radius: 12px;
		overflow: hidden;
		padding: 32px;
	}

	h2 {
		margin-bottom: 1rem;
	}
</style>

<div class="card">
	{#if title}
		<h2>{title}</h2>
	{/if}

	{#if content}
		{@html content}
	{/if}

	<slot />
</div>
