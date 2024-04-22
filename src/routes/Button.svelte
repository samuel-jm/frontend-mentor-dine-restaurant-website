<script>
	export let text;
</script>

<input type="button" value={text} />

<style lang="scss">
	input {
		border: none;
		position: relative;

		background-color: var(--bg, black);
		border-radius: 0px;
		border: 1px solid white;
		padding: 23px 53px;

		color: white;

		font-family: 'League Spartan';
		font-size: var(--size-m);
		font-weight: var(--weight-semi-bold);
		letter-spacing: var(--letter-spacing-2xl);
		line-height: var(--line-height-3xs);

		&:hover {
			background-color: white;
			border: var(--border-hover, 1px solid black);

			color: var(--colour-cod-gray);

			cursor: pointer;
		}
	}
</style>
