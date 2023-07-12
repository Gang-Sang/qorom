<script lang="ts">
	import type { HomeModel } from '../../common/types/pageModels'
	export let model: HomeModel;
</script>

<style>
.forum-wrapper {
	width: 90%;
	text-align: center;
}
.forum {
	border: 1px solid black;
	margin: 10px;
	padding: 10px;
	min-height: 100px;
}
</style>

<div class="forum-wrapper">
	{#each model.forums as forum, index}
		<div class="forum">
			<h3><a href="/forum/{forum.id}">{forum.name}</a></h3>
			<p>{forum.description}</p>
		</div>
	{/each}
</div>
