<script>
	export let text;
	export let redirect;
</script>

<a href={redirect}>{text}</a>

<style lang="scss">
	a {
		border: none;
		position: relative;

		background-color: var(--bg, black);
		border-radius: 0px;
		border: 1px solid white;
		padding: 23px 53px;
		text-decoration: none;

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
