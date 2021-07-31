<script>
	const handleClick = () => window.history.back();

	export let page;
</script>

<style>
	.wrapper {
		position: absolute;
		top: -50px;
	}

	button {
		all: unset;
		cursor: pointer;
	}
	button:focus-visible {
		outline: 2px solid var(--clr-outline, var(--clr-primary));
		outline-offset: 4px;
	}

	.back {
		--clr-outline: var(--clr-background);
		text-decoration: none;
		color: var(--clr-background);
		line-height: 2;
	}

	a.back,
	:global(.no-js button.back) {
		display: none;
		visibility: hidden;
	}
	:global(.no-js a.back) {
		display: initial;
		visibility: initial;
	}
</style>

<div class="wrapper">
	<a class="back" href="/{page.toLowerCase()}">&lt; {page}</a>
	<button class="back" on:click={handleClick}>&lt; Back</button>
</div>
