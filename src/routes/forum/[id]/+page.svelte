<script lang="ts">
	import type { ForumModel } from '../../../common/types/pageModels.d.ts';

	export let data: ForumModel;
</script>

<div>
	<div>
		<div>{data.forum?.name}</div>
		<div>{data.forum?.description}</div>
	</div>
	<div>
		<div>POST</div>
		{#each data.posts as post (post.id)}
			<div>
				<div>{post.title}</div>
				<div>{post.content}</div>
			</div>
		{/each}
	</div>
</div>
