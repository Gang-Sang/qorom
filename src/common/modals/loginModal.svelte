<script lang="ts">
	import * as userApi from "../api/userApi";
	import { userStore } from "../stores/userStore";

	async function startLogInProcess() {
		const publicKey: string = 'Test-Key';
		const messageToSign = await userApi.GetUserSigningMessage(publicKey);
		const signedMessage = messageToSign;
		const user = await userApi.signInUser(publicKey, signedMessage);

		if(user) {
			userStore.update(store => ({
				...store,
				user: user
			}));
		}
	}
</script>

<dialog open>
	<div>
		<h1>Log in with wallet</h1>
		<p>Log in to post, comment, and vote. You will need to sign a message with your wallet to authenticate.</p>
		<button on:click={startLogInProcess}>Log in</button>
	</div>
</dialog>