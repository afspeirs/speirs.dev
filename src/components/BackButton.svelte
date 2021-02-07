<script>
	const onClick = () => window.history.back();

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
	.back {
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
	<button class="back" on:click={onClick}>&lt; Back</button>
</div>
