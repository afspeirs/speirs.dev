<script>
	import { formatDate } from '@/utils';

	export let posts;
</script>

<style>
	.project-list {
		margin: 0;
		padding: 0;
	}
	li {
		position: relative;
		list-style: none;
	}
	li + li {
		padding-top: 1px;
	}
	li + li:before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		height: 1px;
		width: 100%;
		background: var(--clr-tertiary);
	}

	h3 {
		margin: 0;
	}

	.item {
		display: flex;
		flex-direction: column;
		padding: 16px;
	}
	.row-1 {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.link {
		display: block;
		color: inherit;
		text-decoration: inherit;
	}
	.link:focus,
	.link:hover {
		background-color: var(--clr-tertiary);
	}
	.link:focus-visible {
		outline: 4px solid var(--clr-secondary);
		outline-offset: -4px;
	}
</style>

<ul class="project-list">
	{#each posts as post}
		<li>
			<a class="link" href={`${post.type}/${post.slug}`}>
				<div class="item">
					<div class="row-1">
						<h3>{post.title}</h3>
						{#if post.date}
							<time datetime={post.date}>{formatDate({ date: post.date, format: 'YYYY' })}</time>
						{/if}
					</div>
					{#if post.description}
						<div>
							{post.description}
						</div>
					{/if}
				</div>
			</a>
		</li>
	{/each}
</ul>
