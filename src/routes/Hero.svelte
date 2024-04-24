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
	section {
		height: 820px;
		padding-top: 65px;

		background-color: var(--colour-cod-gray);
	}

	.crop {
		overflow: hidden;
		position: absolute;
		right: 0;
		top: 0;

		height: 100%;
		width: min(895px, 100%);

		& > img {
			position: absolute;
			right: 0;

			height: 100%;

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

	@media (max-width: 600px) {
	}

	@media (max-width: 1000px) {
		section {
			display: flex;
			flex-direction: column;
			align-items: center;

			height: 992px;
			padding-top: 374px;
		}

		.crop {
			width: 100%;
			height: 373px;

			& > img {
				position: static;

				width: 100%;
				height: auto;
				content: url('/homepage/hero-bg-tablet@2x.jpg');
			}
		}

		.group {
			align-items: center;

			margin-top: 38px;
			width: 100%;
			max-width: 100%;

			text-align: center;

			& h1 {
				font-size: var(--size-2xl);
				letter-spacing: var(--letter-spacing-2xs);
				line-height: var(--line-height-2xl);
			}

			& p {
				margin-top: 20px;
				margin-bottom: 52px;
				max-width: 50ch;
			}
		}
	}
</style>
