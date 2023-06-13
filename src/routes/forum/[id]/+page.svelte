<script lang="ts">
	import Forum from '../../../areas/forum/forum.svelte';
	import type { ForumModel } from '../../../common/types/pageModels.d.ts';

	export let data: ForumModel;
</script>

<Forum model={data} />
