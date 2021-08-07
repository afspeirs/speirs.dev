<script>
	const navItems = [
		{
			link: '/',
			name: 'Home',
			segment: undefined,
		},
		{
			link: '/projects/',
			name: 'Projects',
			segment: 'projects',
		},
		{
			link: '/tags/',
			name: 'Tags',
			segment: 'tags',
		},
		{
			link: '/about/',
			name: 'About',
			segment: 'about',
		},
	];

	export let segment;
</script>

<style>
	.nav {
		display: flex;
		justify-content: center;
		padding-top: var(--section-spacing);
		align-items: center;
	}
	.item {
		color: inherit;
		padding: 0 32px;
		font-family: var(--ff-heading);
		font-size: 1.5rem;
		font-weight: var(--fw-bold);
		text-transform: uppercase;
		text-decoration: none;
		height: inherit;
		line-height: 64px;
		transition: background-color 0.2s ease;
		border-top: 4px transparent solid;
		border-bottom: 4px transparent solid;
	}

	.item:hover {
		background-color: var(--clr-secondary);
	}
	.item:focus-visible {
		outline: 4px solid var(--clr-tertiary);
		outline-offset: -4px;
	}

	[aria-current] {
		border-bottom: 4px var(--clr-background) solid;
	}

	@media (max-width: 600px) {
		.nav {
			flex-direction: column;
		}
		.item {
			width: 100%;
			text-align: center;
			border-top: initial;
			border-bottom: initial;
		}
		[aria-current] {
			border-top: initial;
			border-bottom: initial;
			border-left: 6px var(--clr-background) solid;
			border-right: 6px var(--clr-background) solid;
		}
	}
</style>

<nav class="nav">
	{#each navItems as navItem}
		<a
			class="item"
			href={navItem.link}
			aria-current={segment === navItem.segment ? 'page' : undefined}
		>
			{navItem.name}
		</a>
	{/each}
</nav>
