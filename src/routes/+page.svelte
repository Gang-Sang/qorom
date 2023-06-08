<script lang="ts">
	import Home from '../areas/home/home.svelte';
	import type { HomeModel } from '../common/types/pageModels';

	export let data: HomeModel;
</script>

<Home model={data} />
