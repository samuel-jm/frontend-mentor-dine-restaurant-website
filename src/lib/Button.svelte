<script>
	export let text;
	export let style;
</script>

<input type="button" value={text} {style} />

<style lang="scss">
	input {
		border: none;
		position: var(--position);

		background-color: var(--bg, black);
		border-radius: 0px;
		border: 1px solid white;
		padding: 25px 55px;

		color: white;

		&:hover {
			background-color: white;
			border: var(--border-hover, 1px solid black);

			color: var(--colour-cod-gray);
		}
	}
</style>
