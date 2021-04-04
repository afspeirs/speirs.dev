<script>
	import GithubCorner from '@components/GithubCorner';
	import { formatDate, toKebabCase } from '@utils';

	export let post;
</script>

<style>
	.tags {
		display: block;
		margin-top: 12px;
	}
	.tags a {
		margin-right: 8px;
		padding: 4px 12px;
		background: var(--clr-secondary);
		color: var(--clr-background);
		border-radius: 16px;
		text-decoration: none;
	}
</style>

<small>Project Started: <time datetime={post.date}>{formatDate({ date: post.date, format: 'DD/MM/YYYY' })}</time></small>
{#if post.tags}
	<small class="tags">
		{#each post.tags as tag}
			<a href="/tags/{toKebabCase(tag)}">{tag}</a>
		{/each}
	</small>
{/if}

<p>{post.description}</p>

{#if post.link}
	<p>To view the app, visit <a href="https://{post.link}" target="_blank" rel="noopener noreferrer">{post.link}</a>.</p>
{/if}

{#if post.github}
	<GithubCorner project={post.github} />
{/if}
