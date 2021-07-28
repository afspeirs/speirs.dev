<script>
	import { onMount } from 'svelte';

	import Footer from '@/components/Footer';
	import Header from '@/components/Header';

	onMount(() => {
		// Remove no-js class as JavaScript is being used
		document.documentElement.classList.remove('no-js');
	});

	export let segment;
</script>

<style>
	#container {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		min-width: 320px;
		min-height: 100%;
	}

	main {
		position: relative;
		flex: 1;
		padding: 0 calc(env(safe-area-inset-right) + 16px) 0 calc(env(safe-area-inset-left) + 16px);
		width: 100%;
		max-width: 960px;
		margin: 0 auto;
	}
</style>

<div id="container">
	<Header {segment} />

	<main>
		<slot />
	</main>

	<Footer />
</div>
