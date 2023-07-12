<style>
	:global(body) {
		margin: 0;
		padding: 0;
		width: 100%;
	}
	.header {
		height: 50px;
	}
	.status-line {
		height: 20px;
		text-align: right;
		background-color: darkgray;
		color: white;
		padding: 0px 50px 0px 50px;
	}
	.footer {
		height: 50px;
	}
</style>

<script lang="ts">
	import type { MainModel } from "../common/types/pageModels";
	import { userStore } from "../common/stores/userStore";

	export let data: MainModel;
	userStore.update(store => ({
		...store,
		user: data.user
	}));
</script>

<div class="header">
	<div class="status-line">
		<div>
			{#if $userStore.user}
				<a href="void()">{$userStore.user?.name ?? $userStore.user?.publicKey} [Disconnect Wallet]</a>
			{:else}
				<a href="void()">Guest [Connect Wallet]</a>
			{/if}
		</div>
	</div>
	<div>MENU</div>
</div>

<div style="width:100%">
	<slot />
</div>

<div class="footer">
	Footer
</div>

