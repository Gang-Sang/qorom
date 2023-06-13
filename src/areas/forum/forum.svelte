<script lang="ts">
	import type { ForumModel } from '../../common/types/pageModels';

	export let model: ForumModel;
</script>

<div>
	<div>
		<div>{model.forum?.name}</div>
		<div>{model.forum?.description}</div>
	</div>
	<div>
		<div>POST</div>
		{#each model.posts as post (post.id)}
			<div>
				<div>{post.title}</div>
				<div>{post.content}</div>
			</div>
		{/each}
	</div>
</div>