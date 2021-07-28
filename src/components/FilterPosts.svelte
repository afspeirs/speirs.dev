<script>
	import { sortFunction } from '@/utils';

	export let posts;
	export let filterBy = 'date-created-dsc';

	const sortPostsItems = [
		{ text: 'Date Created (Newest First)', value: 'date-created-asc' },
		{ text: 'Date Created (Oldest First)', value: 'date-created-dsc' },
		{ text: 'Title (A-Z)', value: 'slug-asc' },
		{ text: 'Title (Z-A)', value: 'slug-dsc' },
	];

	$: posts = posts.sort(sortFunction[filterBy]);
</script>

<style>
	.filter-posts {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
		margin-bottom: 16px;
	}

	:global(.no-js .filter-posts) {
		display: none;
		visibility: hidden;
	}
</style>

<div class="filter-posts">
	<label for="id_select">Filter by:</label>
	<select id="id_select" bind:value={filterBy}>
		{#each sortPostsItems as item}
			<option value={item.value}>{item.text}</option>
		{/each}
	</select>
</div>
