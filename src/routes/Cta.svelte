<script>
	import Button from './Button.svelte';
</script>

<section>
	<img src="/homepage/ready-bg-desktop@2x.jpg" alt="A plate of avocado and tomato on toast" />
	<h2>Ready to make a reservation?</h2>
	<Button --bg="transparent" text="BOOK A TABLE" />
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: space-between;
		align-items: center;

		overflow: hidden;

		height: 240px;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;

		height: 100%;
		width: auto;
	}

	h2 {
		position: relative;

		color: white;

		font-family: 'League Spartan';
		font-size: var(--size-2xl);
		font-weight: var(--weight-bold);
		letter-spacing: var(--letter-spacing-xs);
		line-height: var(--line-height-xl);
	}
</style>
