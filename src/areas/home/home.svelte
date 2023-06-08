<script lang="ts">
	import type { HomeModel } from '../../common/types/pageModels';

	export let model: HomeModel;
</script>

<div>
	{#each model.forums as forum, index}
		<div>
			<h3><a href="/forum/{forum.id}">{forum.name}</a></h3>
			<p>{forum.description}</p>
		</div>
	{/each}
</div>
