<script>
	import Button from './Button.svelte';
</script>

<section>
	<div class="crop">
		<img
			src="/homepage/hero-bg-desktop@2x.jpg"
			alt="A top down view of a spaghetti and prawn dish"
		/>
	</div>
	<img id="logo" src="/logo.svg" alt="Dine" />
	<div class="group">
		<h1>Exquisite dining since 1989</h1>
		<p>
			Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from
			the comfort of our farmhouse.
		</p>
		<Button
			--bg="var(--colour-cod-gray)"
			--border-hover="none"
			text={'BOOK A TABLE'}
			redirect={'/booking'}
		/>
	</div>
</section>

<style lang="scss">
	* {
		--height: 820px;
	}

	section {
		height: var(--height);
		padding-top: 65px;

		background-color: var(--colour-cod-gray);
	}

	.crop {
		overflow: hidden;
		position: absolute;
		right: 0;
		top: 0;

		height: var(--height);
		width: min(895px, 100%);

		& > img {
			position: absolute;
			right: 0;

			height: var(--height);

			filter: contrast(95%) saturate(85%);
		}
	}

	#logo {
		position: relative;

		height: 40px;
	}

	.group {
		align-items: flex-start;
		flex-direction: column;
		display: flex;

		margin-top: 153px;
		width: fit-content;
		max-width: 50%;

		& h1 {
			position: relative;

			max-width: 12ch;

			color: white;

			font-family: 'League Spartan';
			font-size: var(--size-3xl);
			font-weight: var(--weight-light);
			letter-spacing: var(--letter-spacing-3xs);
			line-height: var(--line-height-3xl);
		}

		& p {
			position: relative;

			margin-bottom: 40px;
			margin-top: 10px;
			max-width: 38ch;

			color: white;

			font-family: 'League Spartan';
			font-size: var(--size-l);
			font-weight: var(--weight-regular);
			letter-spacing: var(--letter-spacing-zero);
			line-height: var(--line-height-m);
		}
	}
</style>
