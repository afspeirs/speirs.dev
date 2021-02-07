<script>
	import GithubCorner from '@components/GithubCorner';
	import Nav from '@components/Nav';
	import logo from '@images/logo.svg';

	const maxTiltAngle = 75;

	// Set a random angle for the logo
	const updateTilt = () => {
		const angle = `${Math.floor(Math.random() * (maxTiltAngle - -maxTiltAngle)) - maxTiltAngle}deg`;
		document.documentElement.style.setProperty('--logo-tilt-angle', angle);
	};

	export let dense = false;
	export let segment;
</script>

<style>
	.header {
		--header-spacing: 2.5;

		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: var(--section-spacing) 0 calc(var(--section-spacing) * var(--header-spacing));
		margin-bottom: calc((var(--section-spacing) * var(--header-spacing) * -1) + var(--section-spacing));
	}

	.dense {
		padding: var(--section-spacing) 0;
		margin-bottom: calc(var(--section-spacing) / 2);
	}

	.logo-wrapper {
		display: flex;
		justify-content: center;
	}

	.logo {
		transition: transform 0.3s ease;
	}
	.logo:focus,
	.logo:hover {
		transform: rotate(var(--logo-tilt-angle)) scale(1.1);
	}
</style>

<header class="header primary-background" class:dense>
	<GithubCorner primaryBackground />

	<div class="logo-wrapper">
		<a class="logo" href="/" aria-label="Home" on:mouseout={updateTilt}>
			<img class="img-icon" src="{logo}" alt="" width="150" height="150">
		</a>
	</div>

	<Nav {segment} />
</header>
