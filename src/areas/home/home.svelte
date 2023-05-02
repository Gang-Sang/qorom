<script>
	let count = 0;

	const addCount = () => {
		count += 1;
	}
</script>

<div>
	HOME { count }
	<br/>
	<button on:click={addCount}>+1</button>
</div>