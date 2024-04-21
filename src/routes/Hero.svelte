<script>
</script>

<section>
	<div class="crop">
		<img
			src="/homepage/hero-bg-desktop@2x.jpg"
			alt="A top down view of a spaghetti and prawn dish"
		/>
	</div>
	<div>
		<img id="logo" src="/logo.svg" alt="Dine" />
		<h1>Exquisite dining since 1989</h1>
		<p>
			Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from
			the comfort of our farmhouse.
		</p>
		<input type="button" value="BOOK A TABLE" />
	</div>
</section>

<style lang="scss">
	* {
		--height: 820px;
	}

	section {
		height: var(--height);
		padding: 0 var(--horizontal-padding);
		padding-top: 65px;

		background-color: var(--colour-cod-gray);
	}

	.crop {
		overflow: hidden;
		position: absolute;
		right: 0;
		top: 0;

		height: var(--height);
		width: min(1000px, 100%);

		& > img {
			position: absolute;
			right: 0;

			height: var(--height);

			filter: contrast(90%) saturate(90%);
		}
	}

	#logo {
		position: relative;

		height: 40px;
	}

	h1 {
		position: relative;

		color: white;

		font-family: 'League Spartan';
		font-size: var(--size-3xl);
		font-weight: var(--weight-light);
		letter-spacing: var(--letter-spacing-3xs);
		line-height: var(--line-height-3xl);
	}

	p {
		position: relative;

		color: white;

		font-family: 'League Spartan';
		font-size: var(--size-l);
		font-weight: var(--weight-regular);
		letter-spacing: var(--letter-spacing-zero);
		line-height: var(--line-height-m);
	}

	input[type='button'] {
		position: relative;
	}
</style>
